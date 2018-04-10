const express = require('express');
const morgan = require('morgan');
const shell = require('node-powershell');
const config = require('./config');

let ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true,
  debugMsg: false
})

// initialise app
const app = express();

// load middleware
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('nuc-api');
});

app.get('/radio', (req, res, next) => {
  res.send('Radio');
});

app.post('/radio/:action', (req, res, next) => {
  if(req.params.action === 'on') {
    // Turn radio on
    ps.addCommand(config.workingDir + '.\\scripts\\launchABCradio.ps1');
    ps.invoke().then(output => {
      res.send('OK');
    }).catch(err => {
      res.send(err);
    });
  } else if (req.params.action === 'off') {
    // Turn radio off
    ps.addCommand(config.workingDir + '.\\scripts\\killABCradio.ps1');
    ps.invoke().then(output => {
      res.send('OK');
    }).catch(err => {
      res.send(err);
    });
  } else {
    res.status(404).send();
  }
});

app.listen(config.server.port, () => {
  console.log(`Server is listening on port ${config.server.port}`);
});

const express = require('express');
const morgan = require('morgan');
const config = require('./config');

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

app.listen(config.server.port, () => {
  console.log(`Server is listening on port ${config.server.port}`);
});

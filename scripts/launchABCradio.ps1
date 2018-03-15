$ie = New-Object -ComObject InternetExplorer.Application
$ie.Navigate("https://radio.abc.net.au/stations/classic/live?play=true")
$ie.Visible = $true

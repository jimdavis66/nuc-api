$shellapp = New-Object -ComObject "Shell.Application"
$ShellWindows = $shellapp.Windows()
for ($i = 0; $i -lt $ShellWindows.Count; $i++)
{
 if ($ShellWindows.Item($i).FullName -like "*iexplore.exe")
  {
  $ie = $ShellWindows.Item($i)
  $ie.quit()
  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($ie)
  }
}
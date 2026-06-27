Set-Location $PSScriptRoot
$installed = $false
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
    $installed = $true
}
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    winget install OpenJS.NodeJS --accept-package-agreements --accept-source-agreements
    $installed = $true
}
if ($installed) {
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
}
git pull rynzemini main *>$null
if (-not (Test-Path $PROFILE)) {
    New-Item -Path $PROFILE -Type File -Force
}
$fn = "function rynzen { node '$PSScriptRoot\rynzen-cli.js' }"
Add-Content -Path $PROFILE -Value $fn
Clear-Host
node "$PSScriptRoot\rynzen-cli.js"

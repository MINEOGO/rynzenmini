if ($PSScriptRoot) {
    Set-Location $PSScriptRoot
}
$dir = if ($PSScriptRoot) { $PSScriptRoot } else { $PWD.Path }
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
if (Test-Path "$dir\.git") {
    Set-Location $dir
    git pull rynzemini main *>$null
} else {
    if (-not (Test-Path "$dir\rynzenmini")) {
        git clone git@github.com:MINEOGO/rynzenmini.git *>$null
        if (-not $?) {
            git clone https://github.com/MINEOGO/rynzenmini.git *>$null
        }
    }
    if (Test-Path "$dir\rynzenmini") {
        $dir = "$dir\rynzenmini"
        Set-Location $dir
    }
}
if (-not (Test-Path $PROFILE)) {
    New-Item -Path $PROFILE -Type File -Force
}
$fn = "function rynzen { node '$dir\rynzen-cli.js' }"
Add-Content -Path $PROFILE -Value $fn
Clear-Host
node "$dir\rynzen-cli.js"

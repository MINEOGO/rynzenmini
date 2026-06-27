#!/bin/sh
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR" || exit
if ! command -v git >/dev/null 2>&1; then
    sudo apt-get update && sudo apt-get install git -y
fi
if ! command -v node >/dev/null 2>&1; then
    sudo apt-get update && sudo apt-get install nodejs npm -y
fi
git pull rynzemini main >/dev/null 2>&1 || git pull >/dev/null 2>&1
sudo tee /usr/local/bin/rynzen >/dev/null << EOF
#!/bin/sh
node "$DIR/rynzen-cli.js"
EOF
sudo chmod +x /usr/local/bin/rynzen
clear
exec node "$DIR/rynzen-cli.js"

#!/bin/sh
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR" || exit
if ! command -v git >/dev/null 2>&1; then
    sudo pacman -Sy git --noconfirm
fi
if ! command -v node >/dev/null 2>&1; then
    sudo pacman -Sy nodejs npm --noconfirm
fi
if [ -d "$DIR/.git" ]; then
    git pull rynzemini main >/dev/null 2>&1 || git pull >/dev/null 2>&1
else
    if [ ! -d "$DIR/rynzenmini" ]; then
        git clone git@github.com:MINEOGO/rynzenmini.git >/dev/null 2>&1 || git clone https://github.com/MINEOGO/rynzenmini.git >/dev/null 2>&1
    fi
    if [ -d "$DIR/rynzenmini" ]; then
        DIR="$DIR/rynzenmini"
        cd "$DIR" || exit
    fi
fi
sudo tee /usr/local/bin/rynzen >/dev/null << EOF
#!/bin/sh
node "$DIR/rynzen-cli.js"
EOF
sudo chmod +x /usr/local/bin/rynzen
clear
exec node "$DIR/rynzen-cli.js"

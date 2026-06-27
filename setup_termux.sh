#!/bin/sh
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR" || exit
if ! command -v git >/dev/null 2>&1; then
    pkg install git -y
fi
if ! command -v node >/dev/null 2>&1; then
    pkg install nodejs -y
fi
git pull rynzemini main >/dev/null 2>&1 || git pull >/dev/null 2>&1
cat << EOF > "$PREFIX/bin/rynzen"
#!/bin/sh
node "$DIR/rynzen-cli.js"
EOF
chmod +x "$PREFIX/bin/rynzen"
clear
exec node "$DIR/rynzen-cli.js"

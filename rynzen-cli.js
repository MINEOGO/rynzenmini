const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const readline = require('readline');

const banner = `\x1b[33m
 ____ ___  _ _      ____  _____ _     
/  __\\\\  \\/// \\  /|/_   \\/  __// \\  /|
|  \\/| \\  / | |\\ || /   /|  \\  | |\\ ||
|    / / /  | | \\||/   /_|  /_ | | \\||
\\_/\\_\\/_/   \\_/  \\|\\____/\\____\\\\_/  \\|
\x1b[0m`;

console.log(banner);
console.log('\x1b[35m[RynZen CLI] Scanning system and configuration...\x1b[0m\n');

let nodeOk = false;
try {
    const version = process.version;
    console.log(`\x1b[32m[✓]\x1b[0m Node.js version: ${version}`);
    nodeOk = true;
} catch (e) {
    console.log('\x1b[31m[✗]\x1b[0m Node.js not detected');
}

let gitOk = false;
try {
    execSync('git --version', { stdio: 'ignore' });
    console.log('\x1b[32m[✓]\x1b[0m Git detected');
    gitOk = true;
} catch (e) {
    console.log('\x1b[31m[✗]\x1b[0m Git not detected');
}

const packageJsonPath = path.join(__dirname, 'package.json');
let packagesOk = false;
if (fs.existsSync(packageJsonPath)) {
    try {
        const pkg = require(packageJsonPath);
        const deps = Object.keys(pkg.dependencies || {});
        let missing = false;
        for (const dep of deps) {
            try {
                require.resolve(dep);
            } catch (err) {
                missing = true;
                break;
            }
        }
        if (!missing) {
            console.log('\x1b[32m[✓]\x1b[0m All npm packages installed');
            packagesOk = true;
        } else {
            console.log('\x1b[33m[!]\x1b[0m Missing dependencies, installing...');
            execSync('npm install', { cwd: __dirname, stdio: 'inherit' });
            console.log('\x1b[32m[✓]\x1b[0m Dependencies installed successfully');
            packagesOk = true;
        }
    } catch (e) {
        console.log('\x1b[33m[!]\x1b[0m Error checking packages, running npm install...');
        execSync('npm install', { cwd: __dirname, stdio: 'inherit' });
        packagesOk = true;
    }
} else {
    console.log('\x1b[33m[!]\x1b[0m package.json not found, initializing and installing...');
    const defaultPkg = {
        name: "rynzenmini",
        version: "1.0.0",
        main: "RynZen-simple.js",
        dependencies: {
            "discord.js": "^14.14.1",
            "undici": "^6.13.0",
            "dotenv": "^16.4.5"
        }
    };
    fs.writeFileSync(packageJsonPath, JSON.stringify(defaultPkg, null, 2));
    execSync('npm install', { cwd: __dirname, stdio: 'inherit' });
    packagesOk = true;
}

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    if (content.includes('isupportjewishanimefeet6767=')) {
        const line = content.split('\n').find(l => l.startsWith('isupportjewishanimefeet6767='));
        const token = line ? line.split('=')[1].trim() : '';
        if (token.length > 10) {
            console.log('\x1b[32m[✓]\x1b[0m Bot token configured');
            startBot();
            return;
        }
    }
}

askForToken();

function askForToken() {
    console.log('\n\x1b[33m┌────────────────────────────────────────────────────────┐');
    console.log('│               HOW TO GET YOUR BOT TOKEN                │');
    console.log('├────────────────────────────────────────────────────────┤');
    console.log('│ 1. Go to: https://discord.com/developers/applications  │');
    console.log('│ 2. Log in with your Discord account.                   │');
    console.log('│ 3. Click the \'New Application\' (or Create) button.     │');
    console.log('│ 4. Fill in the details (name, avatar, etc.).           │');
    console.log('│ 5. Navigate to the \'Bot\' tab on the left.              │');
    console.log('│ 6. Click \'Reset Token\' and copy the token.             │');
    console.log('│    (On mobile: click the hamburger menu icon)          │');
    console.log('│ 7. Paste your bot token in the prompt below.           │');
    console.log('└────────────────────────────────────────────────────────┘\x1b[0m\n');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('\x1b[36mEnter your Bot Token: \x1b[0m', (answer) => {
        rl.close();
        const token = answer.trim();
        if (token.length < 10) {
            console.log('\x1b[31m[✗] Invalid token format. Please try again.\x1b[0m');
            askForToken();
            return;
        }
        fs.writeFileSync(envPath, `isupportjewishanimefeet6767=${token}\n`);
        console.log('\x1b[32m[✓] Token saved to .env\x1b[0m\n');
        console.log('\x1b[36mhi bot\'s setup is done ok. to run it, you can simply type "rynzen" and hit enter. itll automatically scan what it needs, what it has and stuff qnd start the bot, itll print logs on your terminal ok!!\x1b[0m\n');
        startBot();
    });
}

function startBot() {
    console.log('\x1b[35m[RynZen CLI] Starting Discord Bot...\x1b[0m\n');
    const bot = spawn('node', [path.join(__dirname, 'RynZen-simple.js')], {
        cwd: __dirname,
        stdio: 'inherit'
    });
    bot.on('close', (code) => {
        console.log(`\n\x1b[33m[RynZen CLI] Bot process exited with code ${code}\x1b[0m`);
    });
}

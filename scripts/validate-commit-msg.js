import fs from 'fs';
import { execSync } from 'child_process';

// Get the path to the commit message file (passed by Git)
const msgPath = process.argv[2];
const msg = fs.readFileSync(msgPath, 'utf8').trim();

let currentBranch = '';

try {
    // Get the current branch name
    currentBranch = execSync('git symbolic-ref --short HEAD').toString().trim();
} catch (e) {
    // In detached HEAD state or error, we might want to skip or fail. Skipping is safer for CI/CD.
    process.exit(0);
}

// Validation Logic
// Format: <branch_name>:<message>
// We accept a space after the colon optionally, but strict format was requested.
// User request: <branch_name>:<commit_message> (e.g. main:update readme)

// Allow standard Merge commits to pass validation
if (msg.startsWith('Merge branch') || msg.startsWith('Merge remote-tracking branch')) {
    process.exit(0);
}

const expectedPrefix = `${currentBranch}:`;

if (!msg.startsWith(expectedPrefix)) {
    console.error('\n\x1b[31m[COMMIT ERROR] Invalid format.\x1b[0m');
    console.error(`Your commit message must start with your branch name.`);
    console.error(`\x1b[32mExpected: "${expectedPrefix} <message>"\x1b[0m`);
    console.error(`\x1b[31mActual:   "${msg}"\x1b[0m\n`);
    process.exit(1);
}

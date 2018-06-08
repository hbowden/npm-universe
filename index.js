const spawn = require('cross-spawn');
const names = require("all-the-package-names");

let totalPackages = names.length;

for(let i = 0; i < totalPackages; i + 100) {
    let command = names.slice(i, i + 100);
    command.unshift('install');
    command.push('--save');
    spawn.sync('npm', command, { stdio: 'inherit' });
}

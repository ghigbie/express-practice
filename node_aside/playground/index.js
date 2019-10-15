const fs = require('fs');

const textIn = fs.readFileSync('./txt/moo.txt', 'utf-8');
const textOut = `Here is the file: ${textIn} on ${Date.now}`;
fs.writeFile('./txt/output.txt', textOut);
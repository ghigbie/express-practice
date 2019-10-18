const fs = require('fs');

const textIn = fs.readFile('./txt/moo.txt', 'utf-8', (err, data)=> {
    const textOut = data;
    fs.writeFileSync('./txt/output.txt', textOut);
});
const textOut = `Here is the file: ${textIn} on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);

fs.readFile('./txt/mootwo.txt', 'utf-8', (err, data) => {
   fs.writeFile('./txt/outputtwo.txt', data, err => {

   });
});
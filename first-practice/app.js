const http = require('http');
const express = require('express');

const app = express();
app.use('/', (req, res, next) => {
    console.log('This always runs');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In add product route');
    console.log(req.body);
    res.send('<form action="/product" method="POST"><input type="text" /></form>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Meow Home!!</h1>');
    console.log('Meow home run');
});

const server = http.createServer(app);

server.listen(3000);
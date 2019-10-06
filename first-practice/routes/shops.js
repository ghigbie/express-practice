const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Meow Home!!</h1>');
    console.log('Meow home run');
});

module.exports(router);
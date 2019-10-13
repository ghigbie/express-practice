const express = require('express');
const path = require('path');

const rootDir = require('./../utils/path');

const router = express.Router();

let username = ''

router.get('/', (req, res, next) => {
    const welcome = 'Welcome home';
    res.render('home', {
        pageTitle: 'Home',
        welcome
    });
});

router.post('/', (req, res, next) => {
    username = req.body.username;
    res.redirect('/users');
});



module.exports = router;
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const router = express.Router();

router.get('/404.ejs', (req, res, next) => {
    const pageTitle = 'Page Not Found'
    const message = 'What are you doing with your life?';
    res.render('/*', {
        pageTitle,
        message
    })
});
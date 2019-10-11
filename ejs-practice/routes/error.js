const express = require('express');
const path = require('path');

const rootDir = require('./../utils/path');

const router = express.Router();

router.get('/*', (req, res, next) => {
    const mainMessage = 'Page not Found!';
    const criticism = 'What are you doing with your life?'
    res
        .status(404)
        .render('error', {
            pageTitle: 'Page Not Found',
            mainMessage,
            criticism
        })
});

module.exports = router;
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const router = express.Router();

router.get('/*', (req, res, next) => {
    const pageTitle = 'Page Not Found'
    const message = 'What are you doing with your life?';
    res
        .status(404)
        .render('404', {
            pageTitle,
            message,
            path: '/*'
        });
});

module.exports = router;
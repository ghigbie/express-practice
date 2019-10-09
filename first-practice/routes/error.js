const express = require('express');
const path = require('path');

const rootDir = require('./../utils/path');

const router = express.Router();

router.get('/*', (req, res, next) => {
    const message = 'Page not found...what are you doing with your life?';
    res
        .status(404)
        .render('404', {pageTitle: 'Page Not Found', message});
});

module.exports = router;
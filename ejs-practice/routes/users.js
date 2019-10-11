const express = require('express');
const path = require('path');

const rootDir = require('./../utils/path');

const router = express.Router();

router.get('/*', (req, res,next) => {
    const users = [
        {name: 'Bubba'},
        {name: 'Moo'},
        {name: 'Ouch'},
    ];

    res.render('users', {
            pageTitle: 'Users',
            users
        });
});

module.exports = router;
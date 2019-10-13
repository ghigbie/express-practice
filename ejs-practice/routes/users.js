const express = require('express');
const path = require('path');

const rootDir = require('./../utils/path');

const router = express.Router();
const users = [
    { name: 'Bubba' },
    { name: 'Moo' },
    { name: 'Ouch' },
];
const userName = '';
router.get('/users', (req, res, next) => {
    res.render('users', {
            pageTitle: 'Users',
            users,
            userName,
        });
});

router.post('/add-user', (req, res, next) => {
    res.redirect('/users', {
            pageTitle: 'Users',
            users,
            userName,
        });
});

module.exports = router;
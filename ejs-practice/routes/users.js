const express = require('express');
const path = require('path');
bodyParser = require('body-parser');

const rootDir = require('./../utils/path');

const router = express.Router();
const users = [
    { name: 'Bubba' },
    { name: 'Moo' },
    { name: 'Ouch' },
];
const username = '';
router.get('/users', (req, res, next) => {
    res.render('users', {
            pageTitle: 'Users',
            users,
            userName,
        });
});

router.post('/add-user', (req, res, next) => {
    username = {userName: req.body.username}
    res.redirect('/users', {
            pageTitle: 'Users',
            users,
            username,
        });
});

module.exports = router;
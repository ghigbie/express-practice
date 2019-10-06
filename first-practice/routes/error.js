const express = require('express');

const router = express.Router();

router.get('/*', (req, res, next) => {
    res
        .status(404)
        .send('<h1>What are you doing?</h1>');
});

module.exports = router;
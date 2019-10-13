const express = require('express');
const path = require('path');
const errorController = require('../controllers/error');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/*', errorController.getNotFound);

module.exports = router;
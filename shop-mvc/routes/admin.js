const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProducts);

exports.routes = router;
const express = require("express");

const router = express.Router();

const productsController = require('../controllers/products');


// GET Data -> read data 
router.get('/products', productsController.getAllProducts);

// CREATE Data -> post data
router.post('/product', productsController.createProducts);

module.exports = router;

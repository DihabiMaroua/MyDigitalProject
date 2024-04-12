const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// tous les produits
router.get('/', productController.productsList);
// Informations d'un produit
router.get('/product/:id', productController.getProduct);

router.post('/filter/products', productController.filterProducts);

module.exports = router;


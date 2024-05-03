const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

router.post('/create/wishlist', wishlistController.createWishlist);
router.get('/wishlist/:id', wishlistController.getWishlistById);
router.put('/wishlist/:id', wishlistController.updateWishlist);
router.delete('/wishlist/:id', wishlistController.deleteWishlist);
router.post('/wishlist/:wishlistId/products/:productId', wishlistController.addProduct);


module.exports = router;

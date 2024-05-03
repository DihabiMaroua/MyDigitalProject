const Wishlist = require('../models/wishlist');
const validators = require('../utils/validators');

// Créer une wishlist
exports.createWishlist = async ({ name, createdBy, isPublic, idUser }) => {
    try {
        if (!name || !idUser) {
            throw new Error('Le nom de la wishlist et l\'identifiant de l\'utilisateur sont requis.');
        }

        const newWishlist = await Wishlist.create({
            name,
            createdAt: new Date(),
            createdBy,
            isPublic: isPublic || false, 
            idUser
        });

        return newWishlist;
    } catch (error) {
        console.error('Erreur lors de la création de la wishlist :', error);
        throw new Error('Une erreur est survenue lors de la création de la wishlist.');
    }
};


// infos wishlist
exports.getWishlistById = async (wishlistId) => {
    try {
        const wishlist = await Wishlist.findByPk(wishlistId);
        if (!wishlist) {
            throw new Error('Wishlist not found');
        }
        return wishlist;
    } catch (error) {
        console.error('Error retrieving wishlist:', error);
        throw error;
    }
};


// modifier une wishlist
exports.updateWishlist = async (wishlistId, updates) => {
    try {
        const wishlist = await Wishlist.findByPk(wishlistId);
        if (!wishlist) {
            throw new Error('Wishlist not found');
        }

        const updatedWishlist = await wishlist.update(updates);
        return updatedWishlist;
    } catch (error) {
        console.error('Error updating wishlist:', error);
        throw error;
    }
};

// supprimer une wishlist
exports.deleteWishlist = async (wishlistId) => {
    try {
        const wishlist = await Wishlist.findByPk(wishlistId);
        if (!wishlist) {
            throw new Error('Wishlist not found');
        }

        await wishlist.destroy();
        return { message: 'Wishlist successfully deleted' };
    } catch (error) {
        console.error('Error deleting wishlist:', error);
        throw error;
    }
};

// ajouter un produit à la wishlist
const Product = require('../models/product');
exports.addProductToWishlist = async (wishlistId, productId) => {
    try {
        const wishlist = await Wishlist.findByPk(wishlistId);
        if (!wishlist) {
            throw new Error('Wishlist not found');
        }
        const product = await Product.findByPk(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        // Associer le produit à la wishlist
        await wishlist.addProduct(product);
        return { message: 'Product added to wishlist successfully' };
    } catch (error) {
        console.error('Error adding product to wishlist:', error);
        throw error;
    }
};

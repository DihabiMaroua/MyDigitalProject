const wishlistService = require('../services/wishlistService');

// créer une wishlist 
exports.createWishlist = async (req, res) => {
    try {
        const { name, createdBy, isPublic, idUser } = req.body;
        const newWishlist = await wishlistService.createWishlist({ name, createdBy, isPublic, idUser });
        res.status(201).json(newWishlist);
    } catch (error) {
        console.error('Erreur lors de la création de la wishlist :', error.message);
        res.status(error.statusCode || 500).json({ error: error.message || 'Une erreur est survenue lors de la création de la wishlist.' });
    }
};


// voir les infos de la wishlist 
exports.getWishlistById = async (req, res) => {
    try {
        const wishlistId = req.params.id;
        const wishlist = await wishlistService.getWishlistById(wishlistId);
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist non trouvée.' });
        }
        res.json(wishlist);
    } catch (error) {
        console.error('Erreur lors de la récupération de la wishlist :', error.message);
        res.status(error.statusCode || 500).json({ error: error.message || 'Une erreur est survenue lors de la récupération de la wishlist.' });
    }
};


// modifier une wishlist
exports.updateWishlist = async (req, res) => {
    try {
        const wishlistId = req.params.id;
        const updates = req.body;
        const updatedWishlist = await wishlistService.updateWishlist(wishlistId, updates);
        res.json({ message: 'Wishlist mise à jour avec succès.', updatedWishlist });
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la wishlist :', error.message);
        res.status(error.statusCode || 500).json({ error: error.message || 'Une erreur est survenue lors de la mise à jour de la wishlist.' });
    }
};

// supprimer une wishlist
exports.deleteWishlist = async (req, res) => {
    try {
        const wishlistId = req.params.id;
        await wishlistService.deleteWishlist(wishlistId);
        res.json({ message: 'Wishlist supprimée avec succès.' });
    } catch (error) {
        console.error('Erreur lors de la suppression de la wishlist :', error.message);
        res.status(error.statusCode || 500).json({ error: error.message || 'Une erreur est survenue lors de la suppression de la wishlist.' });
    }
};

// ajouter un produit à une wishlist 
exports.addProduct = async ( req, res ) => {
    try {
        const { wishlistId, productId } = req.params;
        const response = await wishlistService.addProductToWishlist(wishlistId, productId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
const productService = require('../services/productService');

//liste des produits
exports.productsList = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la récupération des produits: " + error.message });
    }
};

//info d'un produit
exports.getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


exports.filterProducts = async (req, res) => {
    try {
      const categoryIds = req.body.categories; 
      const products = await productService.filterProductsByCategories(categoryIds);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).send({ message: "Erreur lors de la filtration des produits par catégories: " + error.message });
    }
};
const validators = require('../utils/validators');
const Product = require('../models/product');
const Category = require('../models/category');
const ProductCategory = require('../models/productCategory');
const { Op } = require('sequelize');

// récupérer la liste des produits
exports.getProducts = async () => {
  try {
    // Utilisation de findAll pour récupérer tous les produits
    const products = await Product.findAll();
    return products;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits :', error);
    throw new Error('Une erreur est survenue lors de la récupération des produits.');
  }
};


// récupérer les informations d'un produit spécifique par son ID
exports.getProductById = async (productId) => {
    try {
      // Utilise findByPk pour récupérer un produit par son ID
      const product = await Product.findByPk(productId);
      if (!product) {
        // Gère le cas où le produit n'est pas trouvé
        throw new Error(`Produit avec l'ID ${productId} non trouvé.`);
      }
      return product;
    } catch (error) {
      console.error('Erreur lors de la récupération du produit :', error);
      throw new Error('Une erreur est survenue lors de la récupération du produit.');
    }
  };

  exports.filterProductsByCategories = async (categoryIds) => {
    try {
      const products = await Product.findAll({
        include: [{
          model: Category,
          where: { id: { [Op.in]: categoryIds }},
          through: { model: ProductCategory, attributes: [] },
          attributes: []
        }]
      });
  
      return products;
    } catch (error) {
      console.error('Erreur lors de la filtration des produits par catégories:', error);
      throw error;
    }
  };
  

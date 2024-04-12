const Product = require('./product');
const Category = require('./category');
const ProductCategory = require('./productCategory');

Product.belongsToMany(Category, { 
  through: ProductCategory,
  foreignKey: 'idProduct',
  otherKey: 'idCategory'
});

Category.belongsToMany(Product, { 
  through: ProductCategory,
  foreignKey: 'idCategory',
  otherKey: 'idProduct'
});

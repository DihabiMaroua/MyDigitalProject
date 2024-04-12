const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const ProductCategory = sequelize.define('ProductCategory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idProduct: {
    type: DataTypes.INTEGER,
    references: { model: 'Product', key: 'id' }
  },
  idCategory: {
    type: DataTypes.INTEGER,
    references: { model: 'Category', key: 'id' }
  }
}, {
  timestamps: false
});

module.exports = ProductCategory;

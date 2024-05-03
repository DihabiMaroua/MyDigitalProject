const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const WishlistProduct= sequelize.define('WishlistProduct', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idProduct: {
    type: DataTypes.INTEGER,
    references: { model: 'Product', key: 'id' }
  },
  idWishlist: {
    type: DataTypes.INTEGER,
    references: { model: 'Wishlist', key: 'id' }
  }
}, {
  timestamps: false
});

module.exports = WishlistProduct;

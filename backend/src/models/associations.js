// Import models
const Product = require('./product');
const Category = require('./category');
const ProductCategory = require('./productCategory');
const User = require('./user');
const UserProfile = require('./userProfile');
const Wishlist = require('./wishlist')
const WishlistProduct = require('./wishlistProduct')

//Product, Wishlist ( Many to many )
Product.belongsToMany(Wishlist, { 
  through: WishlistProduct,
  foreignKey: 'idProduct',
  otherKey: 'idWishlist'
});
Wishlist.belongsToMany(Product, { 
  through: WishlistProduct,
  foreignKey: 'idWishlist',
  otherKey: 'idProduct'
});

//Product, Category ( Many to many )
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

// User, UserProfile ( One to one)
User.hasOne(UserProfile, {
  foreignKey: 'idUser', 
  as: 'userProfile' 
});
UserProfile.belongsTo(User, {
  foreignKey: 'idUser', 
  as: 'user'
});


const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user'); 

const PasswordResetCode = sequelize.define('passwordResetCode', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  expiration: {
    type: DataTypes.DATE,
    allowNull: false
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {       
      model: User,       
      key: 'id'   
    }
  }
}, {
  timestamps: false
});


module.exports = PasswordResetCode;

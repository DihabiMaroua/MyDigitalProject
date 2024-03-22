const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const UserProfile = sequelize.define('UserProfile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    profilePicture: { type: DataTypes.STRING },
    birthDate: { type: DataTypes.DATE },
    idUser: { type: DataTypes.INTEGER, allowNull: false, unique: true }
  }, {
    timestamps: false
});

module.exports = UserProfile;

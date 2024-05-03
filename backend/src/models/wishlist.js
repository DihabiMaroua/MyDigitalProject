const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Wishlist = sequelize.define('Wishlist', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true 
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        get() {
            return !!this.getDataValue('isPublic');
        }
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,  
    tableName: 'wishlists' 
});

module.exports = Wishlist;

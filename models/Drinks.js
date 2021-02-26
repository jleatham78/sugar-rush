const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drinks extends Model {}

Drinks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        drink_name: {
            type: DataTypes.STRING,
        },
    
        add_ins: {
            type: DataTypes.STRING,
        }
    },
        {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
        }

);

module.exports = Drinks;
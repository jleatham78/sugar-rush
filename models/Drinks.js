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
        
        base: {
            type: DataTypes.STRING,
            // references: {
            //     model: 'base',
            //     key: 'id'
            // }
        },
    
        add_ins: {
            type: DataTypes.STRING,
        }
    },
        {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'drinks'
        }

);

module.exports = Drinks;
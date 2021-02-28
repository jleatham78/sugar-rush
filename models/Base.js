const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Base extends Model {}

Base.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
        base: {
            type: DataTypes.STRING,
        }
    },
        {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'base'
        }

);

module.exports = Base;
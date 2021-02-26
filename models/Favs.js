const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favs extends Model {}

Favs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    
        drink_name: {
            type: DataTypes.STRING,
        },
    
        user_id: {
            type: DataTypes.INTEGER,
            //allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
        {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'favs'
        }

);

module.exports = Favs;
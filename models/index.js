const Base = require('./Base');
const Drinks = require('./Drinks');
const Favs = require('./Favs');
const User = require('./User');

User.hasMany(Favs, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
    allowNull: false
});

Favs.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
    allowNull: false
});

Base.belongsTo(Drinks, {
    foreignKey: 'drink_id',
    allowNull: false
})

Drinks.hasMany(Base, {
    foreignKey: 'base',
    allowNull: false
})

module.exports = { User, Favs, Drinks, Base };
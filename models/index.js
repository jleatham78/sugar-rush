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
    foreignKey: 'id',
    allowNull: false
})

Drinks.hasMany(Base, {
    foreignKey: 'id',
    allowNull: false
})

module.exports = { User, Favs, Drinks, Base };
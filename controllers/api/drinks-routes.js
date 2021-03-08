const router = require('express').Router();
const sequelize = require('sequelize');
const { Drinks } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/drinks', withAuth, (req, res) => {
    Drinks.findAll({
        where: {
            base: req.body.base
        },
        attributes: [
            'drink_name',
            'add_ins'
        ]
    })
        .then(dbDrinksData => res.json(dbDrinksData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});


module.exports = router;

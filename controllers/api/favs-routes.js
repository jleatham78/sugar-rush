const router = require('express').Router();
const { Favs } = require('../../models');
const withAuth = require('../../utils/auth');
const menuData = require('../../seed');

router.post('/soda', (req, res) => {
    const returnedDrinks = menuData.filter(function(menuItem) { 
        return menuItem.base == req.body.val})
        console.log(returnedDrinks)
        console.log(req.body)
        return res.render('favorites', {drinks: returnedDrinks})
  });


router.get('/', (req, res) => {
    const favs =
    Favs.findAll({})
        .then(dbFavsData => res.json(dbFavsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    //if (req.session)
    Favs.create({
        drink_name: req.body.drink_name,
        user_id: req.session.user_id

    })
        .then(dbFavsData => res.json(dbFavsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Favs.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbFavsData => {
            if (!dbFavsData) {
                res.status(404).json({ message: 'No drink found with this id' });
                return;
            }
            res.json(dbFavsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

module.exports = router;

const router = require('express').Router();
const { Favs } = require('../../models');
const withAuth = require('../../utils/auth');
const menuData = require('../../seed');


router.get('/soda', (req, res) => {
    console.log("Got the route");
    res.json(menuData.filter(function(e) {
      return e.base == "Rockstar";
    }))   
  });

router.get('/', (req, res) => {
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

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Drinks } = require('../models');

router.get('/', (req, res) => {
  //do I get all drinks or all bases?? and do I need to add "base" to the drink attributes?
  Drinks.findAll({
    attributes: [
      'id',
      'base',
      'drink_name',
      'add_ins'
    ],

  })
    .then(dbDrinksData => res.json(dbDrinksData))
    //const menu = dbDrinksData.map(menu => menu.get({ plain: true }));

    //   res.render('homepage', {
    //     menu
    //     //loggedIn: req.session.loggedIn
    //   });
    //  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//don't have a /drinks route yet?
router.get('/drinks/:base', (req, res) => {
  Drinks.findOne({
    where: {
      base: req.params.base
    },
    attributes: [
      'id',
      'drink_name',
      'base',
      'add_ins',
    ]

  })
    .then(dbDrinksData => {
      if (!dbDrinksData) {
        res.status(404).json({ message: 'No drink found' });
        return;
      }

      // serialize the data
      const menu = dbDrinksData.get({ plain: true });

      // pass data to template
      res.render('single-post', {
        menu,
        //loggedIn: req.session.loggedIn 
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
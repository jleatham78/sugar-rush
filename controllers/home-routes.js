const router = require('express').Router();
const sequelize = require('../config/connection');
const path = require('path');


router.get('/', (req, res) => {
    res.render('homepage');
  });

  router.get('/login', (req, res) => {      
    res.render('signup');
  });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

  router.get('/favs', (req, res) => {
      
    res.render('favorites');
  });

module.exports = router;
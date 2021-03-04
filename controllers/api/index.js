const router = require('express').Router();

const userRoutes = require('./user-routes');
const favsRoutes = require('./favs-routes');
const drinksRoutes = require('./drinks-route');

router.use('/users', userRoutes);
router.use('/favs', favsRoutes);
router.use('/drinks', drinksRoutes);

module.exports = router;
const router = require('express').Router();

const userRoutes = require('./user-routes');
const favsRoutes = require('./favs-routes');

router.use('/users', userRoutes);
router.use('/favs', favsRoutes);

module.exports = router;
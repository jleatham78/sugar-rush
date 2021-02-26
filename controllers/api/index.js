const router = require('express').Router();

const userRoutes = require('./user-routes');
const favsRoutes = require('./favs-routes');

router.use('/users', userRoutes);
router.use('/posts', favsRoutes);

module.exports = router;
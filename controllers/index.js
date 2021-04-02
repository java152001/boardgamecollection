const router = require('express').Router();

// Import our controllers
const gameRoutes = require('./gamesController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const collectionRoutes = require('./collectionController');

// Hook up to the router
router.use('/api/games', gameRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/collection', collectionRoutes);

// Export the router
module.exports = router;

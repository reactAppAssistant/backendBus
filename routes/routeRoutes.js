const express = require('express');
const router = express.Router();
const RouteController = require('../controllers/routeController');

// Create a new route
router.post('/routes', RouteController.createRoute);

// Get all routes
router.get('/routes', RouteController.getAllRoutes);

// Update a route
router.put('/routes/:id', RouteController.updateRoute);

module.exports = router;

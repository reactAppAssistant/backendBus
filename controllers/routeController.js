const Route = require('../models/Route');

// Create a new route
exports.createRoute = async (req, res) => {
  const { startingPoint, endingPoint } = req.body;

  try {
    const newRoute = new Route({ startingPoint, endingPoint });
    await newRoute.save();
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all routes
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a route
exports.updateRoute = async (req, res) => {
  const { id } = req.params;
  const { startingPoint, endingPoint } = req.body;

  try {
    const updatedRoute = await Route.findByIdAndUpdate(id, { startingPoint, endingPoint }, { new: true });
    if (!updatedRoute) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.status(200).json(updatedRoute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

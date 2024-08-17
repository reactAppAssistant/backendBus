const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const routeRoutes = require('./routes/routeRoutes');

const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Routes
app.use('/api', authRoutes);
// Use the user routes
app.use('/api', userRoutes);
// Use the route routes
app.use('/api', routeRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

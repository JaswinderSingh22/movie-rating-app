// app.js

const express = require('express');
const app = express();
// const db = require('./db');
const movieRoutes = require('./routes/movies');

// Middleware
app.use(express.json());

// API routes
app.use('/api/movies', movieRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

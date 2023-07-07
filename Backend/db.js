// db.js

const mongoose = require('mongoose');

// Replace 'mongodb://localhost/mydatabase' with your MongoDB connection string
const dbURI = 'mongodb://localhost/mydatabase';

// Connect to the MongoDB database
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Handle database connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export the database connection
module.exports = db;

// models/Movie.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  releaseYear: Number,
  director: String,
  artist: String
});

// Create a Movie model based on the movieSchema
const Movie = mongoose.model('Movie', movieSchema);

// Export the Movie model
module.exports = Movie;

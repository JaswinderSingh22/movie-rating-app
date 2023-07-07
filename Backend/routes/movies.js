// routes/movies.js

const express = require('express');
const router = express.Router();
const Movie = require('./models/Movie');

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new movie
router.post('/', async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    releaseYear: req.body.releaseYear,
    director: req.body.director,
    artist: req.body.artist
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Export the movie routes
module.exports = router;

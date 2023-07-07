// store/index.js

import { createStore } from 'vuex';

const store = createStore({
  state: {
    movies: [
      {
        id: 1,
        title: 'Movie 1',
        thumbnail: 'mmmmm',
        releaseYear: 2021,
        director: 'Director 1',
        artist: 'Artist 1',
        averageRating: 4.5,
        totalRatingCount: 10,
        reviews: []
      },
      {
        id: 2,
        title: 'Movie 2',
        thumbnail: 'mmmmm',
        releaseYear: 2022,
        director: 'Director 2',
        artist: 'Artist 2',
        averageRating: 3.8,
        totalRatingCount: 5,
        reviews: []
      },
      // Add more movies here
    ]
  },
  mutations: {
    addReview(state, payload) {
      const { movieId, review } = payload;
      const movie = state.movies.find((m) => m.id === movieId);
      if (movie) {
        movie.reviews.push(review);
      }
    }
  },
  actions: {
    addReview({ commit }, payload) {
      commit('addReview', payload);
    }
  },
  getters: {
    getMovieById: (state) => (id) => {
      return state.movies.find((m) => m.id === id);
    }
  }
});

export default store;

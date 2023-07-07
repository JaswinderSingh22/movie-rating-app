<template>
  <div class="movie-card bg-white rounded-lg shadow-lg p-4">
    <div class="thumbnail">
      <!-- <img :src="movie.thumbnail" :alt="movie.title" class="w-full" /> -->
    </div>
    <div class="info">
      <h2 class="title text-xl font-bold mb-2">{{ movie.title }}</h2>
      <p class="release-year text-gray-500 mb-1">{{ movie.releaseYear }}</p>
      <p class="director mb-1">Director: {{ movie.director }}</p>
      <p class="artist mb-4">Artist: {{ movie.artist }}</p>
      <div class="rating">
        <p class="average-rating">Average Rating: {{ movie.averageRating }}</p>
        <p class="total-rating-count">Total Ratings: {{ movie.totalRatingCount }}</p>
      </div>
      <div class="reviews" v-if="loggedIn">
        <h3 class="text-lg font-bold mb-2">Add a Review</h3>
        <textarea v-model="reviewText" rows="4" class="w-full border-gray-300 rounded-lg p-2 mb-2"></textarea>
        <button @click="addReview" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Review</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    movieId: {
      type: Number,
      // required: true
    }
  },
  setup(props) {
    const store = useStore();
    const reviewText = ref('');

    const movie = computed(() => store.getters.getMovieById(props.movieId));
    const loggedIn = computed(() => store.getters.isLoggedIn);

    const addReview = () => {
      store.dispatch('addReview', {
        movieId: props.movieId,
        review: reviewText.value
      });
      reviewText.value = '';
    };

    return {
      movie,
      loggedIn,
      reviewText,
      addReview
    };
  }
};
</script>

<style scoped>
.movie-card {
  display: flex;
}

.thumbnail {
  width: 150px;
  margin-right: 1rem;
}

.info {
  flex-grow: 1;
}

.title {
  font-size: 1.2rem;
}

.release-year {
  color: #718096;
}

.director,
.artist {
  margin-bottom: 0.5rem;
}

.rating {
  margin-top: 1rem;
}

.reviews {
  margin-top: 1rem;
}
</style>

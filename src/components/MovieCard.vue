<template>
  <div class="movie-card bg-white rounded-lg shadow-lg p-4">
    <div class="thumbnail">
      <!-- <img :src="movie.thumbnail" :alt="movie.title" class="w-full" /> -->
    </div>
    <div class="info">
      <h2 class="title text-xl font-bold mb-2">Title</h2>
      <p class="release-year text-gray-500 mb-1">2020</p>
      <p class="director mb-1">Director</p>
      <p class="artist mb-4">Artist</p>
      <div class="rating">
        <p class="average-rating">Average Rating:5</p>
        <p class="total-rating-count">Total Ratings: 10</p>
      </div>
      <!-- <div v-if="loggedIn">
        <h3 class="text-lg font-bold mb-2">Add a Review</h3>
        <textarea v-model="reviewText" rows="4" class="w-full border-gray-300 rounded-lg p-2 mb-2"></textarea>
        <button @click="addReview" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Review</button>
      </div> -->
      <!-- Show the login button if the user is not logged in -->
      <!-- <router-link to="/login" v-else>
      <button  @click="redirectToLogin" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login to Add a Review</button>
      </router-link> -->
    </div>
    <div class="reviews">
      <button @click="openReviewsPopup" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reviews</button>
      <transition name="fade">
        <div v-if="showReviewsPopup" class="reviews-popup">
          <div class="popup-content">
            <h3 class="text-lg font-bold mb-2">Reviews</h3>
            <ul>
              <li class="mb-2">
                Reviewssssssssss
              </li>
            </ul>
            <div v-if="true" class="add-review-section">
              <h4 class="text-md font-bold mt-4 mb-2">Add a Review</h4>
              <textarea v-model="newReviewText" rows="4" class="w-full border-gray-300 rounded-lg p-2 mb-2"></textarea>
              <button @click="addReview" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Review</button>
            </div>
            <button @click="closeReviewsPopup" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Close</button>
          </div>
        </div>
      </transition>
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
    const showReviewsPopup = ref(false);

    const movie = computed(() => store.getters.getMovieById(props.movieId));
    const loggedIn = computed(() => store.getters.isLoggedIn);

    const openReviewsPopup = () => {
          showReviewsPopup.value = true;
    };

    const closeReviewsPopup = () => {
      showReviewsPopup.value = false;
    };

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
      addReview,
      showReviewsPopup,
      openReviewsPopup,
      closeReviewsPopup,
    };
  }
};
</script>

<style scoped>
.reviews-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.popup-content {
  background-color: white;
  padding: 1rem;
  max-width: 400px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div>
  <MovieHeader/>
  <!-- {{console.log("movies:", $store.state)}} -->
  <div class="grid grid-cols-4 gap-4">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :smallCard="true"
      />
    </div>
  </div>
</template>

<script>
import MovieHeader from '../components/MovieHeader.vue'
import MovieCard from '../components/MovieCard.vue'
// import { computed } from 'vue';
// import { useStore } from 'vuex';
  export default {
    components:{
      MovieHeader,
      MovieCard
    },
    
    setup() {
      // const store = useStore();
    const movies = [1,2,3,4,5,6,7,8,9,10,11,12]
    
      return {
        movies
      };
    },
    
  }
</script>
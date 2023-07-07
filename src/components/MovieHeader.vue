<template>
  <header class="bg-gray-900 text-white px-4 py-6">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-2xl font-semibold">{{ title }}</h1>
      <div class="flex items-center">
        <input
          type="text"
          class="rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Search"
          v-model="searchTerm"
        />
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2 ml-2"
          @click="search"
        >
          Search
        </button>
        <router-link to="/login">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 ml-2"
          @click="login"
        >
          Log In
        </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      searchTerm: ''
    };
  },
  methods: {
    search() {
      // Handle search functionality
      console.log('Search term:', this.searchTerm);
    },
    login() {
      // Handle login functionality
      console.log('Login button clicked');
    }
  },
  setup() {
    const title = ref('SmartMovies!!');
    return { title };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

<template>
  <div class="login min-h-screen flex items-center justify-center bg-gray-900">
    <div class="max-w-lg w-full mx-auto p-8">
      <h1 class="text-4xl text-white font-semibold mb-6">Welcome to Smart Movies!</h1>
      <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input type="text" id="username" v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input type="password" id="password" v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" :disabled="isFormInvalid" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log In</button>
          <a href="#" class="text-gray-600 font-bold hover:text-gray-900">Forgot Password?</a>
        </div>
      </form>
      <p class="text-white text-sm text-center">Don't have an account? <a href="#" class="text-blue-400 font-bold hover:text-blue-600">Sign Up</a></p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const submitForm = () => {
      // Perform login logic here
      console.log('Submitted');
      console.log('Username:', username.value);
      console.log('Password:', password.value);

      // Simulating successful login
      if (username.value && password.value) {
        // Redirect to home page
        router.push('/');
      }

      // Reset form fields
      username.value = '';
      password.value = '';
    };

    const isFormInvalid = computed(() => !username.value || !password.value);

    return {
      username,
      password,
      submitForm,
      isFormInvalid
    };
  }
};
</script>

<style scoped>
.login {
  /*background-image: url('/path/to/background-image.jpg');*/
  background-size: cover;
}
</style>

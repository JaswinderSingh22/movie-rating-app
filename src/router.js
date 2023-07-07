import { createRouter, createWebHistory } from 'vue-router';
import MovieHome from './pages/MovieHome.vue';
import LogIn from './pages/LogIn.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MovieHome
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: LogIn,
    // props: true
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;

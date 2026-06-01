import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', component: HomePage },
    { path: '/:slug', component: HomePage },
  ],
})
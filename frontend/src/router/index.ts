import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', component: HomePage },
    { path: '/:slug', component: HomePage },
  ],
})
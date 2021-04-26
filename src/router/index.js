import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import alert from '../views/alert/alert.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/alert',
    name: 'alert',
    component: alert
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

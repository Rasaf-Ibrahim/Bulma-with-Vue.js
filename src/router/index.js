import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import alert from '../views/alert/alert.vue'
import dropdown from '../views/dropdown/dropdown.vue'
import modal from '../views/modal/modal.vue'
import typeEffect from '../views/typeEffect/typeEffect.vue'

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


  {
    path: '/modal',
    name: 'modal',
    component: modal
  },

  {
    path: '/dropdown',
    name: 'dropdown',
    component: dropdown
  },


  {
    path: '/typeEffect',
    name: 'typeEffect',
    component: typeEffect
  },




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

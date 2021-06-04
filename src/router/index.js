import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import alert from '../views/alert/alert.vue'
import dropdownHover from '../views/dropdown/dropdownHover.vue'
import dropdownClick from '../views/dropdown/dropdownClick.vue'
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
    path: '/dropdownHover',
    name: 'dropdownHover',
    component: dropdownHover
  },

  {
    path: '/dropdownClick',
    name: 'dropdownClick',
    component: dropdownClick
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

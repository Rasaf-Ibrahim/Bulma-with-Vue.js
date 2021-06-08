import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AlertPage from '../views/AlertPage.vue'
import DropdownPage from '../views/DropdownPage.vue'
import modal from '../views/modal/modal.vue'
import typeEffect from '../views/typeEffect/typeEffect.vue'
import audio from '../views/audio/audio.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/alert',
    name: 'AlertPage',
    component: AlertPage
  },


  {
    path: '/modal',
    name: 'modal',
    component: modal
  },

  {
    path: '/dropdown',
    name: 'DropdownPage',
    component: DropdownPage
  },

  
  {
    path: '/typeEffect',
    name: 'typeEffect',
    component: typeEffect
  },

  {
    path: '/audio',
    name: 'audio',
    component: audio
  },




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

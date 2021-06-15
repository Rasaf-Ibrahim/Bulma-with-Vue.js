import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AlertPage from '../views/AlertPage.vue'
import DropdownPage from '../views/DropdownPage.vue'
import ModalPage from '../views/ModalPage.vue'
import typeEffect from '../views/typeEffect/typeEffect.vue'
import audio from '../views/audio/audio.vue'
import AnimationPage from '../views/AnimationPage.vue'
import CardPage from '../views/CardPage.vue'



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
    name: 'ModalPage',
    component: ModalPage
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

  {
    path: '/animation',
    name: 'AnimationPage',
    component: AnimationPage
  },

  {
    path: '/card',
    name: 'CardPage',
    component: CardPage
  },




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

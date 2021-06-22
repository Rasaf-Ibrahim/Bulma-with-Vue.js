import { createRouter, createWebHistory} from 'vue-router'

import Home from '../pages/Home.vue'
import AlertPage from '../pages/AlertPage.vue'
import DropdownPage from '../pages/DropdownPage.vue'
import ModalPage from '../pages/ModalPage.vue'
import audio from '../pages/audio/audio.vue'
import AnimationPage from '../pages/AnimationPage.vue'
import CardPage from '../pages/CardPage.vue'
import ContactPage from '../pages/ContactPage.vue'

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

  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
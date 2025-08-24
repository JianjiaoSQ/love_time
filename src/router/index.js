import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PhotoList from '../views/PhotoList.vue'
import Background from '../views/Background.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/photos/:province', name: 'PhotoList', component: PhotoList },
  { path: '/background', name: 'Background', component: Background }  // New route for Background component
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

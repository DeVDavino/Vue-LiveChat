import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const routes = [

  // Add this route to the array:
 {
  path: '/',
  name: 'Welcome',
  component: Welcome

 }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

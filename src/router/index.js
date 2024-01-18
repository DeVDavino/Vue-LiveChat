import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '@/firebase/config'

//authentication gaurd 
const requireAuth = (to, from, next) =>{
  let user = projectAuth.currentUser
  console.log('current user in auth gaurd:', user)
  if(!user){
    next({name: 'Welcome'})
  }else{
    next()
  }
}

const routes = [

  // Add this route to the array:
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },

  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

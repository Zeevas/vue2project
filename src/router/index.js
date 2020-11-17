import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Character from '../views/Character.vue'

const Home = () => import('../views/Home.vue')
const Character = () => import('../views/Character.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: Character,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dusty from '../views/works/Dusty'
import SmartMirror from '../views/works/SmartMirror'
import ThisWebsite from '../views/works/ThisWebsite'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dusty',
    name: 'Dusty',
    component: Dusty
  },
  {
    path: '/smartMirror',
    name: 'SmartMirror',
    component: SmartMirror
  },
  {
    path: '/this',
    name: 'ThisWebsite',
    component: ThisWebsite
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

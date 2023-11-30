import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/AboutView.vue'
import thankYou from '../views/ThankYou.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/thankyou',
    name: 'thankyou',
    component: thankYou
  }
]

const router = new VueRouter({
 
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import HomePage1 from '@/views/HomePage1.vue'
import AboutPage from '@/views/AboutPage.vue'
import AboutPage1 from '@/views/AboutPage1.vue'
import PersonPage from '@/views/PersonPage.vue'
import PersonPage1 from '@/views/PersonPage1.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/person',
    name:'PersonPage',
    component: PersonPage
  },
    {
    path:'/person1',
    name:'PersonPage1',
    component: PersonPage1
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
    {
    path: '/home1',
    name: 'HomePage1',
    component: HomePage1
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/about1',
    name: 'AboutPage1',
    component: AboutPage1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
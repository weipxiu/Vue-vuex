import Vue from 'vue'
import Router from 'vue-router'


import about from '@/components/about'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})

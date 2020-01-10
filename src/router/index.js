import Vue from 'vue'
import Router from 'vue-router'


import about from '@/components/about'
import calculator from '@/components/calculator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: calculator
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})

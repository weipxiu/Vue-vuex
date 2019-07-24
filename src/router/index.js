import Vue from 'vue'
import Router from 'vue-router'


import Select from '@/components/select'
import Increment from '@/components/Increment'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Increment
    },
    {
      path: '/increment',
      name: 'Increment',
      component: Increment
    }
  ]
})

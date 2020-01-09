import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import localtModule from './page'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 100,
    sum: 90,
    title: '我是一条顶层数据',
    money: 100
  },
  mutations,
  getters,
  actions,
  modules: { // vuex模块化
    localtModule
  }
})

export default store


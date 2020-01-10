import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import localtModule from './commoms'
import localtAboutfrom from './commoms/about'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
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
    localtModule,
    localtAboutfrom
  }
})


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//全局引入ECharts
// import ECharts from 'vue-echarts'
// 饼状图
// import 'echarts/lib/chart/pie'
// Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

import '@/assets/css/select.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

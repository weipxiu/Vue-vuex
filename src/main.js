// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import actions from './shared/actions.js'

//全局引入ECharts
// import ECharts from 'vue-echarts'
// 饼状图
// import 'echarts/lib/chart/pie'
// Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

import '@/assets/css/select.css'

// 新增内容开始
import { registerMicroApps, start } from 'qiankun' //新增部分，导入qiankun中的两个方法
const apps = [
  {
    name: 'vite2_vue3', //子应用的名称
    entry: '//localhost:3000',//子应用的域名
    container: '#vueContainer',//承载子应用的容器，在上面App.vue中定义
    activeRule: '/vueChild', // 被激活的子应用的路由
    props: {
      actions,
      msg: '主应用传递变量msg',
      data1: '数据1',
    }
  }
]
registerMicroApps(apps);//注册子应用
// 启动qiankun
start({
  sandbox:true // 默认(true)情况下沙箱可以确保单实例场景子应用之间的样式隔离，但是无法确保主应用跟子应用、或者多实例场景的子应用样式隔离。当配置为 { strictStyleIsolation: true } 时表示开启严格的样式隔离模式。这种模式下 qiankun 会为每个微应用的容器包裹上一个 shadow dom 节点，从而确保微应用的样式不会对全局造成影响。
});
// 新增内容结束

/* eslint-disable no-new */
new Vue({
  el: '#app_main',
  router,
  store,
  template: '<App/>',
  components: { App }
})

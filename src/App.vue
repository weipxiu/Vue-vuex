<template>
  <div id="app_main">
    <div style="margin-bottom:50px">
      <button type="button" @click="handleActions">主应用向子应用通信</button>
    </div>
    <router-link to="/about">关于我about</router-link>
    <router-link to="/vueChild">进入vue3子应用</router-link
    ><!--新增部分-->

    <router-view></router-view>
    <div id="vueContainer"></div>
    <!--新增部分，用于承载子应用-->
  </div>
</template>

<script>
import actions from "@/shared/actions";
export default {
  name: "app_main",
  data: function () {
    return {
      testData: "初始值",
    };
  },
  mounted() {
    // 注册一个观察者函数
    // state 是变更后的状态，prevState 是变更前的状态
    // actions.onGlobalStateChange((state, prevState) => {
    //   console.log("主应用观察者，改变前的值", prevState);
    //   console.log("主应用观察者，改变后的值", state);
    // });
  },
  methods: {
    handleActions() {
      actions.setGlobalState({
        testData: `主应用改变了testData，${Math.random()}`,
      });
    },
  },
};
</script>

<style>
#app_main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

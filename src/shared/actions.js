import { initGlobalState, MicroAppStateActions } from 'qiankun'
// import _store from '@/store'
// 父应用中使用initGlobalState设置全局状态actions并导出供其他组件使用
const initialState = {
  //这可以写初始化数据
  testData: '测试'
}
// 初始化
const actions = initGlobalState(initialState)

actions.onGlobalStateChange((state, prevState) => {
  console.log("主应用state变更前：", prevState);
  console.log("主应用state变更后：", state);
  // _store.commit("setData", state) // 在store存储相关数据
})
export default actions

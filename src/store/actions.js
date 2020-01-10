export default {
  changeNumber({ commit, state, rootState, dispatch, getters }, payload) {
    setTimeout(() => {
      // 改变状态，提交mutations
      // commit("addIncrement", payload) //第一种更新addIncrement
      commit('save', { count: state.count + payload.n })
      dispatch("textAction", { test: '异步回调拿到的参数' })
    }, 1000)
  },
  textAction($store, options) {//接收上面dispatch提交过来的参数
    console.log($store, options)//相当于一个异步操作里的回调函数
  }
}

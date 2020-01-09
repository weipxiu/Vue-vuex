export default {//类似计算属性
  filterCount(state) {
    return state.count >= 120 ? 120 : state.count;
  },
  computedSum(state) {
    return state.sum >= 200 ? 200 : state.sum
  }
}

export default {//payload接受页面事件交互传过来的参数值
  save: (state, payload) => {
    console.log('payload',payload)
    Object.keys(payload).forEach(e => {
      state[e] = payload[e]
    })
  },
  addIncrement(state, payload) {
    state.count += payload.n;
  },
  sumReduce(state, payload) {
    state.count -= payload.de;
  },
  sumFn(state, payload) {
    state.sum += payload.add;
  }
}

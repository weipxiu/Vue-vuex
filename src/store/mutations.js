export default {//payload接受页面事件交互传过来的参数值
  save: (state, payload) => {
    console.log('payload', payload)
    Object.keys(payload).forEach(e => {
      if (this.hasOwnProperty(e)) {
        state[e] = payload[e]
      } else {
        console.error('Sorry，更新失败：属性' + e + '在对应的modules模块中未定义！')
      }
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

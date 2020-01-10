export default {
  namespaced: true,
  state: {
    msg: '这是关于我页面！'
  },
  mutations: {
    save: (state, payload) => {
      console.log('payload', payload)
      Object.keys(payload).forEach(e => {
        if (this.hasOwnProperty(e)) {
          state[e] = payload[e]
        } else {
          console.error('Sorry，更新失败：属性' + e + '在对应的modules模块中未定义！')
        }
      })
    }
  },
  actions: {
  }
};

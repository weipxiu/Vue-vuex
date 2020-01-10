export default {
  namespaced: true,
  state: {
    msg:'这是关于我页面！'
  },
  mutations: {
    save: (state, payload) => {
      console.log('payload',payload)
      Object.keys(payload).forEach(e => {
        if (this.hasOwnProperty(e)) {
          state[e] = payload[e]
        }else{
          console.error(e+'当前属性不存在')
        }
      })
    }
  },
  actions: {
  }
};

export default {
  namespaced: true, //定义module另外命名时，需要在module中加一个命名空间namespaced: true属性，否则命名无法暴露出来，导致报[vuex] module namespace not found in mapState()等错误。
  state: {
    title: '支付宝到账100万！',
    list: []
  },
  mutations: {
    save: (state, payload) => {
      Object.keys(payload).forEach(e => {
        state[e] = payload[e]
      })
    },
    changeTitle(state, payload) {
      state.title = payload.title
    },
    changeList(state, list) {
      state.list = list;
    }
  },
  actions: {
    getListAction({ commit }) {
      // 发送请求
      axios.get('http://easy-mock.com/mock/594f5d4b9adc231f3569be76/list/list')
        .then((data) => {
          commit("changeList", data.data);  // 拿到数据后，提交mutations，改变状态
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
};

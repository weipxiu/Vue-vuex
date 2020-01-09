import axios from 'axios'
export default {
  namespaced: true, //定义module另外命名时，需要在module中加一个命名空间namespaced: true属性，否则命名无法暴露出来，导致报[vuex] module namespace not found in mapState()等错误。
  state: {
    title: '支付宝到账100万！',
    listData: null,
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
      state.listData = list;
    }
  },
  actions: {
    getListAction({ commit, state, rootState, dispatch, getters }, payload) {
      // 发送请求
      axios.get('weipxiu/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10')
        .then((data) => {
          console.log('axios请求到数据', data.data)
          console.log('state', state)
          console.log('rootState', rootState)
          commit("changeList", data.data);  // 拿到数据后，提交mutations，改变状态
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
};

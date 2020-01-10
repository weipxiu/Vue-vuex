import axios from 'axios'
export default {
  namespaced: true, //定义module另外命名时，需要在module中加一个命名空间namespaced: true属性，否则命名无法暴露出来，导致报[vuex] module namespace not found in mapState()等错误。
  state: {
    title: '支付宝到账100万！',
    listData: null
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
          // console.log('state',state, rootState)
          commit('localtAboutfrom/save', { msg: 'about模块数据被改变了' },{ root: true })
          // 模块之间数据交互，模块化后当前commit被局域化，通过{ root: true }后将代理到全局，这样后将在全局环境下找到'localtAboutfrom/save'模块从而改变对应数据

          commit('save', { title: '顶层数据被改变！' },{ root: true }) //通过{ root: true }修改底层数据，请不要直接通过rootState进行赋值，一切数据都通过commit
          commit("changeList", data.data);  // 拿到数据后，提交mutations，改变状态
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
};

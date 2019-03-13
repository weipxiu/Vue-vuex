import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let selectModule = {
  state:{
    title:'hello123',
    list: []
  },
  mutations:{
    changeTitle(state, payload){
      state.title = payload.title
    },
    changeList(state, list){
      state.list = list;
    }
  },
  actions:{
    getListAction({commit}){
      // 发送请求
      axios.get('http://easy-mock.com/mock/594f5d4b9adc231f3569be76/list/list')
        .then((data)=>{
          commit("changeList", data.data);  // 拿到数据后，提交mutations，改变状态
        })
        .catch((error)=>{
          conso.log(error)
        })
    }
  }
};

// this.$store.state.title
// this.$store.state.selectModule.title

// 定义一个容器

let store = new Vuex.Store({
    state: { //初始化状态
      count: 100,
      sum:99,
      isShow:true
    },
    getters: {//类似计算属性
      filterCount(state){
        return state.count >= 120 ? 120 : state.count;
      },
      sumGet(state){
        return state.sum >= 200 ? 200 : state.sum
      }
    },
    mutations: {//payload接受页面事件交互传过来的参数值
      addIncrement(state, payload){
         state.count += payload.n;
       },
      deIncrement(state, payload){
        state.count -= payload.de;
      },
      sumFn(state, payload){
        state.sum += payload.add;
      }
    },
   actions: {
      addAction({commit,dispatch}){
        setTimeout(()=>{
            // 改变状态，提交mutations
            commit("addIncrement", {n:5})
            dispatch("textAction", {test: '111'})
        },1000)
      },
      textAction(context, options){//接收上面dispatch提交过来的参数
        console.log(this.state.isShow)//相当于一个异步操作里的回调函数
      }
  }
  ,
    modules:{ //modules：多个store模块集合
      selectModule
    }
})

export default store


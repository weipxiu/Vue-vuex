<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="deIncrement({de:5})" />
      <span>{{count}}</span>
      <input type="button" value="+" @click="yibu({n:1})" />
      <p>{{num2}}</p>
      <span>点击</span>
      <button @click="sumFn({add:20})">{{sum}}</button>
      <p>我被限制了大小不超过200-----------{{sum1}}</p>
      <p>{{$store.state.count}}</p>
      <!-- 另一种获取vuex数据的方式 -->
    </div>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
      computed: {
        ...mapGetters({
          num2: 'filterCount',//取到计算属性里的值
          sum1: 'sumGet'
        }),
        ...mapState(['count','sum'])
      },
      mounted(){
          console.log(this.$store.state.selectModule.title)
      },
      methods: {
        //方式一
        // ...mapActions({//异步action
        //   addHandle: 'addAction'
        // }),
        // ...mapMutations({ //同步
        //   deHandle:'deIncrement',
        //   sumFn:'sumFn'
        // })

        //方式二
        ...mapActions(['addAction']),
        ...mapMutations(['deIncrement','sumFn']),
        yibu(option){
          this.addAction(option)
        }
      }
    }
</script>
<style>

</style>

<template>
  <div>
    <h2>简易加减法计算器</h2>
    <div>
      <input type="button" value="-" @click="sumReduce({ de: 50 })" />
      <span
        ><span>{{ count }}</span></span
      >
      <input type="button" value="+" @click="sumAdd({ n: 10 })" />

      <p>
        无论上面加到多少，我最大只有120 ：<span>{{ filterCount }}</span>
      </p>
      <font>点击</font>
      <!-- 行间通过mapMutations拿到sumFn函数直接修改vuex数据，当然，这只能是同步的 -->
      <button @click="sumFn({ add: 20 })">
        <span>{{ sum }}</span>
      </button>
      <p>
        我被限制了大小不超过200 ： <span>{{ computedSum }}</span>
      </p>
      <!-- <p>{{$store.state.count}}</p> -->
      <!-- 另一种获取vuex数据的方式 -->

      <p>
        获取顶层中中数据:<span>{{ $store.state.title }}</span>
      </p>

      <br />
      <h3>封装方法修改vuex中state</h3>
      <p>
        获取指定module模块中数据title: <span>{{ title }}</span>
        <button @click="locaChangeMoney">点击修改</button>
      </p>
      <p>
        获取顶层数据money:支付宝到账<span>
          <button @click="addMoney(5)">{{ money }}</button> 万</span
        >
      </p>

      <br />
      <p>{{ $store.state.localtAboutfrom.msg }}</p>

      <br />
      <h2>vuex - axios请求</h2>
      <button @click="getListAction">点击获取</button>
      <ul v-if="listData" class="list_movie">
        <li>
          <span>时间</span>
          <span>电影名称</span>
          <span>年份</span>
        </li>
        <li v-for="item in listData.subjects" :key="item.id">
          <span>{{ item.mainland_pubdate }}</span>
          <span>{{ item.title }}</span>
          <span>{{ item.year }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["count", "sum", "money"]),
    ...mapState("localtModule", ["title", "listData"]),
    ...mapGetters(["filterCount", "computedSum"]),
  },
  mounted() {
    console.log(this.$store.state.title); // 顶层
    console.log(this.$store.getters.filterCount); // 获取顶层getters属性值
    console.log(this.$store.state.localtModule.title); // 模块中
  },
  methods: {
    // 方式一
    ...mapMutations(["sumReduce", "sumFn", "save"]),
    ...mapMutations("localtModule", ["save"]),
    ...mapActions(["changeNumber"]), // 同等于将 `this.changeNumber()` 映射为 `this.$store.dispatch('changeNumber')`
    ...mapActions("localtModule", ["getListAction"]),

    sumAdd(option) {
      // this.$store.dispatch('changeNumber', option) // 因为有上面映射，所以可以简写成this.changeNumber(option)
      this.changeNumber(option);

      // 在某些情况，我们需要对 Action 中的函数名重命名以避免和组件内部的变量冲突，这时候我们可以使用对象的方式接收参数：
      // 例：将 `this.add()` 映射为 `this.$store.dispatch('increment')`
      // ...mapActions({
      //   newChangeNumber: 'changeNumber'
      // })
    },
    // 修改局部title
    locaChangeMoney() {
      this.$store.commit("localtModule/save", { title: "有钱了有钱了！" });
    },
    // 修改顶层的金钱
    addMoney(parm) {
      this.$store.commit("save", { money: this.money + parm });
    },

    // 方式二
    // ...mapMutations({ //同步
    //   deHandle:'sumReduce',
    //   sumFn:'sumFn'
    // })
    // ...mapActions({//异步action
    //   addHandle: 'localtModule/save' localtModule/代表模块，不写？为顶层属性
    // }),
  },
};
</script>
<style scoped>
span {
  color: #ed145b;
}
.list_movie {
  margin-top: 15px;
}
ul.list_movie > li {
  margin: 5px;
}
ul.list_movie > li > span {
  width: 100px;
  display: inline-block;
  color: #333;
  vertical-align: text-top;
}
</style>

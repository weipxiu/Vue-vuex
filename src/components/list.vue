<template>
    <ul class="list">
      <li v-for="(item,index) in data" @click="getTitleHandle(item.title)" :key="index">{{item.title}}</li>
    </ul>
</template>

<script>
export default {
  computed:{
      data(){
          return this.$store.state.selectModule.list;
      }
  },
  methods:{
    getTitleHandle(title){
      // 触发同步操作的方法
      this.$store.commit("changeTitle", {title})
    }
  },
  created(){
      //触发异步操作的方法
    this.$store.dispatch('getListAction')
  }
}
</script>

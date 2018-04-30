<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        @click="showListHandle"
        :value="title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
    props:['isShow'],
  computed:{
    initShow(){
        return this.isShow
    },
    title(){
        return this.$store.state.selectModule.title
    }
  },
  methods: {
    showListHandle(){
        this.$emit("update:isShow", !this.initShow)
    }
  }
}
</script>

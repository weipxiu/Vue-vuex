<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="deHandle({de:5})" />
      <span>{{count}}</span>
      <input type="button" value="+" @click="addHandle" />
      <p>{{num2}}</p>
    </div>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
      computed: {
        ...mapGetters({
          num2: 'filterCount'
        }),
        ...mapState(['count'])
      }
      ,
      methods: {
        ...mapActions({
          addHandle: 'addAction'
        }),
        ...mapMutations({
          deHandle:'deIncrement'
        })
      }

    }
</script>
<style>

</style>

<template>
  <section class="warp">
    <div class="searchIpt clearFix">
      <select-input :is-show.sync="listShow"></select-input>
      <list v-show="listShow"></list>
    </div>
  </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'


export default {
  data() {
    return {
      listShow: false
    }
  },
  methods: {
  },
  created: function () {
   console.log(111)
  },
  components: {
    selectInput,
    list
  }
}
</script>

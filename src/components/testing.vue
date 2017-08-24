<template>
  <div class="testing">
    <h1>测试</h1>
    <h2 class="row" id="row1"> 第01行 </h2>
    <h2 class="row" id="row2"> 第02行 </h2>
    <h2 class="row" id="row3"> 第03行 </h2>
    <h2 class="row" id="row4"> 第04行 </h2>
    <h2 class="row" id="row5"> 第05行 </h2>
    <article>
      {{data()}}
    </article>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    data(){
      console.log(this.$root)
      return
    }
  }
}
</script>
<style lang="scss" scoped>
  .row:target{
    background-color: rgba(243, 134, 48, .8);
  }
</style>


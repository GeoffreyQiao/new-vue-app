<template>
  <div id="main-body">
    <div class="part-of-page tools-bar">
      <div class="brand">
        <img src="~@/assets/logo.png"/>
      </div>
      <nav-bar class="nav-bar"></nav-bar>
    </div>
    <router-view class="part-of-page views main-view"></router-view>
  </div>
</template>

<script>
  // @ts-ignore
  import NavBar from '@/components/navBar'

  /** @see module:canvasBackground */
  // @ts-ignore
  import CanvasBackground from '@/assets/canvasBackground'
  export default {
    name: 'main_layout',
    data() {
      return {
        backgroundOption: {
          zIndex: '-1',
          opacity: '0.8',
          color: '#135579',
          count: 200
        }
      }
    },
    components: {
      NavBar
    },
    mounted(){
      CanvasBackground(this.backgroundOption)
    }
  }
</script>

<style lang="scss" scoped>
  #main-body {
      height: 100%;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      padding: 1vmax;
  }

  .part-of-page {
    height: 100%;
    &.tools-bar {
      padding-left: 1vmax;
      width: 20%;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      &>.brand {
        height: 30%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        &>img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      &>.nav-bar {
        display: block;
        height: 70%;
        width: 100%;
        padding-left: 1vmax;
      }
    }
    &.main-view{
      width: 80%;
      padding: 1vmin;
    }
  }
</style>
<style lang="scss">
  .view {
    display: block;
    width: 100%;
  }
</style>

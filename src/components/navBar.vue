<template>
  <div class="menu">
    <h2 @click="clickIt" v-text="Title"></h2>
    <transition name="navlist">
      <ul class="nav-list" v-if="isClicked">
        <li class="link-btn" v-for="(item, key) of Links.Navs" :key="key">
            <router-link class="view-link" :to="item.to" v-text="item.text"></router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'navbar',
  data () {
    return {
      isClicked: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    clickIt() {
      return this.isClicked = !this.isClicked
    }
  },
  computed: {
    ...mapState([
      'Links',
      'Title'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h2 {
  font-weight: normal;
  &:focus,
  &:hover
 {
    cursor: pointer;
  }
}

.nav-list {
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0 0 1vmin;
  &>li {
    display: inline-block;
  }
}
a {
  color: #42b983;
}

.link-btn{
  margin-top: .5vmin;
}
.view-link{
    transition: .4s linear
}
.router-link-exact-active{
  color:rgb(140, 216, 224),
}

.navlist-enter-active, .navlist-leave-active {
  transition: all 1.5s
}
.navlist-enter, .navlist-leave-to {
  transform: translateY(-30px);
  opacity: 0
}
</style>

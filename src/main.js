// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import store from './stores'
import router from './router'
// @ts-ignore
import Layout from './components/mainLayout'

// @ts-ignore
import './styles/main.css'

// @ts-ignore
Vue.config.productionTip = false

/** Vue 实例 */
new Vue({
  router,
  store,
  el: '#app',
  components: { Layout }
})

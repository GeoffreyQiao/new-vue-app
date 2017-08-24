import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Title: '菜单',
    Links: {
      Navs: [
        {
          text: '首页',
          to: '/'
        },
        {
          text: '测试',
          to: 'test'
        }
      ]
    }
  }
})


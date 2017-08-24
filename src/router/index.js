import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Testing from '@/components/testing'

Vue.use(Router)

const routes = [
  {
    path: '',
    component: { name: 'default-view', template: '<div><h1>默认页</h1></div>' }
  },
{ path: '/test', component: Testing, name: 'testing' }
]

export default new Router({
  mode: 'history',
  routes
})

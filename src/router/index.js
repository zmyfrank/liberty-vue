import Vue from 'vue'
import Router from 'vue-router'
import searchConditiono from '@/components/searchcondition/searchcondition.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: searchConditiono
    }
  ]
})

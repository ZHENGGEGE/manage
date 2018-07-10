import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/',
      component: resolve => require(['../src/layouts/home/home.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/readme',
          component: resolve => require(['../src/routes/readme/readme.vue'], resolve),
          meta: { title: '系统简介' }
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../src/routes/login/index.vue'], resolve)
    }
  ]
})

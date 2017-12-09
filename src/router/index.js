import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home/home'
import Detail from '@/views/detail/detail'

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   name: '路由规则名称，必须写',
    //   path: '路由规则的表现形式',
    //   component: '具体的一个 vue 组件'
    // },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})

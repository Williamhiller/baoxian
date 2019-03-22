import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/home'
import Sign from '@/page/sign/sign'
import Topic from '@/page/topic/topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { // 首页
      path: '/home',
      name: 'home',
      component: Home
    },
    { // 签约专栏
      path: '/sign',
      name: 'sign',
      component: Sign
    },
    { // 专题
      path: '/topic',
      name: 'topic',
      component: Topic
    }
  ]
})

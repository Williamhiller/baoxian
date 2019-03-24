import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Sign from '@/page/sign/sign'
import Topic from '@/page/topic/topic'
import Handpick from '@/page/handpick/handpick'
import Word from '@/page/word/word'

Vue.use(Router)

export default new Router({
  routes: [
    { // 首页
      path: '/',
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
    },
    { // 精选专题
      path: '/handpick',
      name: 'handpick',
      component: Handpick
    },
    { // 精选专题
      path: '/word',
      name: 'word',
      component: Word
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Sign from '@/page/sign/sign'
import Topic from '@/page/topic/topic'
import Handpick from '@/page/handpick/handpick'
import Word from '@/page/word/word'
import WordDetail from '@/page/word/WordDetail'
import Article from '@/page/article/article'
import Blank from '@/page/blank/blank'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { // 空地址跳转至home
      path: '',
      redirect: '/home'
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
    { // 精选专题
      path: '/topic',
      name: 'topic',
      component: Topic
    },
    { // 精选专题
      path: '/handpick',
      name: 'handpick',
      component: Handpick
    },
    { // 词条
      path: '/word',
      name: 'word',
      component: Word
    },
    { // 名词详情解释
      path: '/wordDetail',
      name: 'wordDetail',
      component: WordDetail
    },
    { // 未搜索到东西
      path: '/blank',
      name: 'blank',
      component: Blank
    },
    { // 文章详情
      path: '/article',
      name: 'article',
      component: Article
    }
  ]
})

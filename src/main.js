// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugin/rem'
import 'swiper/dist/css/swiper.min.css'

// 引入mockjs
require('./mock.js')
Vue.config.productionTip = false

// 跳转后返回顶部
// router.afterEach((to,from,next) => {
//   document.body.scrollTop = 0
//   document.documentElement.scrollTop = 0
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

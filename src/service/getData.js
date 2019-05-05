import axios from 'axios'
// import vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

// 封装axios的post请求
export function fetch (url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  getHotWords (type) {
    return fetch('/indexBannerList?postion=' + type)
  },
  getBanners () {
    return fetch('/indexBannerList')
  },
  getAuthorArticle () {
    return fetch('/indexAuthorArticle')
  },
  getSpecialArticle () {
    return fetch('/indexSpecialArticle')
  },
  getOtherArticle () { // 首页发现/问答读取
    return fetch('/indexOtherArticle')
  },
  getAuthorList () { // 签约专栏作者读取
    return fetch('/authorList')
  },
  getAuthorInfo () { // 签约专栏作者信息读取
    return fetch('/author')
  },
  getAuthorArticleList () { // 签约专栏作者文章读取
    return fetch('/authorArticleList')
  },
  getArticleContent () { // 文章内容
    return fetch('/articleContent')
  },
  getSpecial () { // 专题信息
    return fetch('/special')
  },
  getSpecialArticleList () { // 专题模板文章列表
    return fetch('/specialArticleList')
  },
  getSearch () { // 搜索
    return fetch('/search')
  },
  getWord () { // 名词解释
    return fetch('/word')
  },
  getToArticleRela () { // 名词关联文章
    return fetch('/toArticleRela')
  },
  getArticleKeyWordsRela () { // 文章关联关键词
    return fetch('/articleKeyWordsRela')
  },
  getArticleLightWordsRela () { // 文章关联高亮词
    return fetch('/articleLightWordsRela')
  },
  getArticleToArticleRela () { // 文章关联文章
    return fetch('/articleToArticleRela')
  },
  getArticleToAd () { // 文章关联文章
    return fetch('/articleToAd')
  }
}

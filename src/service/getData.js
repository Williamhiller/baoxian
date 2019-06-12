import axios from 'axios'
// import vue from 'vue'

// axios.defaults.headers.post['Content-Type'] = 'text/html;charset=utf-8'
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
export function fetch (url,param) {
  return new Promise((resolve, reject) => {
    let params = {
      data: param || {},
      sessionToken: "",
      token: "0kfHCMpOTzH1mZEXcAoV2uQAMGlWeo"
    }
    axios.post(`http://test.baoxiantips.cn/midware/content`+url,JSON.stringify(params))
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
    return fetch('/indexHotwords.do',{position:type})
  },
  getBanners () {
    return fetch('/indexBannerList.do')
  },
  getAuthorArticle () {
    return fetch('/indexAuthorArticle.do')
  },
  getSpecialArticle () {
    return fetch('/indexSpecialArticle.do')
  },
  getOtherArticle (params) {
    return fetch('/indexOtherArticle.do',params)
  },
  getAuthorList () { // 签约专栏作者读取
    return fetch('/authorList.do')
  },
  getAuthorInfo () { // 签约专栏作者信息读取
    return fetch('/author.do')
  },
  getAuthorArticleList (params) { // 签约专栏作者文章读取
    return fetch('/authorArticleList.do',params)
  },
  getArticleContent () { // 文章内容
    return fetch('/articleContent.do')
  },
  getSpecial (specialId) { // 专题信息
    return fetch('/special.do',{specialId: specialId})
  },
  getSpecialArticleList (param) { // 专题模板文章列表
    return fetch('/specialArticleList.do',param)
  },
  getSearch (word) { // 搜索
    return fetch(`/search.do`,{wordName:word})
  },
  getWord (wordParam) { // 名词解释
    return fetch('/word.do',wordParam)
  },
  getToArticleRela (wordId) { // 名词关联文章
    return fetch(`/toArticleRela.do`,{wordId:wordId})
  },
  getArticleKeyWordsRela (articleId) { // 文章关联关键词
    return fetch('/articleKeyWordsRela.do')
  },
  getArticleLightWordsRela (articleId) { // 文章关联高亮词
    return fetch('/articleLightWordsRela.do')
  },
  getArticleToArticleRela (articleId) { // 文章关联文章
    return fetch('/articleToArticleRela.do',{articleId:articleId})
  },
  getArticleToAd (articleId) { // 文章关联文章
    return fetch('/articleToAd.do',{articleId:articleId})
  }
}

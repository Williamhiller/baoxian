// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
// const Random = Mock.Random
// // mock一组数据
// const produceNewsData = function () {
//   let articles = []
//   for (let i = 0; i < 100; i++) {
//     let newArticleObject = {
//       title: Random.csentence(5, 30), //  Random.csentence( min, max )
//       thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//       author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//       date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//     }
//     articles.push(newArticleObject)
//   }
//
//   return {
//     articles: articles
//   }
// }

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/indexBannerList?postion=0', 'get', [
  {
    wordName : "旅意险",
    homePageIndex : 0
  }
])
// 热词
Mock.mock('/indexBannerList?postion=1', 'get', [
  {
    wordName : "儿童保险",
    homePageIndex : 0
  },
  {
    wordName : "理赔",
    homePageIndex : 3
  },
  {
    wordName : "旅意险",
    homePageIndex : 2
  },
  {
    wordName : "单身养老",
    homePageIndex : 1
  }
])
// banner
Mock.mock('/indexBannerList', 'get', [
  {
    articleId : "01",
    imgUrl : "./static/img/slide.129d718.png",
    link : "",
    homePageIndex : 0
  },
  {
    articleId : "02",
    imgUrl : "./static/img/slide.129d718.png",
    link : "",
    homePageIndex : 1
  },
  {
    articleId : "03",
    imgUrl : "./static/img/slide.129d718.png",
    link : "",
    homePageIndex : 2
  }
])

// 首页签约专栏信息读取
Mock.mock('/indexAuthorArticle', 'get', {
  sectionTitle : "签约专栏",
  sectionSubTitle : "资深规划师案例详解",
  articles : [
    {
      articleId : "03",
      imgUrl : "./static/img/inner.6817074.png",
      title : "因为甲状腺结节被拒保还有反转的可能吗？",
      link : "",
      authorId : "01",
      miniPhotoUrl : "./static/img/avatar.f410bb3.png",
      homePageIndex : 0
    },
    {
      articleId : "03",
      imgUrl : "./static/img/inner.6817074.png",
      title : "因为甲状腺结节被拒保还有反转的可能吗？",
      link : "",
      authorId : "01",
      miniPhotoUrl : "./static/img/avatar.f410bb3.png",
      homePageIndex : 1
    },
    {
      articleId : "03",
      imgUrl : "./static/img/inner.6817074.png",
      title : "因为甲状腺结节被拒保还有反转的可能吗？",
      link : "",
      authorId : "01",
      miniPhotoUrl : "./static/img/avatar.f410bb3.png",
      homePageIndex : 1
    }
  ]
})

// 首页专题栏目读取
Mock.mock('/indexSpecialArticle', 'get', {
  sectionTitle : "精选专题",
  sectionSubTitle : "资深规划师案例详解",
  specials : [
    {
      specialId : "01",
      imgUrl : "./static/img/inner.6817074.png",
      specialTitle : "投保第一课",
      subTitle : "小白扫盲必读",
      homePageIndex : 0
    },
    {
      specialId : "02",
      imgUrl : "./static/img/inner.6817074.png",
      specialTitle : "理赔大数据",
      subTitle : "小白扫盲必读",
      homePageIndex : 1
    },
    {
      specialId : "03",
      imgUrl : "./static/img/inner.6817074.png",
      specialTitle : "绕过这些坑",
      subTitle : "小白扫盲必读",
      homePageIndex : 2
    },
  ]
})
// 首页发现/问答读取
Mock.mock('/indexOtherArticle', 'get', {
  total : 12,
  articles : [
    {
      articleId : "01",
      title : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
      imgUrl : "./static/img/inner.6817074.png",
      link : "",
      releaseTime : "",
      homePageIndex : 0
    },
    {
      articleId : "01",
      title : "生育保险能报啥？",
      imgUrl : "./static/img/inner.6817074.png",
      link : "",
      releaseTime : "",
      homePageIndex : 1
    }
  ]
})
// 签约专栏作者读取
Mock.mock('/authorList', 'get',[
    {
      authorId : "01",
      authorName : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
      photoUrl : "./static/img/inner.6817074.png", //照片路径
      miniPhotoUrl : "", // 小照路径
      introduction : "", // 详细介绍
      individualResume : 0 // 简介
    }
])

// 签约专栏作者信息读取  传入authorId
Mock.mock('/author', 'get',{
  authorId : "01",
  authorName : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
  photoUrl : "./static/img/inner.6817074.png", //照片路径
  miniPhotoUrl : "", // 小照路径
  introduction : "", // 详细介绍
  individualResume : 0 // 简介
})
// 签约专栏作者文章读取
Mock.mock('/authorArticleList', 'get',{
  total : 12,
  articles : [
    {
      articleId : "01",
      title : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
      imgUrl : "./static/img/inner.6817074.png",
      link : "",
      releaseTime : "",
      summary : 0
    }
  ]
})
// 文章内容 传入articleId
Mock.mock('/articleContent', 'get',{
  title : "ss",
  imgUrl : "./static/img/inner.6817074.png", // 配图
  content : "ss",
  link : "ss",
  releaseTime : "ss", //发布时间
  summary : "ss", //摘要
  templetId : "ss", //签名栏模板id
  templetName : "ss", //签名栏模板标识
  templetContent : "ss", //签名栏模板标识
  authorId : "ss", //
  authorName : "ss", //
  photoUrl : "ss", //
  miniPhotoUrl : "ss", //
  introduction : "ss", //
  individualResume : "ss" // 简介
})
// 专题信息 传入 specialId
Mock.mock('/special', 'get', {
  specialTitle : "精选专题",
  subTitle : "资深规划师案例详解",
  imgUrl : "资深规划师案例详解",
  summary : "资深规划师案例详解",
  templets : [
    {
      specialTempletId : "01",
      specialTemplet : "./static/img/inner.6817074.png",
      templetIndex : "投保第一课",
      templeTtitle : "小白扫盲必读",
      summary : 0
    }
  ]
})
// 专题模板文章列表 传入 specialTempletId
Mock.mock('/specialArticleList', 'get', {
  total : 12,
  articles : [
    {
      templetId : "01",
      title : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
      imgUrl : "./static/img/inner.6817074.png",
      link : "",
      releaseTime : "",
      summary : 0
    }
  ]
})
// 搜索 传入
Mock.mock('/search', 'get', [
  {
    dataType : "01",
    title : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
    relaId : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
    imgUrl : "./static/img/inner.6817074.png",
    context : ""
  }
])

// 名词解释 wordId
Mock.mock('/word', 'get', {
  wordName : "01",
  detail : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
  imgUrl : "./static/img/inner.6817074.png",
  parentWordId : "",
  childWords :  [
    {
      childWordId : "q",
      childWordName : "q"
    }
  ]
})
// 名词关联文章 wordId
Mock.mock('/toArticleRela', 'get', [
  {
    toArticleTitle : "01",
    toArticleLink : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
    toArticleId : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
    toArticleIndex : "./static/img/inner.6817074.png"
  }
])
// 文章关联关键词 articleId
Mock.mock('/articleKeyWordsRela', 'get', [
  {
    wordId : "01",
    wordName : "生育保险能报啥？孕妈们关心的热点问题大盘点。"
  }
])
// 文章关联高亮词 articleId
Mock.mock('/articleLightWordsRela', 'get', [
  {
    wordId : "01",
    wordName : "生育保险能报啥？孕妈们关心的热点问题大盘点。"
  }
])
// 文章关联文章 wordId
Mock.mock('/articleToArticleRela', 'get', [
  {
    toArticleTitle : "01",
    toArticleLink : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
    toArticleId : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
    toArticleIndex : "./static/img/inner.6817074.png"
  }
])
// articleToAd 文章广告
Mock.mock('/articleToAd', 'get', {
  adUrl : "01",
  adLink : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
  adTitle : "生育保险能报啥？孕妈们关心的热点问题大盘点。"
})

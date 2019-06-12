// 引入mockjs
const Mock = require('mockjs')

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/indexHotwords', 'get', {
  "data" : {
    "hotWords" : [
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
    ]
  }
})
// 热词
Mock.mock('/indexHotwords?postion=1', 'get', {
  "data" : {
    "hotWords" : [
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
    ]
  }
})
// banner
Mock.mock('/indexBannerList', 'get', {
  "success": true,
  "message": "成功",
  "data": {
    "banners": [
      {
        "articleId": 1,
        "imgUrl": "./static/img/inner.6817074.png",
        "link": "http://www.baidu.com",
        "homePageIndex": 1
      },
      {
        "articleId": 2,
        "imgUrl": "./static/img/inner.6817074.png",
        "link": "https://club.kdslife.com",
        "homePageIndex": 2
      }
    ]
  }
})

// 首页签约专栏信息读取
Mock.mock('/indexAuthorArticle', 'get', {
"success": true,
"message": "成功",
"data": {
"sectionSubTitle": "资深规划师案例详解",
"sectionTitle": "签约专栏",
"articles": [
{
"articleId": 1,
"imgUrl": "http://www.ihxlife.com/specialHtml/images/cctdb/cct_main.png",
"title": "因为甲状腺结节被拒保还有反转的可能吗？专栏一",
"link": null,
"authorId": 1,
"miniPhotoUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557208432272&di=5e8a72ddd6810671c290a30f0ea0e616&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FQBX2GBCqCLMk5F2CJc4rhIRthAdn06TicuNuPW0xZ1LFZe5pKCvQUY4Vg75RSJYLMFrT2Uib6ao8J3ICNj5f1RSA%2F640%3Fwx_fmt%3Dpng",
"homePageIndex": 1
},
{
"articleId": 2,
"imgUrl": "https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1862685166.jpg",
"title": "因为甲状腺结节被拒保还有反转的可能吗？专栏二",
"link": "http://www.baidu.com",
"authorId": null,
"miniPhotoUrl": null,
"homePageIndex": 2
}
]
}
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
    authorName : "大保姐",
    photoUrl : "./static/img/person.635686b.png", //照片路径
    miniPhotoUrl : "", // 小照路径
    introduction : "保险从业xx年，擅长xx，还有xx，xxxxxxxx，xxxxxxxxxxx，xxxxxxxxxxxxxxxxxxxxxxx。", // 详细介绍
    individualResume : 0 // 简介
  },
  {
    authorId : "02",
    authorName : "Andy Tao",
    photoUrl : "./static/img/person.635686b.png", //照片路径
    miniPhotoUrl : "", // 小照路径
    introduction : "保险从业xx年，擅长xx，还有xx，xxxxxxxx，xxxxxxxxxxx，xxxxxxxxxxxxxxxxxxxxxxx。", // 详细介绍
    individualResume : 0 // 简介
  },{
    authorId : "01",
    authorName : "小K爸爸",
    photoUrl : "./static/img/person.635686b.png", //照片路径
    miniPhotoUrl : "", // 小照路径
    introduction : "保险从业xx年，擅长xx，还有xx，xxxxxxxx，xxxxxxxxxxx，xxxxxxxxxxxxxxxxxxxxxxx。", // 详细介绍
    individualResume : 0 // 简介
  },{
    authorId : "01",
    authorName : "大保哥",
    photoUrl : "./static/img/person.635686b.png", //照片路径
    miniPhotoUrl : "", // 小照路径
    introduction : "保险从业xx年，擅长xx，还有xx，xxxxxxxx，xxxxxxxxxxx，xxxxxxxxxxxxxxxxxxxxxxx。", // 详细介绍
    individualResume : 0 // 简介
  },{
    authorId : "01",
    authorName : "大保哥2",
    photoUrl : "./static/img/person.635686b.png", //照片路径
    miniPhotoUrl : "", // 小照路径
    introduction : "保险从业xx年，擅长xx，还有xx，xxxxxxxx，xxxxxxxxxxx，xxxxxxxxxxxxxxxxxxxxxxx。", // 详细介绍
    individualResume : 0 // 简介
  },{
    authorId : "01",
    authorName : "大保哥3",
    photoUrl : "./static/img/inner.6817074.png", //照片路径
    miniPhotoUrl : "", // 小照路径
    introduction : "保险从业xx年，擅长xx，还有xx，xxxxxxxx，xxxxxxxxxxx，xxxxxxxxxxxxxxxxxxxxxxx。", // 详细介绍
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
      title : "标题dddd",
      imgUrl : "./static/img/inner.6817074.png",
      link : "",
      releaseTime : "",
      summary : '我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要'
    },
    {
      articleId : "01",
      title : "标题2",
      imgUrl : "./static/img/inner.6817074.png",
      link : "",
      releaseTime : "",
      summary : '我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要'
    },{
      articleId : "01",
      title : "标题3",
      imgUrl : "./static/img/inner.6817074.png",
      link : "",
      releaseTime : "",
      summary : '我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要'
    },{
      articleId : "01",
      title : "标题4",
      imgUrl : "./static/img/inner.6817074.png",
      link : "",
      releaseTime : "",
      summary : '我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要'
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
  wordName : "旅意险",
  detail : "旅行意外险，即是旅行保险，是在本国或者国际旅行中能够提供一种为支付医疗费用和财务和其他损失的保险业务。",
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
    toArticleLink : "21",
    toArticleId : "生育保险能报啥？孕妈们关心的热点问题大盘点。",
    imgUrl : "./static/img/inner.6817074.png"
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

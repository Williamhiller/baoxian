# baoxianbao

> baoxian project

## Build Setup 构建步骤

``` bash
# install dependencies 安装依赖，先安装node.js，自带npm，进入根目录后执行
npm install

# 安装好依赖后，开发时执行执行
npm run dev

#浏览器访问 http://localhost:8080/#/home 

# 正式环境执行，执行后会在dist目录生成打包后的目录，正式环境访问这个目录
npm run build
(如果本地直接打开index.html访问会有些问题，静态文件图片文件会错误，原因是采用的相对路径)

# build for production and view the bundle analyzer report
npm run build --report

# 其它问题 
1. handpick.vue页面接口缺失
2. sign.vue 页面签约作者，订阅/未订阅接口字段缺失？是否还保留该功能
3. article.vue页面，关联文章 articleToArticleRela.do 仅显示title,缺失作者信息以及文章缩略图


# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

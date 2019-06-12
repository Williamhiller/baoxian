<template>
  <div class="page-cont">

    <div>{{articleDetail.title}}</div>
    <template >
      <div ref="articleContent"></div>
    </template>

    <!-- 专栏 -->
    <div class="sign_box card_box" v-if="articleDetail.authorId">
      <div class="item item-avatar avatar-left vertical">
        <div class="avatar round"><img :src="articleDetail.photoUrl" alt=""></div>
        <div class="item-body">
          <h2>{{articleDetail.authorName}}<img class="thum" :src="articleDetail.miniPhotoUrl" alt=""></h2>
          <p>{{articleDetail.introduction}}</p>
        </div>
        <div class="right">
          <router-link tag="span" :to="{path:'/topic',query:{authorId:articleDetail.authorId}}" class="">查看专栏</router-link>
        </div>
      </div>
    </div>

    <div class="ad" v-if="adDetail != null">
      <img :src="adDetail.adUrl" alt="">
    </div>

    <div v-if="relaArticles != null">
      <ul class="cont">
        <li>
          <div class="box" v-for="item in relaArticles">
            <div class="body">
              <p>{{item.toArticleTitle}}</p>
              
              <!--<h2>-->
                <!--<img src="../../assets/image/inner.png" alt="">-->
                <!--<span class="name">打包价</span>-->
                <!--<span class="time">2018-09-12</span>-->
              <!--</h2>-->
            </div>
            <img class="img-big" src="../../assets/image/inner.png">
          </div>
        </li>
      </ul>
    </div>

    <div v-show="showModal">
      <div class="v-modal" style="z-index: 2000;" @click="close()"></div>
      <div class="mint-msgbox-wrapper" style="position: absolute; z-index: 2023;">
        <div class="mint-msgbox word_modal" v-bind:class="{'msgbox-bounce-enter' : showEnter}">
          <h2 class="title">
            <span>{{wordModal.wordName}} </span>
            <router-link tag="span" class="detail" :to="{path:'/wordDetail',query:{wordId:wordModal.wordId}}">
              名次解释详情 <i class="mint-cell-allow-right"></i></router-link>
          </h2>
          <div class="body">
            <p>{{wordModal.detail}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import getData from '../../service/getData'
  import Vue from 'vue'

  export default {
    name: "article",
    data () {
      return {
        wordModal : {
          wordName : "",
          detail : '',
        },
        showModal : false,
        showEnter : true,
        articleDetail : "",
        relaArticles : null,
        adDetail : null
      }
    },
    components:{
    },
    mounted () {
      let articleId = this.$route.query.articleId

      // 获取文章详情
      getData.getArticleContent(articleId).then((res) => {
        this.articleDetail = res.data;
        // 关联文章
        getData.getArticleToArticleRela(articleId).then((relaArticles)=> {
          this.relaArticles = relaArticles.data.articles;
        })

        // 获取页面广告
        getData.getArticleToAd(articleId).then((ad)=>{
          this.adDetail = ad.data
        })

        // 获取高亮词，
        getData.getArticleLightWordsRela(articleId).then((list) => {
          let wrods = list.data.lightWords
          let content = this.articleDetail.content

          // 循环替换高亮词，高亮显示，点击弹出详情
          wrods.forEach((item) => {
            let replaceTo = `<span class="lightWords"  @click="show(${item.wordId})">${item.wordName}</span>`
            content.replace(item.wordName,replaceTo)
          })
        })
      })
      // let content = `<span  @click="show('异步')">异步</span>`
      this.compile(content)
    },
    methods : {
      compile (content) {
        let _this = this
        // 动态传递template值

        const Component = Vue.extend({
          template: `<div> ${content} </div>`,
          
          methods: {
            show (wordId) {
              _this.watchChild(wordId)
            },
          }
        })
        // 挂载
        const articleContent = new Component().$mount()
        
        this.$refs['articleContent'].appendChild(articleContent.$el)
      },
      show (wordId) {
        getData.getWord({wordId:wordId}).then((res) => {
          this.wordModal = res.data
          this.showModal = true
          let _this = this
          setTimeout(()=>{
            _this.showEnter = false
          },10)
        })
      },
      watchChild (wordId) {
        getData.getWord({wordId:wordId}).then((res) => {
          this.showModal = true
          let _this = this
          setTimeout(()=>{
            _this.showEnter = false
          },10)
        })
      },
      close () {
        this.showEnter = true
        let _this = this
        setTimeout(()=>{
          _this.showModal = false
        },200)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/variable";
  @import "../../style/mixins";

  .page-cont {
    padding: .32rem;
    background-color: #fff;
  }
  .lightWords {
    color: $base-color !important;
  }
  .word_modal {
    padding: .24rem .24rem .36rem;
    .title {
      position: relative;
      padding: .24rem 0;

      .detail {
        display: inline-block;
        position: absolute;
        right: 0;
        top: .32rem;
        font-size: .24rem;
        color: $base-color;
        padding-right: .2rem;
        i {
          &:after {
            border-color: rgba($base-color,0.7);
            right: 0;
          }
        }

      }
    }
    .body {
      font-size: .26rem;
      font-weight: normal;
      color: #999;
      line-height: 1.4;
      text-align: justify;
    }
  }
  .cont {
    background-color: #fff;

    li {
      height: 2.48rem;
      padding: 0.24rem 0;
      border-bottom: .01rem solid $bg-color;
      position: relative;
      p {
        line-height: 1.4;
        color: #333;
        font-size: .28rem;
        font-weight: bold;
      }

      .box {
        display:flex;
        border-radius: .08rem;
        overflow: hidden;
        width: 100%;
        height: 100%;
        padding-right: 2.3rem;
        position: relative;
        h2 {
          position: absolute;
          bottom: .12rem;
          left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          img {
            width: .36rem;
            height: .36rem;
            border-radius: 50%;
            margin-right: .12rem;
          }
          color: $base-color;
          font-size: .28rem;
          .time {
            color: #999;
            font-size: .24rem;
            margin-left: .12rem;
          }
        }
        .body {
          padding: .12rem 0;
        }

        img.img-big {
          position: absolute;
          right: 0;
          top: 0;
          width: 2.3rem;
          height: 2rem;
          border-radius: .08rem;
        }
      }
    }
  }
  .ad {
    padding: .24rem 0;
    img {
      width: 100%;
      border-radius: .08rem;
    }
    border-bottom: 1px solid $border-color;
  }
  .sign_box {
    border-radius: .16rem;
    padding: .18rem .24rem;
    box-shadow: 0 .04rem .26rem 0 rgba(#C3C3C3,0.5);
    background-color: #fff;
    .item {
      padding-right: 1.6rem;
      .avatar {
      }
    }
    h2 {
      color: #333;
      font-size: .32rem;
    }
    .thum {
      width: .24rem;
    }

    .right{
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      span {
        color: #fff;
        display: block;
        border-radius: .08rem;
        width: 5em;
        text-align: center;
        height: .48rem;
        line-height: .48rem;
        background-color: $base-color;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 0;
        font-size: .28rem;
      }
    }
  }
</style>

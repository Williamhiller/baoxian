<template>
  <div class="page has-tab">
    <div class="search_box">
      <form action="javascript:return true;" class="search">
        <input type="search" v-model="inputWord" v-bind:placeholder="word" @keyup.13=search() ref="input1">
        <span class="submit" v-on:click="search()"></span>
      </form>
    </div>

    <div class="wrapper">
      <h2 class="tit">
         相关词条
      </h2>
      <div class="relate-word" v-if="wordObj != null">
        <div class="item item-avatar avatar-left">
          <div class="avatar"><img :src="wordObj.imgUrl" alt=""></div>
          <div class="item-body">
            <h2>{{wordObj.wordName}}</h2>
            <p>{{wordObj.detail}}</p>
          </div>
        </div>
      </div>
      <div class="more">更多保险词条 <i class="mint-cell-allow-right"></i></div>

    </div>

    <!--<div class="wrapper">-->
      <!--<h2 class="tit">-->
        <!--相关活动-->
      <!--</h2>-->
      <!--<ul class="relate-activity">-->
        <!--<li v-for="item in 2">-->
          <!--<img src="../../assets/image/inner.png" alt="">-->
          <!--<div class="mask">步步夺金！刷步数领意外险</div>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<div class="more">更多活动 <i class="mint-cell-allow-right"></i></div>-->
    <!--</div>-->

    <div class="wrapper">
      <h2 class="tit border-bottom">
        小课堂
      </h2>
      <ul class="relate-article" v-if="relateArticles != null">
        <router-link tag="li" :to="{path:'/article',query:{articleId:item.toArticleId}}"
                     class="border-bottom" v-for="item in relateArticles" v-bind:key="item.homePageIndex">
          <div class="box">
            <img :src="item.imgUrl">
            <p>{{item.toArticleTitle}}</p>
          </div>
        </router-link>
      </ul>
    </div>

    <tabs active="home"></tabs>
  </div>
</template>

<script>
  import getData from '../../service/getData'
  import tabs from '../../components/tabs/tabs'
  export default {
    name : "word",
    components:{
      tabs
    },
    data () {
      return {
        inputWord : "",
        word : "",
        relateArticles: null,
        wordObj : null
      }
    },
    mounted () {
      let word = this.$route.query.word

      this.word = this.$route.query.word
      this.getWordDetail(word)
    },
    methods : {
      search () {
        this.$refs.input1.blur();
        this.word = this.inputWord

        this.getWordDetail(this.word)
      },
      getWordDetail (word) {
        getData.getWord({wordName : word}).then((res)=> {
          this.wordObj = res.data.words

          getData.getToArticleRela(this.wordObj[0].wordId).then((list)=> {
            this.relateArticles = list.data.articles
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/variable";
  @import "../../style/mixins";
  .page {
    /*background-color: #fff;*/

    .more {
      text-align: center;
      font-size: .28rem;
      color: $base-color;
      font-weight: normal;
      border-top: 1px solid $border-color;
      margin-top: .24rem;
      padding: .32rem 0 .12rem;
      position: relative;

      i {
        position: relative;
        width: .56rem;
        height: .2rem;
        display: inline-block;
        &:after {
          border-color: rgba($base-color,0.7);
        }
      }
    }
  }
  .wrapper {
    background-color: #fff;
    padding-bottom: .2rem;
    margin-bottom: .18rem;
    .tit {
      font-size: .32rem;
      padding:.24rem;
      color: #333;
      font-weight: bold;
    }
    .relate-word,
    .relate-activity,
    .relate-article {
      padding: 0 .24rem;
    }

  }
  .relate-word {
    .item {
      background-color: rgba(#A8E0FC,0.21);
      border-radius: .12rem;
      box-shadow: 0 .04rem .2rem 0 rgba(#000,0.06);
      padding-left: 2.48rem;
      min-height: 2.48rem;
      .avatar {
        left: .24rem;
        width: 2rem;
        height: 2rem;
      }
    }

  }

  .relate-activity {
    li {
      height: 2.6rem;
      border-radius: .12rem;
      box-shadow: 0 .04rem .12rem 0 rgba(#000000,.06);
      overflow: hidden;
      position: relative;
      margin-bottom: .24rem;
      &:last-child {
        margin-bottom: 0;
      }

      .mask {
        position: absolute;
        left: 0; right: 0;bottom: 0;
        background-color: rgba(#000000,0.6);
        height: .72rem;
        line-height: .72rem;
        color: #fff;
        text-align: center;
        font-size: .28rem;
      }

    }


    img {
      width: 100%;
      height: 100%;
    }
  }

  .relate-article {
    li {
      padding: .24rem 2.28rem .24rem 0;
      position: relative;
      min-height: 2.28rem;

      p {
        line-height: 1.4;
        font-size: .28rem;
        color: #666;
      }
      img {
        width: 2.2rem;
        height: 1.8rem;
        border-radius: .12rem;
        /*position: absolute;*/
        float: right;
        margin-right: -2.28rem;
      }
    }
  }
  .search_box {
    width: 100%;
    padding: .18rem .4rem;
    background-color: #fff;

    .search {
      display: block;
      width: 100%;
      height: .64rem;
      border-radius: .32rem;
      padding: .12rem .64rem .12rem .32rem;
      box-sizing: border-box;
      background-color: rgba(#F5F7FA,1);
      position: relative;
      .submit {
        display: block;
        position: absolute;
        width: .64rem;
        height: .64rem;
        right: 0;
        top: 0;
        background-image: url("../../assets/image/search_gray.png");
        background-repeat: no-repeat;
        background-size: .32rem .32rem;
        background-position: top .14rem right .24rem;
      }
      input {
        height: .38rem;
        width: 100%;
        background: transparent;
        color: #333;
        @include placeholder(rgba(#6F6F6F,0.6))
      }
    }
  }
</style>

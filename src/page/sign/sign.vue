<template>
  <div class="page-cont has-tab">
    <div v-if="authorList != null">
      <div class="tabs-top swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide tab-top-item"
               :class="{'on' : activeIndex === index}"
               v-for="(item,index) in authorList" @click="jump(index)">
            <span class="name">{{item.authorName}}</span>
          </div>
        </div>
      </div>
    </div>
    <ul class="author_list" v-if="showBottom">
      <li v-for="(item,index) in authorList" :id="'cont'+index" v-bind:key="item.name">
        <div class="intro">
          <img class="intro_img" :src="item.imgUrl" alt="">
          <div class="cont">
            <h2>{{item.authorName}}</h2>
            <p class="detail">{{item.introduction}}</p>

            <div class="handle">
              <span class="btn" v-if="item.subscibed">已订阅</span>
              <span class="btn btn-white" v-else>订阅</span>
              <span class="btn btn-base">咨询</span>
            </div>
          </div>
        </div>
        <div class="article_list">
          <div class="item item-avatar avatar-left border-bottom" v-for="article in item.articles">
            <div class="avatar"><img src="../../assets/image/inner.png" alt=""></div>
            <div class="item-body">
              <h2>{{article.title}}</h2>
              <p>{{article.summary}}</p>
            </div>
          </div>
          <div class="more" @click="getMoreArticle(index)" v-show="!item.isLast">
            <img src="../../assets/image/arrow_down.png" alt="">
          </div>
        </div>
      </li>
    </ul>
    <tabs active="sign"></tabs>
  </div>
</template>

<script>

import getData from '../../service/getData'
import Swiper from 'swiper'
import tabs from '../../components/tabs/tabs'

let tabHeight , topTabSwiper;
export default {
  name: 'Sign',
  data () {
    return {
      activeIndex: 0,
      authorList : null,
      showBottom : false
    }
  },
  components:{
    tabs
  },
  mounted () {

    // 先获取作者列表
    getData.getAuthorList().then((res)=> {
      this.authorList = res.data.authors

      let arr = [];
      this.authorList.forEach((item,index) => {
        arr.push(getData.getAuthorArticleList({
          authorId : item.authorId,
          pageNumber : 1,
          pageSize : 5
        }))
      })

      Promise.all(arr).then((res)=> {

        res.data.forEach((item,index)=>{
          this.authorList[index].pageNumber = 1
          this.authorList[index] = Object.assign(this.authorList[index],res[index].data)
        })
        this.showBottom = true

        setTimeout(()=>{
          this.getAllTop()
          // 计算顶部tab高度
          tabHeight = document.querySelector('.tabs-top').offsetHeight
          topTabSwiper = new Swiper('.swiper-container', {
            slidesPerView : 4,
            freeMode: true
          });
        },100)
      })
    })
  },
  methods : {
    jump (index) {
      let self = this;
      let distance = document.getElementById("cont"+index).offsetTop - tabHeight
      document.body.scrollTop = distance
      document.documentElement.scrollTop = distance
      if(index === self.authorList.length-1) {
        setTimeout(function () {
          self.activeIndex = index
          topTabSwiper.slideTo(index-1)
        }, 10);
      }
    },
    getAllTop () {
      this.authorList.forEach((item,index)=>{
        item.jumpHeight = document.getElementById('cont'+index).offsetTop
      })
    },
    /**
     * 获取更多文章
     * @param index
     */
    getMoreArticle (index) {
      let item = this.authorList[index]
      let pageNumber = item.pageNumber
      getData.getAuthorArticleList({
        authorId : item.authorId,
        pageNumber : parseInt(item.articles.length/5),
        pageSize : 5
      }).then((list)=>{
        item.pageNumber = pageNumber + 1
        item.articles.push(...list.data.articles)
        if(item.articles.length >= item.total) {
          item.isLast = true
        }

        this.$set(this.authorList,index,item)
        this.getAllTop()
      })
    },
    handleScroll () {

      let distance = (document.documentElement.scrollTop || document.body.scrollTop) + tabHeight
      // 判断，distance的距离
      for(let i = 0; i < this.authorList.length ; i++) {
        let item = this.authorList[i]
        if(distance < item.jumpHeight) {
          this.activeIndex = i-1;
          topTabSwiper.slideTo(i-2)
          break;
        }else if(i === this.authorList.length -1) {
          this.activeIndex = i;
          topTabSwiper.slideTo(i-1)
        }
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed(){ // 退出页面时移除监听事件
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<style scoped lang="scss">

  @import "../../style/variable";
  @import "../../style/mixins";
  .page-cont {
    padding-top: .88rem;
  }
  .tabs-top {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: .88rem;
    background-color: #fff;
    box-shadow: 0 .04rem .04rem 0 rgba(#000000,0.06);

    .tab-top-item {
      /*padding-top: .05rem;*/
      text-align: center;
      &.on {
        span.name {
          color: $base-color;
          font-weight: bold;
          border-bottom-color: $base-color;
        }
      }
      span.name {
        padding: 0 .5em;
        line-height: .88rem;
        height: .88rem;
        display: inline-block;
        border-bottom: .06rem solid transparent;
        font-size: .28rem;
      }
    }

  }

  .author_list {
    &>li {
      background-color: #fff;
      margin-bottom: .16rem;
    }
    .intro_img {
      width: 100%;
      height: auto;
    }
    .intro {
      height: 3rem;
      position: relative;
      overflow: hidden;

      .cont {
        position: absolute;
        top: 0;
        right: 0;
        width: 3.7rem;
        height: 3rem;
        background-color: rgba(#095074,0.5);
        padding: .2rem;

        h2 {
          color: #fff;
          font-size: .4rem;
          line-height: 1.8;
          font-weight: bold;
        }
        p.detail {
          line-height: 1.4;
          font-size: .24rem;
          color: rgba(#fff,1);
        }

        .handle {
          text-align: center;
          position: absolute;
          bottom: .2rem;
          left: 0;
          width: 100%;
          .btn {
            margin: 0 .08rem;
          }
        }
      }
    }

    .article_list {
      padding: 0 .24rem;

      .item-avatar {
        .item-body {
          h2 {
            color: rgba(#000,0.8);
            font-weight: normal;
          }
        }
      }
    }
    .more {
      text-align: center;
      padding: .24rem;
      img {
        width: .5rem;
        height: auto;
      }
    }
  }

  .btn {
    height: .6rem;
    line-height: .6rem;
    border-radius: .3rem;
    display: inline-block;
    min-width: 1.32rem;
    text-align: center;
    font-size: .24rem;
    color: #fff;
    border : .02rem solid rgba(#fff,0.6);
    &:active {
      opacity: 0.8;
    }
    &.btn-white {
      background-color: #fff;
      color: $base-color;
      border-color: #fff;
    }
    &.btn-base {
      background-color: $base-color;
      color: #fff;
      border-color: $base-color;
    }
  }
</style>

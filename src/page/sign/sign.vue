<template>
  <div class="page-cont">
    <div>
      <div class="tabs-top swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide tab-top-item"
               :class="{'on' : activeIndex === index}"
               v-for="(item,index) in list" @click="jump(index)">
            <span class="name">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <ul class="author_list">
      <li v-for="(item,index) in list" :id="'cont'+index" v-bind:key="item.name">
        <div class="intro">
          <img class="intro_img" src="../../assets/image/person.png" alt="">
          <div class="cont">
            <h2>{{item.name}}</h2>
            <p class="detail">保险从业xx年，擅长xx，还有xx，xxxxxxxx，xxxxxxxxxxx，xxxxxxxxxxxxxxxxxxxxxxx。</p>

            <div class="handle">
              <span class="btn" v-if="item.subscibed">已订阅</span>
              <span class="btn btn-white" v-else>订阅</span>
              <span class="btn btn-base">咨询</span>
            </div>
          </div>
        </div>
        <div class="article_list">
          <div class="item item-avatar avatar-left border-bottom" v-for="item in 4">
            <div class="avatar"><img src="../../assets/image/inner.png" alt=""></div>
            <div class="item-body">
              <h2>标题 {{item}}</h2>
              <p>我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要</p>
            </div>
          </div>
          <div class="more">
            <img src="../../assets/image/arrow_down.png" alt="">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Swiper from 'swiper'
let tabHeight , topTabSwiper;
export default {
  name: 'Sign',
  data () {
    return {
      activeIndex: 0,
      list : [
        {
          name : "大保姐",
          subscibed : true
        },
        {
          name : "Andy Tao",
          subscibed : false
        },
        {
          name : "小K爸爸",
          subscibed : true
        },
        {
          name : "大保哥",
          subscibed : false
        },
        {
          name : "大保哥2",
          subscibed : false
        },
        {
          name : "大保哥3",
          subscibed : false
        }
      ]
    }
  },
  mounted () {
    // 计算顶部tab高度
    tabHeight = document.querySelector('.tabs-top').offsetHeight
    this.getAllTop()

    topTabSwiper = new Swiper('.swiper-container', {
      slidesPerView : 4,
      freeMode: true
    });
  },
  methods : {
    jump (index) {
      let self = this;

      document.documentElement.scrollTop = self.list[index].jumpHeight - tabHeight
      if(index === self.list.length-1) {
        setTimeout(function () {
          self.activeIndex = index
          topTabSwiper.slideTo(index-1)
        }, 10);
      }

      // // 平滑滚动，时长300ms，每10ms一跳，共30跳
      // let step = total / 20
      // if (total > distance) {
      //   smoothDown()
      // } else {
      //   let newTotal = distance - total
      //   step = newTotal / 20
      //   smoothUp()
      // }
      // function smoothDown () {
      //   if (distance < total) {
      //     distance += step
      //     document.body.scrollTop = distance
      //     document.documentElement.scrollTop = distance
      //     setTimeout(smoothDown, 10)
      //   } else {
      //     document.body.scrollTop = total
      //     document.documentElement.scrollTop = total
      //     self.activeIndex = index
      //   }
      // }
      // function smoothUp () {
      //   if (distance > total) {
      //     distance -= step
      //     document.body.scrollTop = distance
      //     document.documentElement.scrollTop = distance
      //     setTimeout(smoothUp, 10)
      //   } else {
      //     document.body.scrollTop = total
      //     document.documentElement.scrollTop = total
      //     self.activeIndex = index
      //   }
      // }
    },
    getAllTop () {
      this.list.forEach((item,index)=>{
        item.jumpHeight = document.getElementById('cont'+index).offsetTop
      })
    },
    handleScroll () {

      let distance = (document.documentElement.scrollTop || document.body.scrollTop) + tabHeight
      // 判断，distance的距离
      for(let i = 0; i < this.list.length ; i++) {
        let item = this.list[i]
        if(distance < item.jumpHeight) {
          this.activeIndex = i-1;
          topTabSwiper.slideTo(i-2)
          break;
        }else if(i === this.list.length -1) {
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
      padding-top: .05rem;
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
        line-height: .8rem;
        display: inline-block;
        border-bottom: .04rem solid transparent;
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

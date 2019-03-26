<template>
  <div class="home-page has-tab scroll">
    <div class="home-top">
      <div class="search_box">
        <form action="javascript:return true;" class="search">
          <input type="search" v-model="inputWord" v-bind:placeholder="initWord" @keyup.13=search() ref="input1">
          <span class="submit" v-on:click="search()"></span>
        </form>
      </div>
      <div class="hot_box">
        <span class="tit">热词</span>

        <router-link tag="span" to="/word?word=儿童保险" class="word">儿童保险</router-link>
        <router-link tag="span" to="/word?word=理赔" class="word">理赔</router-link>
        <router-link tag="span" to="/word?word=旅意险" class="word">旅意险</router-link>
        <router-link tag="span" to="/word?word=单身养老" class="word">单身养老</router-link>
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in 4">
            <div class="img_box">
              <img src="../../assets/image/slide.png" alt="">
            </div>
          </div>
        </div>

        <div class="swiper-pagination">
          <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
        </div>
      </div>

    </div>

    <div class="list">
      <div class="item item-link">
        <router-link tag="div" to="/sign">
          签约专栏 <span class="text">资深规划师案例详解</span>
        </router-link>

        <ul class="sign-row row">
          <li class="col left">
            <div class="img_box">
              <img src="../../assets/image/inner.png" alt="">
            </div>
            <div class="down">
              <div class="item item-avatar avatar-right vertical">
                <p>因为甲状腺结节被拒保还有反转的可能吗？</p>
                <div class="avatar round">
                  <img src="../../assets/image/avatar.png" alt="">
                  <img class="identify" src="../../assets/image/identify.png" alt="">
                </div>
              </div>
            </div>
          </li>

          <li class="col right">
            <div class="article top">
              <div class="img_box">
                <img src="../../assets/image/inner.png" alt="">
              </div>
              <div class="down">
                因为甲状腺结节被拒保还有反转的可能吗？
              </div>
            </div>
            <div class="article">
              <div class="img_box">
                <img src="../../assets/image/inner.png" alt="">
              </div>
              <div class="down">
                因为甲状腺结节被拒保还有反转的可能吗？
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="item item-link">
        <router-link tag="div" to="/handpick">
          精选专题 <span class="text">资深规划师案例详解</span>
        </router-link>

        <ul class="handpick-row row">
          <li class="col">
            <div class="top">
              <div class="mask">投保第一课</div>
            </div>
            <div class="down">
              小白扫盲必读<br/>4选1选C
            </div>
          </li>

          <li class="col">
            <div class="top">
              <div class="mask">理赔大数据</div>
            </div>
            <div class="down">
              从理赔数据<br/>看风险
            </div>
          </li>
          <li class="col">
            <div class="top">
              <div class="mask">绕过这些坑</div>
            </div>
            <div class="down">
              投保套路<br/>见招拆招
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="home-down">
      <ul class="row top-tab">
        <li class="col" v-bind:class="{'on' : showToggle === 0}" v-on:click="toggleDown(0)">
          <span>发现</span>
        </li>
        <li class="col" v-bind:class="{'on' : showToggle !== 0}" v-on:click="toggleDown(1)">
          <span>问答</span>
        </li>
      </ul>
      <!--发现和问答二选一显示-->
      <ul class="cont" v-if="showToggle === 0">
        <li class="img-right">
          <div class="box">
            <p>生育保险能报啥？孕妈们关心的热点问题大盘点。</p>
            <img src="../../assets/image/inner.png">
          </div>
        </li>
        <li class="img-left">
          <div class="box">
            <p>生育保险能报啥？孕妈们关心的热点问题大盘点。</p>
            <img src="../../assets/image/inner.png">
          </div>
        </li>
        <li class="img-right">
          <div class="box">
            <p>生育保险能报啥？孕妈们关心的热点问题大盘点。</p>
            <img src="../../assets/image/inner.png">
          </div>
        </li>
      </ul>

      <ul class="cont" v-else>
        <li class="img-right">
          <div class="box">
            <p>生育保险能报啥？。</p>
            <img src="../../assets/image/inner.png">
          </div>
        </li>
        <li class="img-left">
          <div class="box">
            <p>生育保险能报啥？孕妈们关心的热点问题大盘点。</p>
            <img src="../../assets/image/inner.png">
          </div>
        </li>
      </ul>
    </div>

    <tabs active="home"></tabs>
  </div>
</template>

<script>
import getData from '../../service/getData'
import tabs from '../../components/tabs/tabs'
import Swiper from 'swiper'

export default {
  name: 'home',
  data () {
    return {
      inputWord : '',
      initWord: '旅意险',
      showToggle : 0
    }
  },
  components:{
    tabs
  },
  created () {

  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination : {
        el : '.swiper-pagination'
      },
      slidesPerView : 'auto',
      // paginationClickable: true,
      spaceBetween : 0,
      observer : true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents : true//修改swiper的父元素时，自动初始化swiper
    });

  },
  methods: {
    toggleDown : function (index) {
      this.showToggle = index;
    },
    search () {
      this.$refs.input1.blur();
      this.$router.push({ path: '/word', query: { word: this.inputWord || this.initWord }});
    }

  }
}
</script>

<style scoped lang="scss">
  @import "../../style/variable";
  @import "../../style/mixins";

  .home-page {
  }
  .home-top {
    background-color: #fff;
    background-image: url("../../assets/image/home/home_top_bg.png");
    background-repeat: no-repeat;
    background-size: 100% auto;

    .search_box {
      width: 100%;
      padding: .18rem .4rem;

      .search {
        display: block;
        width: 100%;
        height: .64rem;
        border-radius: .32rem;
        padding: .12rem .64rem .12rem .32rem;
        box-sizing: border-box;
        background-color: rgba(#08557D,.21);
        position: relative;
        .submit {
          display: block;
          position: absolute;
          width: .64rem;
          height: .64rem;
          right: 0;
          top: 0;
          background-image: url("../../assets/image/search_w.png");
          background-repeat: no-repeat;
          background-size: .32rem .32rem;
          background-position: top .14rem right .24rem;
        }
        input {
          height: .38rem;
          width: 100%;
          background: transparent;
          color: #fff;
          @include placeholder(rgba(#fff,0.6))
        }
      }
    }

    .hot_box {
      padding: 0 .24rem .24rem;

      .tit {
        color: #fff;
        display: inline-block;
        height: .48rem;
        line-height: .48rem;
        font-size: .28rem;
        margin-right: .24rem;
      }
      .word {
        background-color: rgba(#08557D,.21);
        display: inline-block;
        height: .48rem;
        line-height: .48rem;
        border-radius: .24rem;
        padding: 0 .24rem;
        color: rgba(#fff,0.6);
        font-size: .24rem;
        margin-right: .12rem;
      }
    }

    .swiper-container {
      width: 100%;
      height: 4.4rem;
      padding-left: .48rem;

      .swiper-wrapper {
        margin-left: -.24rem;
      }
      .swiper-pagination-bullets {
        bottom: 0;
      }
      .swiper-pagination-bullet {
         width: .14rem;
         height: .14rem;
         border-radius: .7rem;
         background-color: rgb(112,183,249) !important;
         opacity: 0.3;
         margin: 0 .09rem !important;

         &.swiper-pagination-bullet-active {
           opacity: 1 !important;
         }
       }
      .swiper-slide {
        height: 4.5rem;
        padding: 0 .1rem;
        overflow: hidden;

        .img_box {
          height: 4rem;
          border-radius: .24rem;
          overflow: hidden;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        &:after {
          content: "";
          display: block;
          position: absolute;
          left: 9%;
          top: 15%;
          background-color: rgba(#838582,0.38);
          width: 82%;
          height: 70%;
          box-shadow: 0 0 .3rem .3rem rgba(#838582,0.38);
          z-index: -1;
        }
      }

    }

  }
  .list {

    .sign-row {
      margin-top: .24rem;
      width: 7.18rem;
      margin-left: -.18rem;
      height: 3rem;

      .avatar {
        height: .8rem;
        width: .8rem;
      }
      li {
        margin: 0 .08rem;

        &.left {
          width: 100%;
          height: 100%;
          position: relative;

          .down {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            .item-avatar p {
              font-size: .18rem;
              color: #fff;
              text-shadow: 0 .04rem .08rem rgba(#3E0606,0.5);
            }
          }
        }
        &.right {
          .article {
            width: 100%;
            height: 1.47rem;
            position: relative;

            &.top {
              margin-bottom: .08rem;
            }
            .down {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              font-size: .18rem;
              color: #fff;
              text-shadow: 0 .04rem .08rem rgba(#3E0606,0.5);
              padding: .14rem;
            }
          }
        }

        .img_box {
          border-radius: .16rem;
          overflow: hidden;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .handpick-row {
      margin-top: .24rem;
      width: 7.18rem;
      margin-left: -.18rem;
      li {
        height: 3rem;
        border-radius: .12rem;
        background-color: #fff;
        box-shadow: 0 0 .1rem 0 rgba(#999,0.1);
        margin: 0 .08rem;
        overflow: hidden;

        .top {
          width: 100%;
          height: 1.92rem;
          background: url("../../assets/image/inner.png") no-repeat;
          background-size: 100% auto;
          position: relative;

          .mask {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: .5rem;
            background-color: rgba(#252525,0.5);
            color: #fff;
            line-height: .5rem;
            text-align: center;
            font-size: .24rem;
          }
        }

        .down {
          color: #9B9B9B;
          font-size: .2rem;
          text-align: center;
          padding: .28rem;
          line-height: 1.2;
          font-weight: normal;
        }
      }
    }
  }

  .home-down {
    background-color: #fff;
    margin-top: .16rem;
    .top-tab {
      height: .88rem;
      box-shadow: 0 .08rem .08rem rgba(#000000,0.04);
      margin-bottom: .2rem;

      li {
        font-size: .32rem;
        text-align: center;
        padding-top: .04rem;
        span {
          display: inline-block;
          width: 1.3rem;
          line-height: .8rem;
          border-bottom: .04rem solid transparent;
        }
        &.on {
          color: $base-color;
          span {
            border-bottom-color: $base-color;
            font-weight: 600;
          }
        }
      }
    }
    .cont {
      background-color: #fff;
      li {
        height: 2.48rem;
        padding: 0.24rem .28rem;
        border-bottom: .01rem solid $bg-color;
        p {
          font-size: .28rem;
          color: #666;
          line-height: 1.4;
          padding: 0 .36rem;
        }

        .box {
          display:flex;
          align-items:center;/*垂直居中*/
          border-radius: .08rem;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        &.img-right {
          .box {
            padding-right: 2.3rem;
            position: relative;

          }
          img {
            position: absolute;
            right: 0;
            top: 0;
            width: 2.3rem;
            height: 2rem;
            border-radius: .08rem;
          }
        }
        &.img-left {
          .box {
            padding-left: 2.3rem;
            position: relative;

          }
          img {
            position: absolute;
            left: 0;
            top: 0;
            width: 2.3rem;
            height: 2rem;
            border-radius: .08rem;
          }
        }
      }
    }
  }
</style>

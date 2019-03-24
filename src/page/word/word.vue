<template>
  <div class="page">
    <div class="search_box">
      <div class="search">
        <input type="search" v-bind:placeholder="word">
      </div>
    </div>

    <div class="wrapper">
      <h2 class="tit">
         相关词条
      </h2>
      <div class="relate-word">
        <div class="item item-avatar avatar-left">
          <div class="avatar"><img src="../../assets/image/inner.png" alt=""></div>
          <div class="item-body">
            <h2>旅意险</h2>
            <p>旅行意外险，即是旅行保险，是在本国或者国际旅行中能够提供一种为支付医疗费用和财务和其他损失的保险业务。</p>
          </div>
        </div>
      </div>

    </div>

    <div class="wrapper">
      <h2 class="tit">
        相关活动
      </h2>
      <ul class="relate-activity">
        <li v-for="item in 2">
          <img src="../../assets/image/inner.png" alt="">
          <div class="mask">步步夺金！刷步数领意外险</div>
        </li>
      </ul>
    </div>

    <div class="wrapper">
      <h2 class="tit border-bottom">
        相关文章
      </h2>
      <ul class="relate-article">
        <li class="border-bottom" v-for="item in 3">
          <div class="box">
            <img src="../../assets/image/inner.png">
            <p>生育保险能报啥？孕妈们关心的热点问题大盘点。</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name : "word",
    data () {
      return {
        word: '旅意险'
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "../../style/variable";
  @import "../../style/mixins";
  .page {
    /*background-color: #fff;*/
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
      background-image: url("../../assets/image/search_gray.png");
      background-size: .32rem .32rem;
      background-repeat: no-repeat;
      background-position: top .16rem right .32rem;
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

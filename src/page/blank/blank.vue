<template>
  <div class="page">
    <div class="search_box">
      <div class="search">
        <input type="search" v-bind:placeholder="word">
      </div>
    </div>

    <div class="blank">
      <div><img src="../../assets/image/404.png" alt=""></div>
      <p>没有搜索到您想要的东西噢</p>
    </div>


  </div>
</template>

<script>
  export default {
    name : "blank",
    data () {
      return {
        word : "不知道什么东西"
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
  .blank {
    padding-top: 3rem;
    text-align: center;
    img {
      width: 1.2rem;
    }
    p {
      padding: .2rem ;
      color: #ACBACB;
      font-size: .32rem;
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

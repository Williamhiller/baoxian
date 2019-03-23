<template>
  <div class="home-page">
    <h1>{{ msg }}</h1>
    <p>teeewewewewe<br/>dsdsdsd</p>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/image/home.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/image/home.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/image/home.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getData from '../../service/getData'
import Swiper from 'swiper'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome Home'
    }
  },
  created () {
    this.setNewsApi()
  },
  mounted () {
    // let mySwiper = new Swiper('.swiper-container', {
    //   autoplay:false
    // })
  },
  methods: {

    setNewsApi: function () {
      getData.JH_news('/news').then(res => {
        console.log(res)
        this.newsListShow = res.articles
      })
    }
  }
}
</script>

<style scoped>
  .swiper-container {
    width: 300px;
  }
</style>

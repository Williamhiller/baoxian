<template>
  <div class="home-page">
    <h1>{{ msg }}</h1>
    <ul class="row">
      <li class="col-50">d</li>
      <li class="col-50">dsd</li>
    </ul>
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
    <div>
      <tabs active="home"></tabs>
    </div>
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
      msg: 'Welcome Home'
    }
  },
  components:{
    tabs
  },
  created () {
    this.setNewsApi()
  },
  mounted () {
    new Swiper('.swiper-container', {
      autoplay : false
    })
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

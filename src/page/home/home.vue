<template>
  <div class="home-page">
    <h1>{{ msg }}</h1>
    <p>teeewewewewe<br/>你好</p>
  </div>
</template>

<script>
import getData from '../../service/getData'

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
  p {
    font-size: .48rem;
  }
</style>

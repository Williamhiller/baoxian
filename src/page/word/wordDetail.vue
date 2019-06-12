<template>
  <div class="page">

    <div v-if="wordObj != null">
      <h2>{{wordObj.wordName}}</h2>
    </div>
    <div class="body" v-html="wordObj.detail"></div>
  </div>
</template>

<script>
  import getData from '../../service/getData'

  export default {
    name : "wordDetail",
    data () {
      return {
        wordObj : null
      }
    },
    mounted () {
      let wordId = this.$route.query.wordId

      this.wordId = wordId
      this.getWordDetail(wordId)
    },
    methods : {
      getWordDetail (wordId) {
        getData.getWord(wordId).then((res)=>{
          this.wordObj = res.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/variable";
  @import "../../style/mixins";

  .page {
    background-color: #fff;
    padding: .32rem .24rem;
    h2 {
      padding: .24rem 0;
      margin-bottom: .24rem;
      font-size: .42rem;
      color: #000;
      font-weight: bold;
    }
    .body {
      line-height: 1.4;
      color: #666;
    }
  }

</style>

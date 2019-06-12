<template>
  <div class="page"
       v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="40">

    <ul class="card_box" v-if="articleList != null">
      <li class="card" v-for="item in articleList">
        <img :src="item.imgUrl" alt="">
        <div class="cont">
          <h2>{{item.title}}</h2>
          <p>{{item.detail}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  import getData from '../../service/getData'
export default {
  name: 'home',
  data () {
    return {
      loading: false,
      articleList : null,
    }
  },
  methods : {
    loadMore () {
      this.loading= true

      let authorId = this.$route.query.authorId
      let pageNumber = this.articleList ? parseInt(this.articleList/10) : 1
      getData.getSpecial({
        authorId : authorId,
        pageNumber : pageNumber,
        pageSize : 10
      }).then((list)=>{
        this.articleList.push(...list.data.articles)
        this.loading = (this.articleList.length >= list.data.total)

      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../style/variable";
  @import "../../style/mixins";

  .page {
    padding: .24rem 0;

    .card_box {
      padding: 0 .24rem;

      .card {
        border-radius: .16rem;
        overflow: hidden;
        box-shadow: 0 .04rem .26rem 0 rgba(#C3C3C3,0.5);
        margin-bottom: .24rem;
        img  {
          width: 100%;
        }
        .cont {
          padding: .24rem .24rem;
          h2 {
            font-size: .32rem;
            padding: .12rem 0;
          }
          p {
            line-height: 1.4;
            color: #999;
          }
        }
      }

    }
  }
</style>

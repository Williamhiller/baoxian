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
    <ul>
      <li v-for="(item,index) in list" :id="'cont'+index" v-bind:key="item.name">
        <div :style="{height : item.height + 'px'}">{{item.name + index}}</div>
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
          name : "wang",
          height : 300
        },
        {
          name : "zhang",
          height : 500
        },
        {
          name : "li",
          height : 600
        },
        {
          name : "zhao",
          height : 700
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
          console.log(9)
          self.activeIndex = index
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
          console.log(8)
          break;
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

    .tab-top-item {
      padding-top: .04rem;
      text-align: center;
      &.on {
        span.name {
          color: $base-color;
          font-weight: bold;
          border-bottom-color: $base-color;
        }
      }
      span.name {
        line-height: .8rem;
        display: inline-block;
        border-bottom: .04rem solid transparent;
      }
    }

  }

</style>

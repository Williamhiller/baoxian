<template>
  <div class="page-cont">
    <div class="tabs-top">
      <span style="display: inline-block;padding: 0 2em"
            :class="{'on' : activeIndex === index}"
            v-for="(item,index) in list" @click="jump(index)">{{item.name}}</span>
    </div>
    <ul>
      <li v-for="(item,index) in list" :id="'cont'+index" v-bind:key="item.name">
        <div :style="{height : item.height + 'px'}">{{item.name + index}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
let tabHeight;
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
  },
  methods : {
    jump (index) {
      let self = this;
      // let jump = document.getElementById('cont'+index)
      let total = self.list[index].jumpHeight - tabHeight + 2
      let distance = document.documentElement.scrollTop || document.body.scrollTop
      // 平滑滚动，时长300ms，每10ms一跳，共30跳
      let step = total / 20
      if (total > distance) {
        smoothDown()
      } else {
        let newTotal = distance - total
        step = newTotal / 20
        smoothUp()
      }
      function smoothDown () {
        if (distance < total) {
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
          self.activeIndex = index
        }
      }
      function smoothUp () {
        if (distance > total) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
          self.activeIndex = index
        }
      }
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
  .page-cont {
    padding-top: 1.2rem;
  }
  .tabs-top {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 1.2rem;
    background-color: #fff;

    span.on {
      background-color: red;
    }
  }

</style>

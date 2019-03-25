<template>
  <div class="tabs">
    <router-link tag="div" to="/" class="tab-item tab1" v-bind:class="{'on':active == 'home'}">
      <div class="img-icon"><img src="../../assets/image/tabs/tab1.png" alt=""></div>
      <p class="text">首页</p>
    </router-link>
    <router-link tag="div" to="/sign" class="tab-item tab2" v-bind:class="{'on':active == 'sign'}">
      <div class="img-icon"><img src="../../assets/image/tabs/tab2.png" alt=""></div>
      <p class="text">专栏</p>
    </router-link>
    <router-link tag="div" to="/hello" class="tab-item tab3" v-bind:class="{'on':active == 'me'}">
      <div class="img-icon"><img src="../../assets/image/tabs/tab3.png" alt=""></div>
      <p class="text">我的</p>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: ['active'],
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>

</style>

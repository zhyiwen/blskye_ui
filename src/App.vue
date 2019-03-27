<template>
  <div id="app">
    <bl-nav></bl-nav>
    <div class="bl-content">
      <div class="page">
        <router-view/>
      </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import BlNav from '@/components/frame/BlNav.vue'

export default {
  components:{
    BlNav
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bl-content{
  padding-left: 250px;
  .page{
    background: #fff;
    padding: 10px;
  }
}
</style>

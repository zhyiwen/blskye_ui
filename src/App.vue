<template>
  <div id="app">
    <bl-nav></bl-nav>
    <div class="bl-content">
      <div class="page">
        <router-view/>
      </div>
    </div>
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
.bl-content{
  padding-left: 250px;
  .page{
    background: #fff;
    padding: 10px;
  }
}
</style>

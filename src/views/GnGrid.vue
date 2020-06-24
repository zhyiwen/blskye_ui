<template>
  <div>
    <div class="screen">当前屏幕宽度：<span>{{ screenWidth }}</span>px</div>
    <gn-row :num="12">
      <gn-col :xs="12" :sm="6" :md="3" :lg="1">
        <div class="demo">1</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1" :offsetsm="3">
        <div class="demo">2</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">3</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">4</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">5</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">6</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">7</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">8</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">9</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">10</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">11</div>
      </gn-col>
      <gn-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">12</div>
      </gn-col>
    </gn-row>
    <h3 class="title">排序</h3>
    <gn-row :gutter="10" :num="12">
      <gn-col :md="9" :pushmd="3"><div class="demo">前</div></gn-col>
      <gn-col :md="3" :pullmd="9"><div class="demo">后</div></gn-col>
    </gn-row>

    <div class="demo gn-visible-xs-block">超小屏幕可见</div>
    <div class="demo gn-visible-sm-inline">小屏幕可见</div>
    <div class="demo hidden-sm">小屏幕隐藏</div>
    <div class="demo hidden-lg">大屏幕隐藏</div>
  </div>
</template>

<script>
import GnRow from "@/components/grid/GnRow.vue";
import GnCol from "@/components/grid/GnCol.vue";
export default {
  data() {
    return {
      screenWidth: "",
    };
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
      })();
    };
  },
  components: {
    GnRow,
    GnCol,
  },
};
</script>

<style scoped lang="scss">
.demo {
  height: 35px;
  background: #3091f2;
  margin-bottom: 10px;
  border: 1px solid #544485;
  text-align: center;
  line-height: 35px;
  color: #fff;
  margin-left: -1px;
}
.screen{
  margin-bottom:20px;
  span{
    color: red;
  }
}
</style>

<template>
  <div>
    <div>当前屏幕宽度：{{ screenWidth }}</div>
    <vbl-row :num="12">
      <vbl-col :xs="12" :sm="6" :md="3" :lg="1">
        <div class="demo">1</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">2</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">3</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">4</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">5</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">6</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">7</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">8</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">9</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">10</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">11</div>
      </vbl-col>
      <vbl-col :xs="1" :sm="1" :md="1" :lg="1">
        <div class="demo">12</div>
      </vbl-col>
    </vbl-row>
  </div>
</template>

<script>
import vblRow from "@/components/VblRow.vue";
import vblCol from "@/components/VblCol.vue";
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
    vblRow,
    vblCol,
  },
};
</script>

<style scoped>
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
</style>

<template>
  <div>
    <vbl-row :gutter="30">
      <vbl-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="demo"></div>
      </vbl-col>
      <vbl-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="demo"></div>
      </vbl-col>
      <vbl-col :xs="8" :sm="8" :md="8" :lg="4">
        <div class="demo"></div>
      </vbl-col>
      <vbl-col :xs="16" :sm="4" :md="12" :lg="4">
        <div class="demo"></div>
      </vbl-col>
      <vbl-col :xs="24" :sm="12" :md="12" :lg="4">
        <div class="demo"></div>
      </vbl-col>
    </vbl-row>
    <vbl-row :num="10" :gutter="10">
      <vbl-col :xs="5" :sm="3" :md="2" :lg="1">
        <div class="demo"></div>
      </vbl-col>
      <vbl-col :xs="5" :sm="2" :md="2" :lg="4">
        <div class="demo"></div>
      </vbl-col>
      <vbl-col :xs="5" :sm="3" :md="2" :lg="1">
        <div class="demo"></div>
      </vbl-col>
      <vbl-col :xs="5" :sm="1" :md="2" :lg="2">
        <div class="demo"></div>
      </vbl-col>
      <vbl-col :xs="5" :sm="1" :md="2" :lg="2">
        <div class="demo"></div>
      </vbl-col>
    </vbl-row>
  </div>
</template>

<script>
import vblRow from "@/components/VblRow.vue";
import vblCol from "@/components/VblCol.vue";
export default {
  components:{
    vblRow,
    vblCol
  }
}
</script>

<style scoped>
.demo{
  height: 35px;
  background: #3091f2;
  margin-bottom: 10px;
  border: 1px solid #544485;
}
</style>
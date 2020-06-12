/** * @author zhyiwen * @date 2020/6/10 9:46 * @version 1.0 */

<template>
  <div class="vbl-row" :class="[
  'row-' + num,
  gutter ? 'row-gutter-' + gutter : ''
  ]">
    <slot></slot>
  </div>
</template>

<script>
import Bus from "@/utils/bus.js";
export default {
  name: "VblRow",
  props: {
    gutter: Number,
    num: {
      type: Number,
      default: 24,
    },
  },
  data() {
    return {
      saveGutter: this.gutter,
    };
  },
  computed: {
    styles() {
      let style = {};

      if (this.gutter !== 0) {
        style = {
          marginLeft: this.gutter / -2 + "px",
          marginRight: this.gutter / -2 + "px",
        };
      }

      return style;
    },
  },
  methods: {
    getGutter: function() {
      Bus.$emit("val", this.saveGutter);
    },
  },
  mounted(){
    this.getGutter();
  }
};
</script>

<style scoped></style>

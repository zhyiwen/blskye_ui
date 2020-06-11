/** * @author zhyiwen * @date 2020/6/10 9:46 * @version 1.0 */

<template>
  <div class="vbl-row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VblRow",
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    style() {
      return this.gutter && this.gutter > 0
        ? {
            "margin-left": "-" + this.gutter / 2 + "px",
            "margin-right": "-" + this.gutter / 2 + "px",
          }
        : {};
    },
  },
};
</script>

<style scoped></style>

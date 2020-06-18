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
export default {
  name: "VblRow",
  props: {
    gutter: Number,
    num: {
      type: Number,
      default: 24,
    },
  }
};
</script>

<style scoped></style>

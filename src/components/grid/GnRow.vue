/** * @author zhyiwen * @date 2020/6/10 9:46 * @version 1.0 */

<template>
  <div class="gn-row" :class="[
  'gn-row-' + num,
  gutter ? 'gn-row-gutter-' + gutter : ''
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "GnRow",
    props: {
        gutter: Number,
        num: {
            type: Number,
            default: 24
        }
    }
};
</script>

<style scoped></style>

/** * @author zhyiwen * @date 2020/6/10 10:55 * @version 1.0 */

<template>
  <div class="vbl-col" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VblCol",
  inject: {
    gutter: {
      type: Number,
      default: 0,
    },
  },
  props: {

  },
  computed: {
    
  },
};
</script>

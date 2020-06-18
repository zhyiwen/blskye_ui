/** * @author zhyiwen * @date 2020/6/10 10:55 * @version 1.0 */

<template>
  <div
    class="vbl-col"
    :class="[
      span ? 'col-' + span : '',
      xs ? 'col-xs-' + xs : '',
      sm ? 'col-sm-' + sm : '',
      md ? 'col-md-' + md : '',
      lg ? 'col-lg-' + lg : '',
      offset ? 'col-offset-' + offset : '',
      offsetxs ? 'col-offset-xs-' + offsetxs : '',
      offsetsm ? 'col-offset-sm-' + offsetsm : '',
      offsetmd ? 'col-offset-md-' + offsetmd : '',
      offsetlg ? 'col-offset-lg-' + offsetlg : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VblCol",
  props: {
    span: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    offset: Number,
    offsetxs: [Number, Object],
    offsetsm: [Number, Object],
    offsetmd: [Number, Object],
    offsetlg: [Number, Object],
  }
};
</script>

/** * @author zhyiwen * @date 2020/6/10 10:55 * @version 1.0 */

<template>
  <div
    class="gn-col"
    :class="[
      span ? 'gn-col-' + span : '',
      xs ? 'gn-col-xs-' + xs : '',
      sm ? 'gn-col-sm-' + sm : '',
      md ? 'gn-col-md-' + md : '',
      lg ? 'gn-col-lg-' + lg : '',
      offset ? 'gn-col-offset-' + offset : '',
      offsetxs ? 'gn-col-offset-xs-' + offsetxs : '',
      offsetsm ? 'gn-col-offset-sm-' + offsetsm : '',
      offsetmd ? 'gn-col-offset-md-' + offsetmd : '',
      offsetlg ? 'gn-col-offset-lg-' + offsetlg : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "GnCol",
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
        offsetlg: [Number, Object]

    }
};
</script>

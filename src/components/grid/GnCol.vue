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
      push ? 'gn-col-push-' + push : '',
      pushxs ? 'gn-col-push-xs-' + pushxs : '',
      pushsm ? 'gn-col-push-sm-' + pushsm : '',
      pushmd ? 'gn-col-push-md-' + pushmd : '',
      pushlg ? 'gn-col-push-lg-' + pushlg : '',
      pull ? 'gn-col-pull-' + pull : '',
      pullxs ? 'gn-col-pull-xs-' + pullxs : '',
      pullsm ? 'gn-col-pull-sm-' + pullsm : '',
      pullmd ? 'gn-col-pull-md-' + pullmd : '',
      pulllg ? 'gn-col-pull-lg-' + pulllg : '',
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
        offsetlg: [Number, Object],
        push: Number,
        pushxs: [Number, Object],
        pushsm: [Number, Object],
        pushmd: [Number, Object],
        pushlg: [Number, Object],
        pull: Number,
        pullxs: [Number, Object],
        pullsm: [Number, Object],
        pullmd: [Number, Object],
        pulllg: [Number, Object],

    }
};
</script>

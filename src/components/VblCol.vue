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
    ]"
    :style="styles"
  >
    <slot></slot>
  </div>
</template>

<script>
import Bus from "@/utils/bus.js";
export default {
  name: "VblCol",
  props: {
    span: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
  },
  data() {
    return {
      gutter: 0,
    };
  },
  mounted: function() {
    var vm = this;
    // 用$on事件来接收参数
    Bus.$on("val", (data) => {
      console.log(data);
      vm.gutter = data;
    });
  },
  computed: {
    styles() {
      let style = {};
      if (this.gutter !== 0) {
        style = {
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px",
        };
      }

      return style;
    },
  },
};
</script>

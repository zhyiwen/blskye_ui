import GnCol from "./GnCol";
import GnRow from "./GnRow";

// 为组件提供 install 安装方法，供按需引入

GnRow.install = function(Vue) {
    Vue.component(GnRow.name, GnRow);
};

GnCol.install = function(Vue) {
    Vue.component(GnCol.name, GnCol);
};

export default {
    GnCol,
    GnRow
};

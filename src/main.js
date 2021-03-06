import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "font-awesome/css/font-awesome.css";
import "../src/assets/css/awesome-bootstrap-checkbox.css";
import "../src/assets/css/normalize.css";
import "../src/scss/blskye.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

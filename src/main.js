import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(VueLazyLoad);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

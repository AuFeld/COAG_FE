import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/tailwind.css";
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

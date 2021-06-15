import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// import Alpine from 'alpinejs'
import "./assets/tailwind.css";

Vue.config.productionTip = false;
// Vue.use(Alpine.start())

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

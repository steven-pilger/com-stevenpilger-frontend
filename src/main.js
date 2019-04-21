import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";

Vue.config.productionTip = false;
document.title = "Hi there! 👋";

Vue.use(Buefy, {
  defaultIconPack: "fas"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

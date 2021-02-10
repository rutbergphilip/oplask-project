import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as api from "@/api";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,

  data() {
    return {
      searchInput: "",
      images: []
    };
  },

  methods: {
    async fetchData() {
      await api.searchFunction(this.searchInput);
    }
  },

  store,
  render: h => h(App)
}).$mount("#app");

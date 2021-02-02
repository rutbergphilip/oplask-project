import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as api from "@/api"

Vue.config.productionTip = false;

new Vue({
  router,
  data(){
    return {
      searchInput: ""
    }
  },
  methods: {
    async fetchData(){
      await api.searchFunction(this.searchInput)
    }
  },
  render: h => h(App)
}).$mount("#app");

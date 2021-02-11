import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    clearArr(state) {
      state.images = []
    },
    pushData(state, payload) {
      state.images.push(...payload)
    },
  },
  actions: {
    async fetchData(context, payload) {
      const data = await api.searchFunction(payload)

      context.commit('clearArr')
      context.commit('pushData', data.results)

      console.log(this.$store.state.images)
    }
  },
  modules: {
    
  }
});

<template>
  <div class="home">
    <input type="text" v-model="searchInput" /> |
    <button @click.prevent="callback">Click Me</button>
    <gallery
    v-bind:images="images"
    > </gallery>
    <cardtemplate/>
  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";
import * as api from "@/api"
import Cardtemplate from '../components/Cardtemplate.vue';
export default {
  name: "Home",
  data() {
    return {
      searchInput: ""
    };
  },
  components: {
    Gallery,
    Cardtemplate,
  },
  methods: {
   async callback() {
      this.$root.images = [];
      this.$root.searchInput = this.searchInput;
      // this.$root.fetchData();
      const data = await api.searchFunction(this.searchInput);
     this.$root.images.push(data.results);
    },
  },
  computed:{
   images(){
     return this.$root.images[0]
   }
  },
};
</script>

<style>
</style>

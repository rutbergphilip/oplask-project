<template>
  <div class="home">
    <input type="text" v-model="searchInput" /> |
    <button @click.prevent="callback">Click Me</button>

    <ul>
      <li v-for="(image, index) in images" :key="index">
        <gallery :Image="image" />
      </li>
    </ul>
  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";
import * as api from "@/api";
export default {
  name: "Home",
  data() {
    return {
      searchInput: ""
    };
  },
  components: {
    Gallery
  },
  methods: {
    async callback() {
      this.$root.images = [];
      this.$root.searchInput = this.searchInput;
      // this.$root.fetchData();
      const data = await api.searchFunction(this.searchInput);
      this.$root.images.push(data.results);
      console.log(this.$root.images);
    }
  },
  computed: {
    images() {
      return this.$root.images[0];
    }
  }
};
</script>

<style></style>

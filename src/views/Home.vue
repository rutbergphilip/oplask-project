<template>
  <div class="home">
    <input type="text" v-model="searchInput" /> |
    <button @click.prevent="callback">Click Me</button>

    <ul>
      <li v-for="(image, index) in images" :key="index">
        <gallery :image="image" />
      </li>
    </ul>
  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";
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
      this.$store.dispatch('fetchData', this.searchInput)
    }
  },
  computed: {
    images() {
      return this.$store.state.images;
    }
  }
};
</script>

<style></style>

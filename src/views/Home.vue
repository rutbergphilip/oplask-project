<template>
  <div class="home">
    <input type="text" v-model="searchInput" /> |
    <button @click.prevent="callback">Click Me</button>
<lightbox ref="callLightbox" :images="images"/>
    <ul>
      <li v-for="(image, index) in images" :key="index">
        <gallery @click.native="openLightbox(index)" :image="image" />
      </li>
    </ul>
    
    

  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";
import Lightbox from '../components/Lightbox.vue';
export default {
  name: "Home",
  data() {
    return {
      searchInput: ""
    };
  },
  components: {
    Gallery,
    Lightbox
  },
  methods: {
    async callback() {
      this.$store.dispatch('fetchData', this.searchInput)
    },
    openLightbox(index){
      this.$refs.callLightbox.index = index
      this.$refs.callLightbox.show = true
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

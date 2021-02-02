<template>
  <div class="home">
    <input type="text" v-model="searchInput"> | 
    <button @click.prevent="callback">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      searchInput: ""
    }
  },
  components: {
  },
  methods: {
    callback() {
      this.$root.searchInput = this.searchInput
      this.$root.fetchData()
    }
  },
};
</script>

<style>

</style>

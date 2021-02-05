<template>
  <div class="wrapper">
      <img v-bind:src="image.results.urls.small" alt="">

  </div>
</template>

<script>
export default {
props:{
    image: Object,

}
}
</script>

<style>

</style>
<template>

  <div class="wrapper">
    <img class="image" :src="Image.urls.small" />
  </div>
  
</template>

<script>
export default {
  props: {
    Image: Object
  }
}
</script>

<style>

.image {
  border-radius: 10px;
  padding: 5px;
  width: 450px;
  height: 260px;
  object-fit: cover;
  cursor: pointer;
}
.image:hover{
  transform: scale(1.1);
}
ul{
  padding-top: 4vh;
}
li {
  display: inline-block;
  width: calc(90% / 3);
}
</style>
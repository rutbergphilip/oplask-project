<template>
  <div class="wrapper">
  <div class="gallery">
      <ul>
          <li v-for="(image, index) in images" :key="index"></li>         
    </ul>



 


  </div>
  </div>
</template>

<script>
export default {
  props:{
    images:Array
  }
};
</script>

<style>
.gallery{
    margin: 100px;

    width: 600px;
    height: 600px;
    background-color: gray;
}
ul{
    list-style:none;
    display: flex;
    flex-wrap: wrap;
}
</style>
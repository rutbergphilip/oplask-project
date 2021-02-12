<template> 
<div v-if="show" class="box" >
    <button @click="close"> 
        close
    </button>
    <div class="img" >
        <img :src="images[index].urls.full"  alt="">
    </div>
</div>
</template>

<script>
export default {
    props: {
    images: Array
  },
    data(){
        return{
            show: false,
            index: 0
        }
    },
     methods:{
        close(){
      this.show = false
        }
     }
    
};
</script>

<style>
.box{
    display: flex;
    width: 100%;
    height: 100%;
    background-color:black;
    position: fixed;
    justify-content: center;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.7  );
    z-index: 500;
    top: 10;
}
img{
    object-fit: cover;
    width: 1000px;
    height: auto;
    border-radius: 10px;
    padding: 20px;
}

</style>

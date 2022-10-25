<template>
  <div>
    <img src="../assets/404_images/404.png" alt="PAGINA NÃO ENCONTRADA!!!">
    <img src="../assets/404_images/404_cloud.png" alt="PAGINA NÃO ENCONTRADA!!!">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

}

img:nth-child(1) {
  position: absolute;
  
}

img:nth-child(2) {
  position: relative;
  right: 140px;
  animation: error 0.7s cubic-bezier(0.6, 0.1, 1, 0.9) infinite alternate;
}

@keyframes error {
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,40px,0);

  }
}



</style>
<template>
    <div class="barra">
      <div>
        <span class="tituloHome">Github <span class="tituloSearch">Search</span></span>
      </div>
      <div class="containerInput">
        <input type="text" class="barraPesquisa">
        <button class="botaoPesquisa">Buscar</button>
      </div>
    </div>
</template>

<script>
export default {
  
  
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
  .barra {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.3);
  }
  .tituloHome, .tituloSearch {
    font-size: 3rem ;
  }

  .barraPesquisa{ 
    width: 400px;
    height: 40px;
  }

  .botaoPesquisa {
    padding: 12px 10px;
  } 
</style>
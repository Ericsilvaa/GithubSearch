<template>
  <header>
    <v-toolbar elevation="1" flat class="toolbar">
      
      <div class="container">
  
          <router-link class="logoHome" tag="div" to="/">
            <span class="tituloHome">Github <span class="tituloSearch">Search</span></span>
          </router-link>
  
          <div class="containerInput">
            <input type="text" class="barraPesquisa">
            <button class="botaoPesquisa"></button>
          </div>
  
      </div>
    </v-toolbar>

  </header>
</template>

<script scoped>
export default {
//   data() {
//     return {
//         nomeUsuario: '',
//         usuario: []
//     }
// },
// methods: {
//     buscarUsuario(){
//         this.$http(`${this.nomeUsuario}`)
//         .then(r => {
//             this.usuario = r.data
//             this.nomeUsuario = ''
//         })
        
//     }
// }
}
</script>

<style scoped>

.container {
    display:flex;
    align-items: center;
  }

  .logoHome {
    cursor: pointer;
  }
  
  .tituloHome, .tituloSearch {
    font-size: 2rem ;
    font-weight: 600;
  }

  .tituloSearch {
    font-weight: 400;
    font-style: italic;
  }

  .containerInput {
    display: flex;
  }

  .barraPesquisa{ 
    width: 250px;
    height: 30px;
    font-size: 1.075rem;
    font-weight: 500;
    font-style: italic;
    padding-left: 10px;
    border: solid 2px rgba(0, 0, 0, 0.7);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: none;
    cursor: text;
  }

  .botaoPesquisa {
    background: url(../../assets/search.svg) rgba(0, 0, 0, 0.7) no-repeat center;
    padding: 10px 20px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: none;
    color: #fff;
    cursor: pointer;
  } 
</style>
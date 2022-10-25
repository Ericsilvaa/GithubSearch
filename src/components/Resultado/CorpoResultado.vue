<template>
  <main>

    <section class="container">

      <div class="inicio" v-for="usuario in usuarios" :key="usuario.name">
        <div class="foto">
          <v-img 
            max-height="200" max-width="180" 
            :src="usuario.avatar_url" alt="Imagem do Usuario"></v-img>
            <div class="info-nome">
              <h4> {{usuario.name}} </h4>
              <span> {{usuario.login}} </span>
            </div>
        </div>

          <ul class="bar-1">
            <li>
              <img src="../../assets/icons/work.png" alt="work">
              <span>{{usuario.company}}</span>
            </li>
            <li>
              <img src="../../assets/icons/pin-de-localizacao.png" alt="Localização">
              <span>{{usuario.location}}</span>
            </li>
            <li>
              <img src="../../assets/icons/estrela.png" alt="estrela">
              <span>{{usuario.public_gists}}</span>
            </li>
            <li>
              <img src="../../assets/icons/seguidores.png" alt="seguidores">
              <span>{{usuario.followers}}</span>
            </li>
          </ul>
      </div>

      <div>

        <ul>
          <li v-for="repo in repos" :key="repo.id">
            <p>{{repo.name}}</p>
          </li>
        </ul>

      </div>

      <div class="fim"></div>

    </section>

  </main>

</template>

<script>

export default {
computed: {
   usuarios() {
      return this.$store.state.usuarios
    },    
    repos() {
      return this.$store.state.repos
    }
},

}
</script>

<style scoped>
.container {
  padding: 0px 16px;
}

.foto {
  margin-bottom: 10px;
}
.v-application ul {
  padding-left: 0px;
}

.bar-1 li {
  display: flex;
  align-items: center;
}

.bar-1 li img {
  margin-right: 6px;
  padding: 5px 0px;
}


</style>
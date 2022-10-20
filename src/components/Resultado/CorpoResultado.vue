<template>
  <main>

    <section class="containerCorpo">

      <div class="inicio" v-for="usuario in usuarios" :key="usuario.name">
        <div>
          <img class="imagem-perfil" :src="usuario.avatar_url" alt="Imagem do Usuario">
          <h4> {{usuario.name}} </h4>
          <span> {{usuario.login}} </span>
        </div>

        <ul>
          <li>
            <img src="" alt="">
            <span>{{usuario.company}}</span>
          </li>
          <li>
            <img src="" alt="">
            <span>{{usuario.location}}</span>
          </li>
          <li>
            <img src="" alt="">
            <span>{{usuario.public_gists}}</span>
          </li>
          <li>
            <img src="" alt="">
            <span>{{usuario.followers}}</span>
          </li>
        </ul>

      </div>

      <div class="meio">
        <ul>
          <li v-for="repo in repos" :key="repo.id">
            <p>{{repo[0].name}}</p>
            <p>{{repo[1].name}}</p>
            <p>{{repo[2].name}}</p>
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
.containerCorpo {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.imagem-perfil {
  width: 300px;
  height: 300px;
}
</style>
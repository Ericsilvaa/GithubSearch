<template>    

    <section class="container">
      <div v-if="(usuarios, repos)">
        <BarraResultado />
        <CorpoResultado />
      </div>

      
      <PaginaCarregando v-else/>
    </section>  

</template>

<script>
import BarraResultado from '@/components/Resultado/BarraResultado.vue'
import CorpoResultado from '@/components/Resultado/CorpoResultado.vue'

export default {
  components: {
    BarraResultado,
    CorpoResultado
  },
  computed: {
    usuarios() {
      return this.$store.state.usuarios
    },
    repos() {
      return this.$store.state.usuarios
    }
  }
}
</script>

<style>


</style>
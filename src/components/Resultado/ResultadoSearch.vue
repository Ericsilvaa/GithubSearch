<template>
  <section class="containerResultado">
    {{usuario.name}}
    <BarraResultado />
    <CorpoResultado />
  </section>
</template>

<script>
import BarraResultado from '@/components/Resultado/BarraResultado.vue'
import CorpoResultado from '@/components/Resultado/CorpoResultado.vue'

export default {
  props: {
  usuario: {
    type: Array
  }
},
  components: {
    BarraResultado,
    CorpoResultado

  }
}
</script>

<style>
  .containerResultado {
    margin: 0px 15px;
  }

</style>
<template>
  <main>

    <section class="containerCorpo">

      <div class="inicio">
        <div>
          <img src="" alt="">
          <h4>Nome de Alguem</h4>
          <span>Algum outro nome menor</span>
        </div>

        <ul>
          <li>
            <img src="" alt="">
            <span></span>
          </li>
          <li>
            <img src="" alt="">
            <span></span>
          </li>
          <li>
            <img src="" alt="">
            <span></span>
          </li>
          <li>
            <img src="" alt="">
            <span></span>
          </li>
        </ul>

      </div>

      <div class="meio"></div>

      <div class="fim"></div>

    </section>

  </main>

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

.containerCorpo {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

</style>
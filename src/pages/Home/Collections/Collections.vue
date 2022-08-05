<template>
  <section id="collections" class="divcol seccion parent">
    <aside class="contup divcol tcentermobile">
      <h2 class="h2-em">Collections</h2>
    </aside>

    <img class="align" :src="`${$store.state.baseURL}themes/${$store.state.theme}/collections.svg`" alt="Collections Image">
  </section>
</template>

<script>
export default {
  name: "Collections",
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style src="./Collections.scss" lang="scss" />

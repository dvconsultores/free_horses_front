<template>
  <v-app id="layout" :style="`background-image: url('${this.$store.state.baseURL}themes/${this.$store.state.theme}/bg.svg')`">
    <Header ref="header" />
    <v-main>
      <router-view></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import "./Layout.scss";

export default {
  name: "Layout",
  components: { Footer, Header },
}
</script>

<style src="./Layout.scss" lang="scss"></style>

<style scoped>
#layout {
  background: center no-repeat;
  background-size: cover;
}
</style>

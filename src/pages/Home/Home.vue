<template>
  <section id="home" class="divcol" style="overflow-x: hidden;">
    <Hero></Hero>
    <Backstory></Backstory>
    <!-- <FamilyTree></FamilyTree> -->
    <Join></Join>
    <Classes></Classes>
    <Collections></Collections>
    <Roadmap></Roadmap>
    <FAQ></FAQ>
  </section>
</template>

<script>
import Hero from './Hero/Hero.vue'
import Backstory from './Backstory/Backstory.vue'
// import FamilyTree from './FamilyTree/FamilyTree.vue'
import Classes from './Classes/Classes.vue'
import Collections from './Collections/Collections.vue'
import Roadmap from './Roadmap/Roadmap.vue'
import FAQ from './FAQ/FAQ.vue'
import Join from './Join/Join.vue'

export default {
  name: "Home",
  components: {
    Hero,
    Backstory,
    // FamilyTree,
    Classes,
    Collections,
    Roadmap,
    FAQ,
    Join
  },
  mounted() {
    this.$store.dispatch("ColorFooter", {key: 'color'})
  },
  data() {
    return {
    }
  },
};
</script>

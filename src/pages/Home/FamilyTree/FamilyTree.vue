<template>
  <section id="family-tree" class="divcol seccion">
    <div class="divcol tcentermobile">
      <h2 class="h2-em">Family Tree</h2>
      <p class="h8-em">God horse... 5 sections:</p>
    </div>

    <v-card color="transparent" class="spacea divwrapmobile">
      <aside v-for="(item, index) in dataFamilyTree" :key="index"
        class="divcol">
        <img :src="item.img" alt="God Horse Family Tree">
        <div class="divcol tcenter">
          <p class="h8-em p">{{ item.title }}</p>
          <p class="h8-em p">{{ item.desc }}</p>
        </div>
      </aside>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "FamilyTree",
  data() {
    return {
      dataFamilyTree: [
        {
          img: require("@/assets/img/horse-family-1.png"),
          title: "Fiendly horse",
          desc: "P2P"
        },
        {
          img: require("@/assets/img/horse-family-2.png"),
          title: "Bet ranch",
          desc: "Apuesta"
        },
        {
          img: require("@/assets/img/horse-family-3.png"),
          title: "Future horses",
          desc: "4myfuture"
        },
        {
          img: require("@/assets/img/horse-family-4.png"),
          title: "Magic Horses",
          desc: "Magic Metaverse"
        },
        {
          img: require("@/assets/img/horse-family-5.png"),
          title: "Apply",
          desc: "Form"
        },
      ]
    }
  },
  methods: {
  }
};
</script>

<style src="./FamilyTree.scss" lang="scss" />

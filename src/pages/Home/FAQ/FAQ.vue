<template>
  <section id="about-us" class="seccion divcol parent">
    <aside class="contup divcol tcentermobile gap order2">
      <p class="h7-em">
        “The essential joy of being with horses is that it brings us in contact 
        with the rare elements of grace, beauty, spirit, and freedom.”<br>
        — Sharon Ralls Lemon.
      </p>
    </aside>

    <aside class="contdownfaq order1">
      <div class="tcentermobile">
        <h2 class="h2-em">FAQ's</h2>
      </div>

      <v-expansion-panels focusable class="divcol">
        <v-expansion-panel v-for="(item, i) in dataFaq" :key="i">
          <!-- <v-expansion-panel-header hide-actions class="divrow"
            @click="changeArrow(item)" @mouseleave="changeArrowFocusOut(item)"> -->
          <v-expansion-panel-header hide-actions class="divrow">
            <img class="polygon" src="@/assets/icons/poligono.svg" alt="polygon image"
              :class="{rotate: item.active}">
            <span class="h7-em">{{ item.title }}</span>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <p class="h8-em">{{ item.desc }}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </aside>
  </section>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      dataFaq: [
        {
          title: "Can I be part of the Horses?",
          desc: "Yes, everyone can be part of the project. You can be part of the Free Horses Launchpad by buying one of the God Horses, and also you can be part of any project by buying the different collections such as Friendly Horses and enjoy the benefits each collection provides with our business partners.",
          // active: false
        },
        {
          title: "Which are the benefits of being part of a collection?",
          desc: "Every collection has different types of benefits. For example, the Free Horses are tickets for a white list spot on every collection we launch. God horses represent ownership of the launchpad DAO, and the Friendly Horses share 5% of all the NEAR P2P market profits in the DAO.",
          // active: false
        },
        {
          title: "Where can I check the next collections?",
          desc: "All scheduled collections are listed on the Free Horses website.",
          // active: false
        },
        {
          title: "Why do Free Horses have a cost, and why are they called free?",
          desc: "Each collection has different costs depending on the agreement we managed to arrange with each business partner. They are called the Free Horses because the main goal of this launchpad is to promote freedom inside the blockchain world.",
          // active: false
        },
        {
          title: "How can I get one of the horses?",
          desc: "You can get any of the Free Horses after the day launch on they minting page or check out for public sale on Paras.id",
          // active: false
        },
        {
          title: "I want to launch a collection for a project I have. How can I contact the Free Horses team?",
          desc: "First, you have to go to the Free Horses discord server and fill-up the form for project onboarding, and a representative of the team will contact you.",
          // active: false
        }
      ]
    }
  },
  methods: {
    // changeArrow(item) {
    //   item.active = !item.active;
    // },
    // changeArrowFocusOut(item) {
    //   if (item.active === true) {
    //     item.active = !item.active;
    //   }
    // },
  }
};
</script>

<style src="./FAQ.scss" lang="scss" />

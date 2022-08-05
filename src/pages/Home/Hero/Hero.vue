<template>
  <section id="hero" class="center divcolmobile parent">
    <div class="contimg">
      <img class="order2mobile" :src="`${$store.state.baseURL}themes/${$store.state.theme}/hero.svg`"
        alt="Hero Image">
    </div>

    <aside class="contright divcol">
      <h1 class="h1-em tcentermobile">GOD HORSES</h1>
      <p class="h7-em tcentermobile">
        Incubator and Launchpad for DeFi and Gaming Projects that foster 
        to gather a community of Free Horses.
      </p>
      <div class="divrow gap centermobile">
        <v-btn v-for="(item, index) in dataBotonesHero" :key="index" class="spacea" :href="item.to" :target="item.target"
          :rounded="item.rounded" :class="{roundedClass: item.rounded}" v-ripple="{ class: item.ripple }" @click="to(item)">
          <span class="h8-em">{{ item.title}}</span>
          <v-icon v-if="item.icon" color="#FFFFFF" class="notdefault-color">{{ item.icon }}</v-icon>
        </v-btn>
      </div>
    </aside>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      dataBotonesHero: [
        {
          key: "herd",
          to: "#herd",
          title: "BUY NOW",
          ripple: "activeRipple"
        },
        {
          to: "https://mobile.twitter.com/Freehorses_",
          title: "Twitter",
          icon:"mdi-twitter",
          rounded: true,
          target: "_blank",
        },
      ]
    }
  },
  methods: {
    to(item) {if (item.key == 'herd') {this.$router.push('/herd')}}
  }
};
</script>

<style src="./Hero.scss" lang="scss" />

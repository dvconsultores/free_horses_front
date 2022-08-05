<template>
  <v-card id="join" color="var(--clr-card-2)" class="acenter relative fill-w">
    <aside class="divcol">
      <h2 class="h2-em"><span>Join</span> the herd of horses that carries the weight of <span>freedom on their backs</span></h2>
      <v-btn class="h7-em" color="var(--clr-btn)" v-ripple="{ class: 'activeRipple' }"
        href="#herd" @click="$router.push('/herd')">
        MINT A FREE HORSE
      </v-btn>
    </aside>
    <img src="@/assets/img/join-img.svg" alt="Horse Background Image">
  </v-card>
</template>

<script>
export default {
  name: "Join",
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style src="./Join.scss" lang="scss" />

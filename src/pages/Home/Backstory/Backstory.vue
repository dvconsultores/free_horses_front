<template>
  <section class="divcol parent">
    <aside id="video" class="center relative">
      <!-- <div :class="{play:play}" />
      <video id="media" src="@/assets/videos/free-horses.mp4" controls
        @play="VideoPlay()" @pause="VideoPause()"></video> -->
      <video id="media" src="@/assets/videos/free-horses.mp4" controls></video>
    </aside>

    <aside id="backstory" class="space acenter seccion">
      <div class="divcol">
        <h2 class="h2-em">BACKSTORY</h2>
        <p class="h7-em">
          At the beginning of time, <a href="#">the 21 God Horses</a> created the horse world to test their powers. 
          They love their creation, but with time they saw that evil was taking away the freedom from 
          their horse herd. So, they start giving powers to all horses.
        </p>
        <v-btn class="spacea h8-em alignmobile" rounded href="https://discord.com/invite/Hs7amY4FGW" target="_blank">
          <span>JOIN THE HERD</span>
          <v-icon large>discord</v-icon>
        </v-btn>
      </div>

      <img class="horse" src="@/assets/img/backstory.svg" alt="Horse image">
    </aside>
  </section>
</template>

<script>
export default {
  name: "Backstrory",
  data() {
    return {
      // play: true,
    }
  },
  methods: {
    // VideoPlay() {
    //   this.play = false;
    // },
    // VideoPause() {
    //   this.play = true
    // }
  }
};
</script>

<style src="./Backstory.scss" lang="scss" />

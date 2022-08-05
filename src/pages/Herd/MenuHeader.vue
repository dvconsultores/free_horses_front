<template>
  <section id="menuHeader">
    <!-- drawer mobile -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      height="100%"
      temporary
      right
      :overlay-opacity="overlay_opacity"
      :overlay-color="overlay_color"
      color="var(--clr-btn)"
      style="z-index: 20"
      class="divpadd"
    >
      <div class="divrow fill-w">
        <a href="#" class="align" @click="$router.push('/')">
          <img class="logo" :src="`${$store.state.baseURL}themes/${$store.state.theme}/logo.svg`" alt="Logo">
        </a>
      </div>
      <!-- list 1 (without submenu)-->
      <v-list>
        <v-list-item
          v-for="(item, index) in dataDrawerA"
          :key="item.title"
          :href="item.link"
          :ripple="false"
          link
          @click="$router.push('/')"
        >
          <v-list-item-content>
            <div v-bind:key="index" class="center">
              <a class="h8-em">
                {{ item.title }}
              <!-- <span class="mask"><span class="notdefault-clr">{{ item.title }}</span></span>
              <span class="mask"><span class="notdefault-clr">{{ item.title }}</span></span> -->
              </a>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  name: "HeaderMenu",
  i18n: require("./i18n"),
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   this.OverlayMethod(theme);
  // },
  data() {
    return {
      overlay_opacity: "0.2",
      overlay_color: "orange",
      drawer: false,
      dataDrawerA: [
        {
          title: "Home",
          link: "#",
        },
        // {
        //   title: "About us",
        //   link: "#about-us",
        // },
        {
          title: "Backstory",
          link: "#backstory",
        },
        // {
        //   title: "Family tree",
        //   link: "#family-tree",
        // },
        {
          title: "Herds",
          link: "#classes",
        },
        // {
        //   title: "Wallet",
        //   link: "#wallet",
        // },
      ],
    };
  },
  methods: {
    // OverlayMethod(theme) {
    //   if (theme == "dark") {
    //     this.overlay_opacity = "0.5";
    //     this.overlay_color = "black"
    //   }
    //   if (theme == "light") {
    //     this.overlay_opacity = "0.2";
    //     this.overlay_color = "white"
    //   }
    // },
    ShowDrawer() {
      this.drawer = !this.drawer
    },
  },
};
</script>

<style src="@/components/Layout/Layout.scss" lang="scss"></style>

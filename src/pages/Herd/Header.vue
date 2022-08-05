<template>
  <section>
    <!-- desktop -->
    <v-app-bar
    id="headerApp"
    height="100px"
    fixed
  >
    <v-row>
      <v-col sm="11" class="space align paddbottomdel" style="display: flex">
        <aside class="contleft divrow acenter">
          <!-- toggle -->
          <v-btn class="toggle vermobile" width="2.8em" height="2.8em"
            @click.stop="ShowDrawer()">
            <v-icon size="clamp(1.5em, 2vw, 2em)">mdi-menu</v-icon>
          </v-btn>
          <!-- logo -->
          <a class="eliminarmobile" href="#" @click="$router.push('/')">
            <img class="logo" :class="{filter_inv: colorTextos}" :src="`${$store.state.baseURL}themes/${$store.state.theme}/logo.svg`" alt="Logo">
          </a>
        </aside>

        <v-col class="jend padd eliminarmobile" style="display: flex">
          <!-- content -->
          <v-col class="contmiddle end padd">
            <a v-for="(item, index) in dataHeader" :key="index" :href="item.link"
              class="h9-em openMenuCollections" :class="{colorText: colorTextos}"
                @click="$router.push('/')">
              {{ item.title }}
            </a>
          </v-col>
        </v-col>

        <aside class="contright center">
          <v-btn v-if="themeButton" icon @click="CambiarTheme('dark'), CambiarTheme2('dark')"
            class="themeButtonDark">
          </v-btn>
          <v-btn v-else icon @click="CambiarTheme('light'), CambiarTheme2('light')"
            class="themeButtonLight">
          </v-btn>
          <v-btn
            v-show="!sesion"
            class="walletButton
            h8-em"
            color="orange"
            rounded
            @click="signIn()"
          >
            Login
          </v-btn>
          <div
            v-show="sesion"
            class="text-center"
          >
            <v-menu offset-y transition="slide-x-transition">
              <template #activator="{ on, attrs }">
                <v-btn
                  class="walletButton
                  h8-em"
                  color="orange"
                  rounded
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ accountId }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="signOut()">
                  <v-list-item-title>Cerrar Sesión</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </aside>
      </v-col>
    </v-row>
  </v-app-bar>

  <MenuHeader ref="menu"></MenuHeader>
  </section>
</template>

<script>
import MenuHeader from "./MenuHeader.vue"
import * as nearAPI from "near-api-js";
import { CONFIG } from './../../services/api'
const { connect, keyStores, WalletConnection } = nearAPI
// let ubicacionPrincipal = window.pageYOffset;
let scrollValue =
document.body.scrollTop || document.documentElement.scrollTop;
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 80);
  }
}
export default {
  name: "Header",
  components: {
    MenuHeader
  },
  i18n: require("./i18n"),
  created() {
    this.element = document.getElementById("theme");
    const theme = localStorage.getItem("theme");
    if (theme) {
      this.CambiarTheme(theme);
    }
    if (theme == "light") {
      this.themeButton = true;
    }
    if (theme == "dark") {
      this.themeButton = false;
    }
  },
  data() {
    return {
      sesion: null,
      accountId: null,
      colorTextos: true,
      themeButton: true,
      activeWalletBtn: false,
      dataHeader: [
        {
          title: "Home",
          link: "#",
        },
        // {
        //   title: "About us",
        //   link: "#about-us"
        // },
        {
          title: "Backstory",
          link: "#backstory"
        },
        // {
        //   title: "Family tree",
        //   link: "/#family-tree"
        // },
        {
          title: "Herds",
          link: "#classes"
        }
      ]
    };
  },
  methods: {
    async signIn () {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()))
      const wallet = new WalletConnection(near)
      wallet.requestSignIn(
        'nftgodhorses.freehorses.near'
      )
    },
    async isSigned () {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()))
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        this.sesion = true
        const walletAccountId = wallet.getAccountId()
        this.accountId = walletAccountId
      }
    },
    async signOut () {
      // connect to NEAR
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()))
      // create wallet connection
      const wallet = new WalletConnection(near)
      wallet.signOut()
      this.sesion = false
      this.$router.go()
    },
    ShowDrawer() {
      this.$refs.menu.ShowDrawer();
    },
    CambiarTheme(theme) {
      this.$store.dispatch("CambiarTheme", { theme, element: this.element });
      this.themeButton = !this.themeButton;
    },
    CambiarTheme2(theme) {
      this.$refs.menu.OverlayMethod(theme);
    },
    OcultarHeader() {
      let Desplazamiento_Actual = window.pageYOffset;
      if (Desplazamiento_Actual > scrollValue) {
        document.getElementById("headerApp").style.background = "var(--bg)";
        this.colorTextos = false
      } else {
        document.getElementById("headerApp").style.background = "transparent";
        this.colorTextos = true
      }
    },
    scrollListener() {
      resizeThrottler(this.OcultarHeader);
    }
  },
  mounted() {
    this.isSigned()
    document.getElementById("headerApp").style.background = "transparent";
    document.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener);
  }
};
</script>

<style src="@/components/Layout/Layout.scss" lang="scss"></style>
<style scoped>
.colorText {
  color: #FFFFFF !important;
}
</style>
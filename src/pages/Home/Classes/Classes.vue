<template>
  <section id="classes" class="divcol seccion tcentermobile parent">
    <h2 id="god-horse" class="h2-em">God Horses</h2>
    <p class="h7-em">
      God Horses, the first Free Horses are Legendary. They are the 
      owners of their creation, the horse world. They can appear and use all 
      their lands and resources at will. Omniscient and omnipotent. There are only 
      21 God Horses that receive tribute from all the horse projects looking for an 
      NFT Launchpad.
    </p>

    <section class="contcollage">
      <template v-if="dataGod">
        <aside v-for="(item, index) in gods.slice(0, 9)" :key="index"
          class="divcol tcenter gap">
          <img class="align" :src="item.metadata.media" alt="NFT image">
          <div class="divcol align" style="width: max-content">
            <h3 class="h7-em">{{ item.metadata.title }}</h3>
          </div>
        </aside>
      </template>

      <template v-else>
        <aside v-for="(item, index) in gods.slice(0)" :key="index"
          class="divcol tcenter gap">
          <img class="align" :src="item.metadata.media" alt="NFT image">
          <div class="divcol align" style="width: max-content">
            <h3 class="h7-em">{{ item.metadata.title }}</h3>
          </div>
        </aside>
      </template>
    </section>

    <section class="contmorebtn">
      <v-btn v-if="dataGod" class="tcenter" v-ripple="{ class: 'activeRipple' }" @click="MoreLess('god', 'more')">
        <span class="h7-em colorInverted">More +</span>
      </v-btn>
      <v-btn v-else class="tcenter" v-ripple="{ class: 'activeRipple' }" @click="MoreLess('god', 'less')" href="#god-horse">
        <span class="h7-em colorInverted">Less -</span>
      </v-btn>
    </section>
    
    <h2 id="free-horse" class="h2-em">Free Horses</h2>
    <p class="h7-em">
      Free Horses are the first herd created by the God Horses, a 
      herd of 300 horses with the power to liberate other horses. They 
      have a big responsibility and also the privilege to participate first 
      in any horse gathering. Horses: Leader, Commander, 
      Sergeant, and Regular. It is important to mention that the Leader of the Free Horses 
      is a demigod with additional powers.
    </p>

    <section class="contcollage">
      <template v-if="dataFree">
        <aside v-for="(item, index) in dataFreeHorses.slice(0, 3)" :key="index"
          class="divcol tcenter gap">
          <img class="align" :src="item.url" alt="NFT image">
          <div class="divcol align" style="width: max-content">
            <h3 class="h7-em">{{ item.titulo }}</h3>
            <a class="h8-em" :href="item.url_paras" target="_blank">
              {{ item.text_paras }}
            </a>
          </div>
        </aside>
      </template>

      <template v-else>
        <aside v-for="(item, index) in dataFreeHorses.slice(0)" :key="index"
          class="divcol tcenter gap">
          <img class="align" :src="item.url" alt="NFT image">
          <div class="divcol align" style="width: max-content">
            <h3 class="h7-em">{{ item.titulo }}</h3>
            <a class="h8-em" :href="item.url_paras" target="_blank">
              {{ item.text_paras }}
            </a>
          </div>
        </aside>
      </template>
    </section>

    <!-- <section class="contmorebtn">
      <v-btn v-if="dataFree" class="tcenter" v-ripple="{ class: 'activeRipple' }" @click="MoreLess('free', 'more')">
        <span class="h7-em colorInverted">More +</span>
      </v-btn>
      <v-btn v-else class="tcenter" v-ripple="{ class: 'activeRipple' }" @click="MoreLess('free', 'less')" href="#free-horse">
        <span class="h7-em colorInverted">Less -</span>
      </v-btn>
    </section> -->
  </section>
</template>

<script>
import axios from "axios";
import * as nearAPI from "near-api-js";
import { CONFIG } from './../../../services/api'
const { connect, keyStores, WalletConnection, Contract } = nearAPI
export default {
  name: "Classes",
  data() {
    return {
      dataGod: true,
      dataGodHorses: [],
      dataFree: true,
      dataFreeHorses: [],
      gods: []
    }
  },
  mounted() {
    this.fetch()
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const CONTRACT_NAME = 'nftgodhorses.freehorses.near'
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      )
      // create wallet connection
      const wallet = new WalletConnection(near)
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        viewMethods: ['get_nft_series_list']
      })
      await contract.get_nft_series_list({
      }).then((res) => {
        this.gods = res
        console.log(this.gods)
      })
    },
    fetch() {
      axios.get('https://freehorses.io:85/god-horse/god-horses/').then((response) => {
        this.dataGodHorses = response.data
      })
      axios.get('https://freehorses.io:85/free-horse/free-horses/').then((response) => {
        this.dataFreeHorses = response.data
      })
    },
    MoreLess(item, key) {
      if (item == "god" && key == 'more') {
        this.dataGod = false;
      } if (item == "god" && key == 'less') {
        this.dataGod = true;
      }
      if (item == "free" && key == 'more') {
        this.dataFree = false;
      } if (item == "free" && key == 'less') {
        this.dataFree = true;
      }
    },
  }
};
</script>

<style src="./Classes.scss" lang="scss" />

<template>
  <v-app id="layout" :class="{bg_herd: !$store.state.stateFooter}">
    <Header />
    <v-main class="mix">
      <section id="herd" class="divcol parent">
        <aside class="headerHerd center">
          <img src="@/assets/img/background-header.png" alt="background header">
          <div class="tcenter center divcol">
            <h1 class="h1-em">Welcome to the Herd</h1>
            <p class="h7-em">
              At the beginning of time, the 21 God Horses created the horse world to test their powers. 
              They love their creation. But over time, they saw that evil was taking away the freedom of the herd of horses
            </p>
            <!-- 
              <v-btn v-if="!sesion" class="h7-em" color="#F37E01" v-ripple="{ class: 'activeRipple' }" @click="signIn">
                <span style="color: #FFFFFF !important"> Near login</span>
              </v-btn>
              <v-btn v-else class="h7-em" color="#F37E01" v-ripple="{ class: 'activeRipple' }" @click="buyNft">
                <span style="color: #FFFFFF !important"> MINT A GOD</span>
              </v-btn>
            -->
          </div>
        </aside>

        <!-- horses description -->
        <section class="contDescription divcol">
          <v-card v-for="(item,i) in dataDescription" :key="i"
            color="transparent" style="display:grid">
            <img :src="item.img" alt="God Horses image">

            <aside class="divcol">
              <div class="acenter divwrap" style="gap:clamp(1em, 2vw, 2em)">
                <v-btn v-show="item.key=='god'" class="h8-em" color="#F37E01" v-ripple="{ class: 'activeRipple' }" href="https://paras.id/collection/nftgodhorses.freehorses.near"
                  target="_blank">
                  BUY IN PARAS.ID
                </v-btn>

                <v-btn v-show="item.key =='free' && sesion " class="h8-em" color="#F37E01" v-ripple="{ class: 'activeRipple' }" @click="buyNft(item.key)">
                  MINT
                </v-btn>

                 <v-btn v-show="item.key =='free' && !sesion " class="h8-em" color="#F37E01" v-ripple="{ class: 'activeRipple' }" @click="signIn()">
                  LOGIN
                </v-btn>

                <v-btn v-show="item.key!=='god' && item.key!=='free'" class="h8-em" color="#F37E01" v-ripple="{ class: 'activeRipple' }" @click="buyNft(item.key)">
                  COMMING SOON<br v-if="item.key=='free'">
                  <span v-if="item.key=='free'" class="h10-em" style="display:contents">06/07/2022</span>
                </v-btn>

                <!-- <v-btn v-if="sesion && item.key!=='god'" class="h8-em" color="#F37E01" v-ripple="{ class: 'activeRipple' }" @click="buyNft(item.key)">
                  MINT A GOD HORSE
                </v-btn>
                <v-btn v-else v-show="item.key!='god'" class="h8-em" color="#F37E01" v-ripple="{ class: 'activeRipple' }" @click="signIn">
                  LOGIN
                </v-btn> -->
                <span class="h9-em amount">{{amountAvalible(item.key)}}/{{item.amount}}</span>
              </div>

              <!-- <div class="acenter" style="gap: .5em">
                <img class="logoNear" src="@/assets/logos/near-token.svg" alt="near">
                <span class="h8-em price bold">{{item.price}}</span>
              </div> -->

              <div class="h8-em" v-html="item.text"></div>
            </aside>
          </v-card>
        </section>

        <!-- purshed card -->
        <aside class="contMiddle  seccion">
          <v-card v-for="(item,i) in myfrees" :key="i" class="divcol"
            color="transparent" style="display:flex">
            <h4 class="h4-em bold tcenter">#{{+i + 1}}</h4>
            <aside class="divcol">
              <img class="align" :src="item.metadata.media" :alt="item.metadata.description">
              <div class="divcol align" style="width: max-content">
                <span class="h7-em">{{ item.metadata.title }}</span>
                <a class="h8-em" :href="item.url_paras" target="_blank">
                  {{ item.text_paras }}
                </a>
              </div>
            </aside>
          </v-card>

          <!-- empty card -->
          <v-card class="divcol"
            color="transparent" style="display:flex">
            <h4 class="h4-em bold tcenter">#{{ myfrees.length+1}}</h4>
            <aside class="empty align center fill-h">
              <img src="@/assets/icons/plus-orange.svg" alt="plus icon">
            </aside>
          </v-card>
        </aside>
        <v-snackbar
          v-model="snackbar"
          :timeout="timeout"
          :color="snackbar_color"
        >
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="blue"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>

        <aside class="contBottom start seccion divwrapmobile centermobile">
          <div class="divcol centermobile tcentermobile">
            <h2 class="h2-em">Interested in knowing more <span>about us?</span></h2>
            <span class="h7-em">Check our social network.</span>
            <div class="divrow gap">
              <a href="https://discord.com/invite/Hs7amY4FGW" target="_blank">
                <v-icon>discord</v-icon>
              </a>
              <a href="https://twitter.com/freehorses_" target="_blank">
                <v-icon>mdi-twitter</v-icon>
              </a>
            </div>
          </div>

          <!-- <img class="heroImg" :src="`${$store.state.baseURL}themes/${$store.state.theme}/hero.svg`"
            alt="Hero Image"> -->
        </aside>
      </section>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import * as nearAPI from "near-api-js";
import { CONFIG } from './../../services/api'
const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI
import Header from "./Header";
import Footer from "./Footer";
import "@/components/Layout/Layout.scss";
export default {
  name: "Herd",
  components: { Footer, Header },
  data() {
    return {
      dataDescription: [
        {
          key: "god",
          img: require("@/assets/nfts/god-horses-1.svg"),
          amount: "21",
          price: "4000",
          text: "<p>There are only 21 God horses, that receive tribute from all the horse projects looking for an NFT Launchpad. These 21 horses have the ownership of the  Free Horses Launchpad enterprise and grant voting power on the Free Horses DAO plus of course, the revenues.</p>",
        },
        {
          key: "free",
          img: require("@/assets/nfts/free-horses-4.svg"),
          amount: "300",
          price: "1",
          text: "<p>289 Regular (GREEN)<br>7 Sergeant (YELLOW)<br>3 Commander (BLUE)<br>1 Leader (RED)</p><p>Utility provided by each:</p><p>Regular - WL Spot (all Free Horses Collections)<br>Sergeant - WL Spot (all Free Horses Collections) + DAO voting<br>Commander - WL Spot (all Free Horses Collections) + DAO voting + all the benefits from all the collections<br>Leader - WL Spot (all Free Horses Collections) + DAO voting + All the benefits from all the collections + 1/2 God Horse earnings</p>",
        },
        {
          key: "friendly",
          img: require("@/assets/nfts/friendly-horses-1.svg"),
          amount: "3333",
          price: "1",
          text: "<p>This NFT collection grants %5 ownership of the NEAR P2P DAO revenues distributed among all the collection holders.</p>",
        }
      ],
      amountgods: 21,
      amountfrees:0,
      gods: [],
      mygods: [],
      frees: [],
      myfrees: [],
      snackbar: false,
      snackbar_color: "",
      sesion: false,
      text: 'buy successfully.',
      timeout: 5000,
      dataMint: [
        {
          url: require("@/assets/nfts/free-horses-1.svg"),
          titulo: "Sergeant",
          text_paras: "paras.id",
          url_paras: "paras.id",
        },
      ],
    }
  },
  mounted() {
    this.fetchData()
    this.fetchDataFrees()
    this.isSigned()
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("errorCode") !== null) {
      this.snackbar = true
      this.text = 'You failed to mint a GOD!'
      this.snackbar_color = 'red accent-2'
      history.replaceState(null, location.href.split("?")[0], '/#/herd')
      //window.history.pushState({});
    }
    if (urlParams.get("transactionHashes") !== null) {
      this.snackbar = true
      this.text = 'https://explorer.near.org/transactions/' + urlParams.get("transactionHashes")
      this.snackbar_color = 'success'
      history.replaceState(
        null,
        location.href.split("?")[0],
        "/#/herd"
      );
    }
    //if(this.$route.query.transactionHashes){
    //  this.snackbar = true
    //  this.text = 'You successfully minted a GOD!'
    //  this.snackbar_color = 'success'
   // }
    //else if (this.$route.query.errorMessage){
    
    //}
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
        viewMethods: ['get_nft_series_list'],
        sender: wallet.account()
      })
      await contract.get_nft_series_list({
        account_id: wallet.getAccountId()
      }).then((res) => {
        this.gods = res.filter(god => god.is_mintable == true)
        this.amountgods = this.gods.length
      })
    },
    async fetchDataFrees () {
      this.amountfrees = 0
      const CONTRACT_NAME = 'freehorsesspartans.freehorses.near'
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      )
      // create wallet connection
      const wallet = new WalletConnection(near)
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        viewMethods: ['get_nft_series_list','get_nft_series_copies_availables'],
        sender: wallet.account()
      })
      await contract.get_nft_series_list({
        account_id: wallet.getAccountId()
      }).then((res) => {
        this.frees = res.filter(free => free.is_mintable == true)
        this.frees.forEach((value) => {
          this.fechtQuantity(value.token_series_id)
        })
      })
    },
    async fechtQuantity (token_serie) {
      const CONTRACT_NAME = 'freehorsesspartans.freehorses.near'
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      )
      // create wallet connection
      const wallet = new WalletConnection(near)
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        viewMethods: ['get_nft_series_copies_availables'],
        sender: wallet.account()
      })
      await contract.get_nft_series_copies_availables({
        token_series_id:token_serie
      }).then((res) => {
        console.log(res)
        this.amountfrees = this.amountfrees + res
      })
    },
    async signIn () {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()))
      const wallet = new WalletConnection(near)
      wallet.requestSignIn(
        'freehorsesspartans.freehorses.near'
      )
    },
    async isSigned () {
      // connect to NEAR
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()))
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        this.sesion = true
        this.fetchMyGods()
        this.fetchMyFrees()
      }
    },
    TokenPrice (price) {
      return utils.format.formatNearAmount(price.toLocaleString('fullwide', { useGrouping: false }))
    },
    formatPrice (price) {
      return utils.format.formatNearAmount(price.toLocaleString('fullwide', { useGrouping: false }))
    },
    async buyNft(key) {
      if(key === 'god'){
        const item = this.gods[Math.floor(Math.random()*this.gods.length)];
        console.log(this.formatPrice(item.price))
        const CONTRACT_NAME = 'nftgodhorses.freehorses.near'
        // connect to NEAR
        const near = await connect(
          CONFIG(new keyStores.BrowserLocalStorageKeyStore())
        )
        
        const wallet = new WalletConnection(near)
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          changeMethods: ['nft_buy'],
          sender: wallet.account()
        })
        await contract.nft_buy({
        token_series_id: item.token_series_id,
        receiver_id: wallet.getAccountId()
        }, '40000000000000',
        utils.format.parseNearAmount((this.formatPrice(item.price)).toString()))
      }
      else if(key === 'free'){
        const item = this.frees[Math.floor(Math.random()*this.frees.length)];
        const CONTRACT_NAME = 'freehorsesspartans.freehorses.near'
        // connect to NEAR
        const near = await connect(
          CONFIG(new keyStores.BrowserLocalStorageKeyStore())
        )
        
        const wallet = new WalletConnection(near)
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          changeMethods: ['nft_buy'],
          sender: wallet.account()
        })
        await contract.nft_buy({
        token_series_id: item.token_series_id,
        receiver_id: wallet.getAccountId()
        }, '40000000000000',
        utils.format.parseNearAmount((this.formatPrice(item.price+20000000000000000000000)).toString()))
      }
      else{
        this.snackbar = true
        this.text = 'Comming soon'
        this.snackbar_color="#F37E01"
      }
    },
    async fetchMyGods () {
      const CONTRACT_NAME = 'nftgodhorses.freehorses.near'
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      )
      // create wallet connection
      const wallet = new WalletConnection(near)
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        viewMethods: ['nft_tokens_for_owner'],
        sender: wallet.account()
      })
      await contract.nft_tokens_for_owner({
        account_id: wallet.getAccountId()
      }).then((res) => {
        this.mygods = res
      })
    },
    async fetchMyFrees () {
      const CONTRACT_NAME = 'freehorsesspartans.freehorses.near'
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      )
      // create wallet connection
      const wallet = new WalletConnection(near)
      const contract = new Contract(wallet.account(), CONTRACT_NAME, {
        viewMethods: ['nft_tokens_for_owner'],
        sender: wallet.account()
      })
      await contract.nft_tokens_for_owner({
        account_id: wallet.getAccountId()
      }).then((res) => {
        this.myfrees = res
        console.log(this.myfrees)
      })
    },
    amountAvalible (key) {
      if(key === 'god') {
        return this.amountgods
      }
      else if(key === 'free'){
        return this.amountfrees
      }
      else if(key === 'friendly'){
        return '3333'
      }
      else  {
        return '0'
      }
    }
  },
}
</script>

<style src="./Herd.scss" lang="scss"></style>

<style scoped>
#layout {
  background: center no-repeat url('../../assets/img/bg-herd.png');
  background-color: #FFFFFF !important;
  background-size: cover;
}
</style>

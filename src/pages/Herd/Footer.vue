<template>
  <v-footer id="footer" color="transparent" absolute class="divcol gapmobile footerHerd" padless>
    <v-row no-gutters class="space align relative fill-w parent">
      <!-- content -->
      <aside class="contleft divcol">
        <img class="logoFooter" style="filter: invert(100%) !important" src="@/assets/logos/near.svg" alt="Near Logo">
        <div class="divcol">
          <span class="h8-em" style="color:#555555 !important">Copyright &copy; 2022 Free Horses.</span>
          <span class="h8-em" style="color:#555555 !important">All rights reserved</span>
        </div>
        <div class="conticons spacee">
          <v-btn v-for="(item, index) in dataIconos" v-bind:key="index"
          :href="item.link" target="_blank" icon class="notdefault-hover"
          style="background-color: hsl(0 0% 0% / 0.11)">
            <v-icon medium class="notdefault-clr" color="#555555">{{ item.icon }}</v-icon>
          </v-btn>
        </div>
      </aside>

      <aside class="contright divwrap centermobile">
        <div class="divcol" v-for="(item, index) in dataFooter" :key="index">
          <span class="h7-em colorFooter bold" style="color:#555555 !important">
            {{ item.title }}
          </span>

          <template v-for="(item2, index) in item.footerLink">
            <a :key="index" v-if="item2.link" class="h8-em" style="color:#555555 !important"
              :href="item2.to" @click="to(item2)">
              {{ item2.link }}
              <!-- <span class="mask"><span class="notdefault-clr">{{ item2.link }}</span></span>
              <span class="mask"><span class="notdefault-clr">{{ item2.link }}</span></span> -->
            </a>
          </template>

          <v-text-field
            v-if="item.email"
            v-model="item.value"
            :rules="[rules.email]"
            solo
          >
          <template v-slot:label>
            <label class="h8-em" style="color:#555555 !important">Your email address</label>
          </template>

          <template v-slot:append>
            <v-btn icon @click="SendEmail()">
              <img style="filter: invert(100%)" src="@/assets/icons/send.svg" alt="Send button">
            </v-btn>
          </template>
          </v-text-field>
        </div>
      </aside>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      dataIconos: [
        // {
        //   icon: require("@/assets/icons/instagram.png"),
        //   link: "https://www.instagram.com"
        // },
        // {
        //   icon: require("@/assets/icons/balon.png"),
        //   link: "#"
        // },
        {
          icon: "discord",
          link: "https://discord.com/invite/Hs7amY4FGW",
        },
        {
          icon: "mdi-twitter",
          link: "https://mobile.twitter.com/Freehorses_"
        },
        // {
        //   icon: require("@/assets/icons/youtube.png"),
        //   link: "https://www.youtube.com"
        // },
      ],
      dataFooter : [
        {
          title: "Support",
          footerLink: [
            {
              key: "privacy",
              link: "Privacy policy",
              to: "#privacyPolicy"
            },
          ]
        },
        // {
        //   title: "Stay up to date",
        //   email: true,
        //   value: ""
        // }
      ],
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      }
    }
  },
  methods: {
    SendEmail() {
      alert('send')
    },
    to(item) {if (item.key == 'privacy') {this.$router.push('/privacy-policy')}}
  }
}
</script>

<style src="@/components/Layout/Layout.scss" lang="scss" />

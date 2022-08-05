<template>
  <section id="roadmap" class="divcol seccion parent">
    <aside class="divcol center tcenter">
      <h2 class="h2-em p" style="line-height:.8 !important">Roadmap</h2>
      <p class="h7-em">Future Vision</p>
    </aside>

    <aside class="contdown">
      <div class="arrow" />
      <section v-for="(item,i) in dataRoadMap" :Key="i" class="divcol">
        <h3 class="p">{{item.title}}</h3>

        <ul>
          <li v-for="(item2,i2) in item.ul" :key="i2" :style="`--numeration: '${i2+1}. '`" v-html="item2.text" />
        </ul>
      </section>
    </aside>

    <!-- <aside class="contdown">
      <section v-for="(item,i) in dataRoadMap" :Key="i">
        <v-card :style="`--date: '${item.date}'`">
          <h3 class="p">Q{{i+1}}</h3>

          <div>
            <h4>{{item.title}}</h4>
            <ul>
              <li v-for="(item2,i) in item.ul" :key="i">{{item2.text}}</li>
            </ul>
          </div>
        </v-card>
      </section>
    </aside> -->
  </section>
</template>

<script>
export default {
  name: "Roadmap",
  data() {
    return {
      dataRoadMap: [
        {
          title: "Phase 1: Creation",
          ul: [
            { text: 'Launch <a target="_blank" href="https://twitter.com/Freehorses_">Twitter: https://twitter.com/Freehorses_</a> and Discord server: <a class="not_a" target="_blank" href="https://discord.gg/MgvyRDsR">https://discord.gg/MgvyRDsR</a> to build up community' },
            { text: 'Website creation: <a href="https://freehorses.io/#/">https://freehorses.io/#/</a>' },
            { text: 'DAO creation <a target="_blank" href="https://app.astrodao.com/dao/free-horses.sputnik-dao.near">https://app.astrodao.com/dao/free-horses.sputnik-dao.near</a>' },
            { text: 'Free Horses NFT distribution for OG' },
          ]
        },
        {
          title: "Phase 2: Distribution",
          ul: [
            { text: 'Marketing, collaborations' },
            { text: 'Distribution of the God Horses for all partners' },
            { text: 'First Mint (Free Horses) July 6, 2022 5 PM UTC' },
            { text: 'Addition to the DAO of the new participants the high command Free Horses' },
            { text: 'Listing on Paras' },
            { text: 'Beginning of Free Horses strategies to decentralize the world, distribution of task' },
          ]
        },
        {
          title: "Phase 3: Battle",
          ul: [
            { text: 'Royalties distribution for Free Horses DAO, payment of best community participants' },
            { text: 'Fixed Battle Station Assignment' },
            { text: 'Recognition by social media of the main contributors' },
          ]
        },
        {
          title: "Phase 4: Seed creation",
          ul: [
            { text: 'Near P2P DAO establishment' },
            { text: 'Friendly Horses mint ' },
            { text: 'Listing on Paras' },
            { text: 'Distribution of funds to maintain the work to the Free Horses DAO' },
            { text: 'Distribution of funds to create the next collection needed to decentralize the world' },
            { text: 'Release of Roadmap 2.0' },
          ]
        },
      ]
    }
  },
  methods: {
  }
};
</script>

<style src="./Roadmap.scss" lang="scss" />

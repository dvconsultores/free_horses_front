import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import axios from "axios";
import {i18n} from '@/plugins/i18n'
import VueApexCharts from 'vue-apexcharts'
import router from './Routes'
import store from './store/index'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
global.Buffer = global.Buffer || require("buffer").Buffer;

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.use(axios);

Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App), store
}).$mount('#app')

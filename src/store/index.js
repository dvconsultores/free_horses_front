import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  namespace: true,
  state: {
    baseURL: process.env.BASE_URL,
    theme: "light",
    colorFooter: "var(--bg)",
    stateFooter: true,
    colorTexto: "#555555",
    colorBtnIcons: "hsl(0 0% 0% / 0.11)",
    colorIcons: "#555555",
    colorFiltro: "100",
  },
  mutations: {
    CambiarTheme(state, theme) {
      state.theme = theme
    },
    ColorFooter(state, key) {
      if (key == 'transparent') {
        state.colorFooter = "transparent";
        state.stateFooter = false;
        state.colorTexto = null;
        state.colorBtnIcons = null;
        state.colorIcons = null;
        state.colorFiltro = null;
      }
      if (key == 'color') {
        state.colorFooter = "var(--bg)";
        state.stateFooter = true;
        state.colorTexto = "#555555";
        state.colorBtnIcons = "hsl(0 0% 0% / 0.11)";
        state.colorIcons = "#555555";
        state.colorFiltro = "100";
      }
    }
  },
  actions: {
    CambiarTheme({state, commit}, {theme, element}) {
      element.href = `${state.baseURL}themes/${theme}/theme.css`;
      localStorage.setItem("theme", theme);
      commit( "CambiarTheme", theme)
    },
    ColorFooter({commit}, {key}) {

      commit( "ColorFooter", key )
    },
  },
});

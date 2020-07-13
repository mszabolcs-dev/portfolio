import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  state: {
    drawerStatus: false
  },
  mutations: {
    setDrawerStatus (state, status) {
      console.log(status)
      state.drawerStatus = status
    }
  },
  actions: {
    setDrawerStatus ({commit}, status) {
      console.log(status)
      commit('setDrawerStatus', status)
    }
  },
  modules: {
  }
})

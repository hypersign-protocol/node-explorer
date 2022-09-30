import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import identityData from './Identity-data'
import schemas from './schemas'
import chains from './chains'
import verifiableCred from './verifiable-cred'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    chains,
    identityData,
    schemas,
    verifiableCred,
  },
  mutations: chains.mutations,
  strict: process.env.DEV,
})

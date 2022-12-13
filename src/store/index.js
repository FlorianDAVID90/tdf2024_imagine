import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import EtapeService from '../services/etape.service'
import TeamService from '../services/team.service'

export default new Vuex.Store({
  // state = les données centralisées
  state: () => ({
    etapes: [],
    equipes: []
  }),
  // mutations = fonctions synchrones pour mettre à jour le state (!!! interdit de modifier directement le state)
  mutations: {
    updateEtapes(state, etapes) {
      state.etapes = etapes
    },
    updateTeams(state, teams) {
      state.equipes = teams
    }
  },
  // actions = fonctions asynchrone pour mettre à jour le state, en faisant appel aux mutations, via la fonction commit()
  actions: {
    async getAllEtapes({commit}) {
      console.log('récupération des étapes');
      let response = await EtapeService.getAllEtapes()
      if (response.error === 0) {
        commit('updateEtapes', response.data)
      } else {
        console.log(response.data)
      }
    },
    async getAllTeams({commit}) {
      console.log('récupération des équipes');
      let response = await TeamService.getAllTeams()
      if (response.error === 0) {
        commit('updateTeams', response.data)
      } else {
        console.log(response.data)
      }
    }
  }
})

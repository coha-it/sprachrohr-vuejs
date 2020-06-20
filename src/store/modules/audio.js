import axios from 'axios'
import * as types from '@/store/mutation-types'

// state
export const state = {
  podcasts: []
}

// getters
export const getters = {
  podcasts: state => state.podcasts
}

// mutations
export const mutations = {
  [types.FETCH_PODCASTS_SUCCESS] (state, { podcasts }) {
    state.podcasts = podcasts
  }
}

// actions
export const actions = {
  async fetchPodcasts ({ commit }) {
    try {
      const { data } = await axios.post('http://127.0.0.1:3000/api/podcast/list')
      commit(types.FETCH_PODCASTS_SUCCESS, { podcasts: data })
    } catch (e) {
      commit(types.FETCH_PODCASTS_FAILURE)
    }
  }
}

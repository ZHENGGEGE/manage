import * as types from '../mutation-types'

const user = {
  state: {
    user: {}
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    [types.SET_USER] (state, user) {
      state.user = user
    }
  },
  actions: {

  }
}

export default user

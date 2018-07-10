import * as types from '../mutation-types'
const application = {
  state: {
    applicationList: []
  },
  getters: {
    applicationList: state => state.applicationList
  },
  mutations: {
    [types.SET_APPLICATION_LIST] (state, list) {
      state.applicationList = list
    }
  },
  actions: {

  }
}

export default application

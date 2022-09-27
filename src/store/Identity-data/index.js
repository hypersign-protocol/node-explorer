export default
{
  state: {
    allIdentities: [],
    selectedIdentity: {},
  },

  getters: {
    getAllDid(state) {
      return state.allIdentities
    },
    getOneDid(state) {
      return state.selectedIdentity
    },
  },
  mutations: {
    resetAllIdentities(state) {
      state.allIdentities = []
    },
    addDidToStore(state, payload) {
      state.allIdentities.push(payload)
    },
    getOneDid(state, payload) {
      // eslint-disable-next-line
      const found = state.allIdentities.find(x => {
        if (x.identity_inner.didDocument.id === payload) {
          return x
        }
      })
      Object.assign(state.selectedIdentity, { ...found })
    },
  },
  // eslint-disable-next-line
}
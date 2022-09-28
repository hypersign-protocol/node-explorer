export default
{
  state: {
    allIdentities: [],
    selectedIdentity: {},
  },

  getters: {
    getDiDDataByDiD: state => did => state.allIdentities.find(x => x.did_id === did),
    getAllDid(state) {
      return state.allIdentities
    },
  },
  mutations: {
    resetAllIdentities(state) {
      state.allIdentities = []
    },
    addDidToStore(state, payload) {
      state.allIdentities.push(payload)
    },
  },
  // eslint-disable-next-line
}
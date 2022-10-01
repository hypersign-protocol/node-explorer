export default
{
  state: {
    allVerifiableCred: [],
    selectedVc: {},
  },

  getters: {
    getVerifiableCredById: state => id => state.allVerifiableCred.find(x => x.id === id),
    getAllVerifiableCred(state) {
      return state.allVerifiableCred
    },
  },
  mutations: {
    addVerifiableCredToStore(state, payload) {
      state.allVerifiableCred.push(payload)
    },
    resetAllVerifiableCred(state) {
      state.allVerifiableCred = []
    },
  },
// eslint-disable-next-line
}
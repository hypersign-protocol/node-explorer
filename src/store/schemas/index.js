export default
{
  state: {
    allSchemas: [],
    selectedSchema: {},
  },

  getters: {
    getSchemaDataById: state => id => state.allSchemas.find(x => x.id === id),
    getAllSchemas(state) {
      return state.allSchemas
    },
  },
  mutations: {
    addSchemaToStore(state, payload) {
      state.allSchemas.push(payload)
    },
    resetAllSchemas(state) {
      state.allSchemas = []
    },
  },
// eslint-disable-next-line
}
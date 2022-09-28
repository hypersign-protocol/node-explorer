<template>
  <div>
    <b-card>
      <b-card-title>
        DID Document ({{singleDid.didDocument.id}})
      </b-card-title>
      <json-viewer v-if="skin !== 'dark'" :value="singleDid.didDocument" :expanded="true" :depth="10" :copyable="true"></json-viewer>
      <json-viewer v-else :theme ="theme" :value="singleDid.didDocument" :expanded="true" :depth="10" :copyable="true"></json-viewer>
    </b-card>
    <b-card>
      <b-card-title>
        DID Document MetaData
      </b-card-title>
      <json-viewer v-if="skin !=='dark'" :value="singleDid.didDocumentMetadata" :expanded="true" :depth="10" :copyable="true"></json-viewer>
      <json-viewer v-else :theme ="theme" :value="singleDid.didDocumentMetadata" :expanded="true" :depth="10" :copyable="true"></json-viewer>
    </b-card>
  </div>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  components: {},
  computed: {
    getAllDid() {
      return this.$store.getters.getAllDid
    },
  },
  setup() {
    const { skin } = useAppConfig()

    return {
      skin,
    }
  },
  data() {
    return {
      theme: 'my-awesome-json-theme',
      singleDid: {},
    }
  },
  created() {
    const { DiD } = this.$route.params
    this.singleDid = this.$store.getters.getDiDDataByDiD(DiD)
    if (!this.singleDid || !this.singleDid.did_id) {
      this.initData(DiD)
    }
  },
  methods: {
    initData(DiD) {
      this.$http.fetchOneDid(DiD).then(res => {
        this.$store.commit('addDidToStore', res)
        this.singleDid = { ...res }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.my-awesome-json-theme {
  background: #3b4252;
  white-space: nowrap;
  color: white;
  font-size: 16px;
  font-family: Consolas, Menlo, Courier, monospace;
}
</style>

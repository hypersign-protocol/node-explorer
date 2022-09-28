<template>
  <div>
    <p>DID Document ({{singleDid.didDocument.id}})</p>
    <json-viewer :value="singleDid.didDocument" :expanded="true" :depth="10" :copyable="true"></json-viewer>
    <p>DID Document MetaData </p>
    <json-viewer :value="singleDid.didDocumentMetadata" :expanded="true" :depth="10" :copyable="true"></json-viewer>
  </div>
</template>

<script>

export default {
  components: {},
  computed: {
    getAllDid() {
      return this.$store.getters.getAllDid
    },
  },
  data() {
    return {
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

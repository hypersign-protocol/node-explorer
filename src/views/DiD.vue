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
      showModal: true,
      singleDid: {},
    }
  },
  created() {
    const { DiD } = this.$route.params
    // eslint-disable-next-line
      const a = this.getAllDid.find(x => {
      if (x.did_id === DiD) {
        this.singleDid = { ...x }
        this.showModal = true
        return x
      }
    })
    if (a === undefined) {
      this.initData(DiD)
    }
  },
  methods: {
    initData(DiD) {
      this.$http.fetchOneDid(DiD).then(res => {
        this.singleDid = { ...res }
        this.showModal = true
      })
    },
  },
}
</script>

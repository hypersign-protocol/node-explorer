<template>
  <div>
    <b-card>
      <b-card-title>
        Credential Status Document ({{singleVerifiableCred.id}})
      </b-card-title>
      <json-viewer v-if="skin !== 'dark'" :value="singleVerifiableCred.vcDocToShow" :expanded="true" :depth="10" :copyable="true"></json-viewer>
      <json-viewer v-else :theme ="theme" :value="singleVerifiableCred.vcDocToShow" :expanded="true" :depth="10" :copyable="true"></json-viewer>
    </b-card>
    <b-card>
      <b-card-title>
        Credential Status Proof
      </b-card-title>
      <json-viewer v-if="skin !=='dark'" :value="singleVerifiableCred.vcDocument.proof" :expanded="true" :depth="10" :copyable="true"></json-viewer>
      <json-viewer v-else :theme ="theme" :value="singleVerifiableCred.vcDocument.proof" :expanded="true" :depth="10" :copyable="true"></json-viewer>
    </b-card>
  </div>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  components: {},
  setup() {
    const { skin } = useAppConfig()

    return {
      skin,
    }
  },
  data() {
    return {
      theme: 'my-awesome-json-theme',
      singleVerifiableCred: {},
    }
  },
  created() {
    const { Vc } = this.$route.params
    this.singleVerifiableCred = this.$store.getters.getVerifiableCredById(Vc)
    if (this.singleVerifiableCred === undefined) {
      this.initData(Vc)
    }
  },
  methods: {
    initData(Vc) {
      this.$http.fetchOneVerifiableCred(Vc).then(res => {
        this.$store.commit('addVerifiableCredToStore', res)
        this.singleVerifiableCred = { ...res }
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

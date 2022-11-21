<template>
  <div>
    <b-card>
      <b-card-title>
        Schema Document ({{singleSchema.id}})
      </b-card-title>
      <json-viewer v-if="skin !== 'dark'" :value="schemaDocument" :expanded="true" :depth="10" :copyable="true"></json-viewer>
      <json-viewer v-else :theme ="theme" :value="schemaDocument" :expanded="true" :depth="10" :copyable="true"></json-viewer>
    </b-card>
    <b-card>
      <b-card-title>
        Schema Document Proof
      </b-card-title>
      <json-viewer v-if="skin !=='dark'" :value="singleSchema.proof" :expanded="true" :depth="10" :copyable="true"></json-viewer>
      <json-viewer v-else :theme ="theme" :value="singleSchema.proof" :expanded="true" :depth="10" :copyable="true"></json-viewer>
    </b-card>
  </div>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  components: {},
  computed: {
    schemaDocument() {
      return {
        name: this.singleSchema.name,
        description: this.singleSchema.schema.description,
        type: this.singleSchema.type,
        authoredAt: this.singleSchema.authored,
        author: this.singleSchema.author,
        modelVersion: this.singleSchema.modelVersion,
        properties: JSON.parse(this.singleSchema.schema.properties),
        additionalProperties: this.singleSchema.schema.additionalProperties,
        required: this.singleSchema.schema.required,
      }
    },
    getAllSchemas() {
      return this.$store.getters.getAllSchemas
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
      singleSchema: {},
    }
  },
  created() {
    const { ScH } = this.$route.params
    this.singleSchema = this.$store.getters.getSchemaDataById(ScH)
    if (!this.singleSchema || !this.singleSchema.id) {
      this.initData(ScH)
    }
  },
  methods: {
    initData(ScH) {
      this.$http.fetchOneSchema(ScH).then(res => {
        this.$store.commit('addSchemaToStore', res)
        this.singleSchema = { ...res }
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

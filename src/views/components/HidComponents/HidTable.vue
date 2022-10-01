<template>
  <b-table thead-class="thead-light tableCard" :items="items" :fields="fields" :sort-by="sortBy" :sort-desc="true" responsive>
    <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
      <span :title="data.value" :key="index" v-if="field.isTruncate!=true">{{ data.value }}</span>
      <span :title="data.value" :key="index" v-if="field.isTruncate === true && field.isClickable != true">{{ truncate1(data.value,44) }}</span>
      <router-link v-if="field.isClickable === true" :key="index"  :title="data.value" :to="`${field.to}`+`${data.value}`">
                {{ truncate1(data.value,44) }}
              </router-link>
    </template>
  </b-table>
</template>

<script>
export default {
  name: 'HidTable',
  components: {},
  props: {
    items: Array,
    fields: Array,
    sortBy: String,
  },
  data() {
    return {}
  },
  methods: {
    truncate1(str, limit) {
      const eachLen = Math.floor(limit / 3)
      const firstPart = str.substr(0, eachLen)
      const lastPart = str.slice(-eachLen)
      const space = '...'
      const truncated = firstPart + space + lastPart
      return truncated
    },
  },
}
</script>

<style scoped>
.tableCard {
  word-wrap: break-word;
  white-space: nowrap;
  box-sizing: border-box;
}
.copy {
  padding: 7px;
  font-size: medium;
  cursor: pointer;
  color: black;
}
</style>

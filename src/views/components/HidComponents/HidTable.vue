<template>
  <b-table thead-class="thead-light tableCard" :items="items" :fields="fields" responsive>
    <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
      <span :key="index" v-if="field.isCopy!=true">{{ data.value }}</span>
      <router-link v-else-if="field.isClickable ==true" :key="index"  :to="`./identity/${data.value}`">
                {{ truncate1(data.value,44) }}
              </router-link>
      <span :key="index" v-else >{{ truncate1(data.value,44) }} </span>
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

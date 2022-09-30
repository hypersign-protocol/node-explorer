<template>
  <div>
      <hid-table
      :items="getAllSchemas"
      :fields="fields"
      ></hid-table>
  </div>
</template>

<script>
import {
  toDay,
} from '@/libs/utils'
import store from '@/store'
import HidTable from './components/HidComponents/HidTable.vue'

export default {
  components: {
    HidTable,
  },
  computed: {
    getAllSchemas() {
      return store.getters.getAllSchemas
    },
  },
  data() {
    return {
      fields: [
        {
          key: 'id',
          label: 'Schema ID',
          type: 'text',
          isCopy: true,
          isClickable: true,
          to: './schemas/',
        },
        {
          key: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          key: 'modelVersion',
          label: 'Model Version',
          type: 'text',
        },
        {
          key: 'description',
          label: 'Description',
          type: 'text',
        },
        {
          key: 'author',
          label: 'Author',
          type: 'text',
        },
      ],
    }
  },
  created() {
    this.getLatestSchema()
  },
  methods: {
    formatTime: v => toDay(v, 'from'),
    getLatestSchema() {
      this.$http.getLatestSchema()
    },
  },
}
</script>

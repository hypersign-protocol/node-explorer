<template>
  <div>
      <hid-table
      :items="getAllVerifiableCred"
      :fields="fields"
      sortBy='issuanceDate'
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
    getAllVerifiableCred() {
      return store.getters.getAllVerifiableCred
    },
  },
  data() {
    return {
      fields: [
        {
          key: 'id',
          label: 'Credential ID',
          type: 'text',
          isTruncate: true,
          isClickable: true,
          to: './revocationRegistry/',
        },
        {
          key: 'issuer',
          label: 'Issuer',
          type: 'text',
          isTruncate: true,
        },
        {
          key: 'issuanceDate',
          label: 'Issued At',
          type: 'date',
        },
        {
          key: 'currentStatus',
          label: 'Status',
          type: 'text',
        },
      ],
    }
  },
  methods: {
    formatTime: v => toDay(v, 'from'),
  },
}
</script>

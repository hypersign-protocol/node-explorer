<template>
  <div>
    <b-card
      no-body
      class="text-truncate"
    >
      <b-tabs
        pills
        class="mt-1"
      >
        <b-tab
          title="Recent"
          disabled
        />
        <b-tab
          title="DID's"
          active
          @click="hideSchemas()"
        >
      <hid-table
      :items="identities"
      :fields="fields"
      ></hid-table>
        </b-tab>
      <b-tab
      title="Schemas"
      @click="showSchemas()"
      >
     <schemas v-if="toSchemas">
     </schemas>
      </b-tab>
      <b-tab
      title="Revocation Registry"
      disabled
      >
      </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, VBTooltip, BTab, BTabs,
} from 'bootstrap-vue'
import {
  toDay,
} from '@/libs/utils'
import HidTable from './components/HidComponents/HidTable.vue'
import Schemas from './Schemas.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BCardHeader,
    BCardTitle,
    HidTable,
    Schemas,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  computed: {
    identities() {
      return this.$store.getters.getAllDid
    },
  },
  data() {
    return {
      toSchemas: false,
      islive: true,
      txs: [],
      fields: [
        {
          key: 'did_id',
          label: 'DID ID',
          type: 'text',
          isCopy: true,
          isClickable: true,
          to: './identity/',
        },
        {
          key: 'versionId',
          label: 'Transaction Id',
          type: 'text',
          isCopy: true,
          isClickable: true,
          to: './tx/',
        },
        {
          key: 'createdAt',
          label: 'Created At',
          formatter: v => toDay(v, 'from'),
          type: 'date',
        },
        {
          key: 'updatedAt',
          label: 'Updated At',
          formatter: v => toDay(v, 'from'),
          type: 'date',
        },
        {
          key: 'deactivated',
          label: 'Deactivated',
          type: 'boolean',
        },
      ],
    }
  },
  created() {
    this.$store.commit('resetAllSchemas')
    this.fetchDIDs()
  },
  methods: {
    showSchemas() {
      this.toSchemas = true
    },
    hideSchemas() {
      this.toSchemas = false
      this.$store.commit('resetAllSchemas')
      this.fetchDIDs()
    },
    fetchDIDs() {
      this.$store.commit('resetAllIdentities')
      this.$http.getLatestId()
    },
    formatTime: v => toDay(v, 'from'),
  },
}
</script>

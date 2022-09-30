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
          @click="ShowOnlyDIDTable()"
        >
      <hid-table
      :items="identities"
      :fields="fields"
      sortBy='createdAt'
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
      @click="showVcTable()"
      >
      <revocation-registry
      v-if="showVc"
      ></revocation-registry>
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
import RevocationRegistry from './RevocationRegistry.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BCardHeader,
    BCardTitle,
    HidTable,
    Schemas,
    RevocationRegistry,
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
      showVc: false,
      islive: true,
      txs: [],
      fields: [
        {
          key: 'did_id',
          label: 'DID ID',
          type: 'text',
          isTruncate: true,
          isClickable: true,
          to: './identity/',
        },
        {
          key: 'versionId',
          label: 'Transaction Id',
          type: 'text',
          isTruncate: true,
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
    this.ShowOnlyDIDTable()
  },
  methods: {
    showVcTable() {
      this.showVc = true
      this.$store.commit('resetAllVerifiableCred')
      this.$http.getLatestVerifiableCred()
    },
    showSchemas() {
      this.toSchemas = true
      this.$store.commit('resetAllSchemas')
      this.$http.getLatestSchema()
    },
    ShowOnlyDIDTable() {
      this.showVc = false
      this.toSchemas = false
      this.$store.commit('resetAllIdentities')
      this.fetchDIDs()
    },
    fetchDIDs() {
      this.$http.getLatestId()
    },
    formatTime: v => toDay(v, 'from'),
  },
}
</script>

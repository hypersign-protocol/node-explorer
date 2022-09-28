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
        >
      <hid-table
      :items="identities"
      :fields="fields"
      ></hid-table>
        </b-tab>
      <b-tab
      title="Schemas"
      disabled
      >
        <hid-table
        :fields="txFields"
        >
        </hid-table>
      </b-tab>

      <b-tab
      title="Revocation Registry"
      disabled
      >
        <hid-table
        :fields="txFields"
        >
        </hid-table>
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
  toDay, abbr,
} from '@/libs/utils'
import HidTable from './components/HidComponents/HidTable.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BCardHeader,
    BCardTitle,
    HidTable,
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
      txFields: [
        { key: 'did_id' },
        { key: 'versionId' },
        { key: 'createdAt', formatter: v => toDay(v, 'from') },
        { key: 'updatedAt', formatter: v => toDay(v, 'from') },
        { key: 'deactivated' },
      ],
    }
  },
  created() {
    if (localStorage.getItem('identity')) {
      localStorage.removeItem('identity')
    }
    this.$store.commit('resetAllIdentities')
    this.$http.getLatestId()
    this.timer = setInterval(6000)
  },
  beforeDestroy() {
    this.islive = false
    clearInterval(this.timer)
  },
  methods: {
    formatTime: v => toDay(v, 'from'),
    // fetch() {
    //   this.$http.getLatestId().then(b => {
    //     const has = this.identity.findIndex(x => x.identity.did_id === b.identity.did_id)
    //     if (has < 0) {
    //       this.identity.unshift(b)
    //       this.extractTx(b)
    //     }
    //     if (this.identity.length > 200) this.identity.pop()
    //   })
    // },
    // extractTx(block, direction = 'head') {
    //   const { txs } = block.block.data
    //   if (txs === null) return
    //   for (let i = 0; i < txs.length; i += 1) {
    //     let tx = new Tx()
    //     try {
    //       const origin = decodeTxRaw(fromBase64(txs[i]))
    //       tx = Tx.create(origin)
    //       tx.time = block.block.header.time
    //     } catch (e) {
    //       // catch errors
    //     }
    //     tx.setHash(txs[i])
    //     if (direction === 'head') {
    //       this.txs.unshift(tx)
    //       if (this.txs.length > 200) {
    //         this.txs.pop()
    //       }
    //     } else if (this.txs.length < 100) {
    //       this.txs.push(tx)
    //     }
    //   }
    // },
  },
}
</script>

<template>
  <div>
    <b-card title="DiD Document">
      {{ (identity.identity_inner) }}
    </b-card>
  </div>
</template>

<script>
import { BCard } from 'bootstrap-vue'

export default {
  components: {
    BCard,
  },
  // beforeRouteUpdate(to, from, next) {
  //   const { height } = to.params
  //   if (height > 0 && height !== from.params.height) {
  //     this.initData(height)
  //     next()
  //   }
  // },
  computed: {
    identity() {
      if (!localStorage.getItem('identity')) {
        localStorage.setItem('identity', JSON.stringify(this.$store.getters.getOneDid))
        return this.$store.getters.getOneDid
      }
      return JSON.parse(localStorage.getItem('identity'))
    },
  },
  data() {
    return {
      txs: null,
    }
  },
  created() {
    const { DiD } = this.$route.params
    if (!localStorage.getItem('identity')) {
      this.$store.commit('getOneDid', DiD)
    }
  },
  methods: {
    // initData(Did) {
    //   this.$store.commit('getOneDid', Did)
    // },
  },
}
</script>

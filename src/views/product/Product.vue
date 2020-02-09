<template>
    <div>12312312313</div>
</template>

<script>
import { getGoodInfo } from '../../request/goodInfo'

export default {
  name: 'Product',
  data () {
    return {
      pageIndex: 1
    }
  },
  created () {
    this.getGoodInfo()
  },
  methods: {
    getGoodInfo () {
      getGoodInfo(this.pageIndex).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>

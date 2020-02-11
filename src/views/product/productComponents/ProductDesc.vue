<template>
  <div>
    <div v-for="item in productDesc" :key="item.id">
      <h4 class=" blue--text text-center">{{item.title}}</h4>
      <div v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
import { getProductDesc } from '../../../request/goodInfo'

export default {
  name: 'ProductDesc',
  data () {
    return {
      id: null,
      productDesc: []
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getProductDesc()
  },
  methods: {
    getProductDesc () {
      getProductDesc(this.id).then(res => {
        this.productDesc.push(...res.message)
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>

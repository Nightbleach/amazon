<template>
   <v-container fluid>
     <product-list :productList =  productList></product-list>
     <v-btn class="error" block @click="loadMore">加载更多</v-btn>
   </v-container>
</template>

<script>
import ProductList from './productComponents/ProductList'
import { getGoodInfo } from '../../request/goodInfo'

export default {
  name: 'Product',
  components: {
    ProductList
  },
  data () {
    return {
      pageIndex: 1,
      productList: []
    }
  },
  created () {
    this.getGoodInfo()
  },
  methods: {
    getGoodInfo () {
      getGoodInfo(this.pageIndex).then(res => {
        this.productList.push(...res.message)
        // console.log(res)
      })
    },
    loadMore () {
      this.pageIndex++
      this.getGoodInfo()
    }
  }
}
</script>

<style scoped>

</style>

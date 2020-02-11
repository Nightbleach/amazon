<template>
    <v-container>
      <product-carousel :productCarousel = productCarousel />
      <sell-page :productParams="productParams"/>
    </v-container>
</template>

<script>
import { getProductDetails, getProductCarousel, getGoodParams } from '../../../request/goodInfo'
import ProductCarousel from '../../../components/shared/ProductCarousel'
import SellPage from '../../../components/shared/SellPage'

export default {
  name: 'ProductDetails',
  components: {
    ProductCarousel,
    SellPage
  },
  data () {
    return {
      id: null,
      productCarousel: [],
      productParams: []
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getProductDetails()
    this.getProductCarousel()
    this.getGoodParams()
  },
  methods: {
    getProductDetails () {
      getProductDetails(this.id).then(res => {
        // console.log(res)
      })
    },
    getProductCarousel () {
      getProductCarousel(this.id).then(res => {
        this.productCarousel.push(...res.message)
        // console.log(res)
      })
    },
    getGoodParams () {
      getGoodParams(this.id).then(res => {
        this.productParams.push(...res.message)
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>

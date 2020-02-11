<template>
  <v-card
    class="mx-auto"
    max-width="344"
    @click="toProductDetails"
  >
    <v-img
     :src="product.img_url"
      height="300px"
    ></v-img>

    <v-card-title class="pt-0">
      {{product.title}}
    </v-card-title>
    <v-card-subtitle class="py-0">
     <span class="red--text">${{product.sell_price}}</span>
      <span class="ml-2"><del>${{product.market_price}}</del></span>
      <v-row justify="space-between">
        <v-col cols="3">
          <span>热卖中</span>
        </v-col>
        <v-col cols="3" class="pa-0">
          <span >剩{{product.stock_quantity}}件</span>
        </v-col>
      </v-row>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    toProductDetails () {
      this.$router.push('/products/' + this.product.id)
    }
  }
}
</script>

<style scoped>
  /*max-width="344"*/
</style>

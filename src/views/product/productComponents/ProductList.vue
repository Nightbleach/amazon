<template>
    <v-row>
      <v-col
        cols="6"
        v-for="(item, index) in productList"
        :key="index">
        <product-list-item
          :product = item
        />
      </v-col>
    </v-row>
</template>

<script>
import ProductListItem from './ProductListItem'
export default {
  name: 'ProductList',
  components: {
    ProductListItem
  },
  props: {
    productList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
    <div>
      <p>{{cartText.title}}</p>
      <p class="red--text">$ {{cartText.sell_price}}</p>
      <span>购买该商品总数量{{$store.getters.getGoodsCount[cartText.id]}}</span>
    </div>
</template>

<script>
export default {
  name: 'CartParams',
  props: {
    cartText: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    // getGoodsCount () {
    //   return this.$store.state.cart.find(item => item.count)
    // }
  }
}
</script>

<style scoped>

</style>

<template>
    <div>
      <p>{{cartText.title}}</p>
      <p class="red--text">$ {{cartText.sell_price}}</p>
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
  }
}
</script>

<style scoped>

</style>

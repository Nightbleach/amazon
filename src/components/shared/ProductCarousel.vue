<template>
  <v-container>
    <div>
    <v-card outlined>
    <carousel adjustable-height :per-page="1" paginationColor="lightgray" paginationActiveColor="palevioletred">
      <slide class="img"  v-for="item in productCarousel" :key="item.id">
        <img  :src="item.src" alt="">
      </slide>
    </carousel>
    </v-card>
    </div>

  </v-container>
</template>

<script>
export default {
  name: 'ProductCarousel',
  props: {
    productCarousel: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .img
    text-align center
</style>

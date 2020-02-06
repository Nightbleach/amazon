<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-carousel
          class="touch"
          cycle
          height="250px"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="item in carouselInfo"
            :key="item.id"
            :src="item.img"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeCarousel',
  props: {
    carouselInfo: {
      type: Array,
      dafault () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>

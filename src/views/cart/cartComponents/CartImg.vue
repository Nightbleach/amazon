<template>
  <v-container class="pa-0">
    <div>
      <v-img contain max-height="64" :src="imgInfo.thumb_path"></v-img>
    </div>
    <v-img></v-img>
  </v-container>
</template>

<script>
export default {
  name: 'CartImg',
  props: {
    imgInfo: {
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

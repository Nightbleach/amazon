<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card  cols="12"  @click="imgDetails">
          <v-img
            class="white--text align-end"
            :src="imgList.img_url"
            max-height="499"
            alt=""
          >
            <v-card-title class="pa-0 img-text  body-2">{{imgList.title}}</v-card-title>
            <v-card-title class=" img-text pa-0 body-2">{{imgList.seo_description}}</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ImgNewItems',
  props: {
    imgList: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    imgDetails () {
      this.$router.push('/imgNews/' + this.imgList.id)
    }
  }
}
</script>

<style scoped lang="stylus">
  .img-text
    background-color rgba(0, 0, 0, 0.4)
</style>

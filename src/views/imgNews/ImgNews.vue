<template>
  <v-container fluid>
    <v-sheet
      class="mx-auto"
      max-width="860"
    >
      <v-slide-group show-arrows>
        <v-slide-item
          v-for="(item, index) in tabInfo"
          :key="index"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="purple white--text"
            depressed
            rounded
            @click="getImgNewsList(item.id)"
          >
           {{item.title}}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-row>
      <v-col cols="12">
        <v-card cols="12" v-for="item in imgList" :key="item.id" @click="imgDetails">
          <v-img
            class="white--text align-end"
            :src="item.img_url"
            max-height="499"
            alt=""
          >
              <v-card-title class="pa-0 img-text  body-2">{{item.title}}</v-card-title>
              <v-card-title class=" img-text pa-0 body-2">{{item.seo_description}}</v-card-title>
            </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getImgNews, getImgNewsList } from '../../request/imgNews'

export default {
  name: 'ImgNews',
  data () {
    return {
      tabInfo: [],
      imgList: []
      // id: this.imgList.id
    }
  },
  created () {
    this.getImgNews()
    this.getImgNewsList(0)
  },
  methods: {
    imgDetails () {
      // this.$router.push('/imgNews/' + this.id)
    },
    getImgNews () {
      getImgNews().then(res => {
        console.log(res)
        res.message.unshift({ title: '全部', id: 0 })
        this.tabInfo.push(...res.message)
      })
    },
    getImgNewsList (id) {
      getImgNewsList(id).then(res => {
        console.log(res)
        this.imgList.push(...res.message)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.img-text
  background-color rgba(0, 0, 0, 0.4)
</style>

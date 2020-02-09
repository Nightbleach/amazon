<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
        <h3 class="text-center blue--text ">{{ imgInfoDetails[0].title}}</h3>
        </v-col>
        <v-row justify="space-between">
          <v-col cols="8">
            <span class="body-2 pl-2">发表时间 {{ imgInfoDetails[0].add_time}}</span>
          </v-col>
          <v-col cols="4">
            <span class="body-2">点击量 {{ imgInfoDetails[0].click}}</span>
          </v-col>
        </v-row>
<!--        缩略图展示-->
        <v-col cols="12">
          <vue-preview  :slides="ImgPreList" @close="handleClose"></vue-preview>
        </v-col>
        <v-col cols="12">
          <p class="body-2" v-html="imgInfoDetails[0].content"></p>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { getImgInfoDetails, getImgPreList } from '../../../request/imgInfoDetails'

export default {
  name: 'ImgDetails',
  data () {
    return {
      id: this.$route.params.id,
      imgInfoDetails: [],
      ImgPreList: []
    }
  },
  created () {
    this.getImgInfoDetails()
    this.getImgPreList()
  },
  methods: {
    getImgInfoDetails () {
      getImgInfoDetails(this.id).then(res => {
        this.imgInfoDetails.push(...res.message)
      })
    },
    getImgPreList () {
      getImgPreList(this.id).then(res => {
        console.log(res)
        res.message.forEach(item => {
          item.w = 600
          item.h = 400
          item.msrc = item.src
        })
        this.ImgPreList.push(...res.message)
      })
    },
    handleClose () {
      console.log('close event')
    }
  }
}
</script>

<style scoped lang="stylus">
</style>

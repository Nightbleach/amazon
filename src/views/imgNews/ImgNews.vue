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
    <img-new-items v-for="item in imgList" :key="item.id" :imgList = item />
  </v-container>
</template>

<script>
import ImgNewItems from './imgNewsComponents/ImgNewItems'
import { getImgNews, getImgNewsList } from '../../request/imgNews'

export default {
  name: 'ImgNews',
  components: {
    ImgNewItems
  },
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

</style>

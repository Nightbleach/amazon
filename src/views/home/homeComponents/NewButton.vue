<template>
  <v-container>
    <v-row >
      <v-col cols="4"  class="newBtn" @click="toNews">
        <v-img class="img"  src='../../../assets/img/menu/menu1.png' alt=""/>
        <div class="text-center">新闻资讯</div>
      </v-col>
      <v-col cols="4" class="newBtn" @click="toImgNews">
        <v-img  class="img" src='../../../assets/img/menu/2.png' alt=""/>
        <div class="text-center">图片分享</div>
      </v-col>
      <v-col cols="4" class="newBtn" @click="toProducts">
        <v-img class="img" src='../../../assets/img/menu/menu3.png' alt=""/>
        <div class="text-center">商品购买</div>
      </v-col>
      <v-col cols="4" class="newBtn" >
        <v-img class="img" src='../../../assets/img/menu/menu4.png' alt=""/>
        <div class="text-center">留言反馈</div>
      </v-col>
      <v-col cols="4" class="newBtn">
        <v-img class="img" src='../../../assets/img/menu/menu5.png' alt=""/>
        <div class="text-center">视频专区</div>
      </v-col>
      <v-col cols="4" class="newBtn">
        <v-img class="img" src='../../../assets/img/menu/menu6.png' alt=""/>
        <div class="text-center">联系我们</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'NewButton',
  data () {
    return {
    }
  },
  methods: {
    toNews () {
      this.$router.push('/newsList')
    },
    toImgNews () {
      this.$router.push('/imgNews')
    },
    toProducts () {
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped lang="stylus">
.newBtn
  cursor pointer
.img
  width 60px
  height 60px
  margin 0 auto
</style>

<template>
  <div class="home">
    <home-carousel :carouselInfo = carouselInfo />
  </div>
</template>

<script>
// @ is an alias to /src
// 组件请求
import HomeCarousel from './HomeCarousel'
// 数据请求
import { getCarousel } from '../../request/home'
export default {
  name: 'home',
  data () {
    return {
      carouselInfo: []
    }
  },
  components: {
    HomeCarousel
  },
  created () {
    this.getCarousel()
  },
  methods: {
    getCarousel () {
      getCarousel().then(res => {
        console.log(res)
        // const data = res.message
        this.carouselInfo = res.message
      })
    }
  }
}

</script>

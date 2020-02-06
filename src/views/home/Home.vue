<template>
  <div class="home">
    <home-carousel :carouselInfo = carouselInfo />
    <new-button/>
  </div>
</template>

<script>
// @ is an alias to /src
// 组件请求
import HomeCarousel from './homeComponents/HomeCarousel'
import NewButton from './homeComponents/NewButton'
// 数据请求
import { getCarousel } from '../../request/home'
export default {
  name: 'home',
  components: {
    HomeCarousel,
    NewButton
  },
  data () {
    return {
      carouselInfo: []
    }
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

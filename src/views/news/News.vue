<template>
    <v-container fluid>
      <new-list :newsInfo = newsInfo />
    </v-container>
</template>

<script>
import { getNewsList } from '../../request/newsInfo'
import NewList from './newsComponents/NewList'

export default {
  name: 'News',
  components: {
    NewList
  },
  data () {
    return {
      newsInfo: []
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      getNewsList().then(res => {
        // console.log(res)
        this.newsInfo.push(...res.message)
      })
    }
  }
}
</script>

<style scoped>

</style>

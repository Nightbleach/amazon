<template>
    <v-container>
      <div>
        <h3>发表评论</h3>
      </div>
      <v-row>
        <v-col cols="12">
          <v-textarea
            outlined
            label="Comment"
            placeholder="请输入评论内容"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn block class="primary">发表评论</v-btn>
        </v-col>
        <v-col class="pa-0">
          <v-list
            subheader
            two-line
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="body-2 pa-2 grey lighten-2">第一楼：{{}} 用户：匿名用户 发表时间：412341234</v-list-item-title>
                <v-list-item-subtitle>Pray for kobe</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>>
        </v-col>
        <v-col cols="12">
          <v-btn block outlined color="pink">加载更多</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { getComments } from '../../request/newDetails'
// import axios from 'axios'

export default {
  name: 'Comment',
  props: ['id'],
  data () {
    return {
      pageIndex: 1
    }
  },
  created () {
    this.getComments(this.id)
    // axios 的基本数据请求
    // axios
    //   .get('http://www.liulongbin.top:3005/api/getcomments/' + this.id + '?pageindex=' + this.pageIndex)
    //   .then(res => {
    //     console.log(res)
    //   })
  },
  methods: {
    getComments () {
      getComments(this.id, 1).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>

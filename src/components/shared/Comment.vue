<template>
    <v-container>
      <div>
        <h3>发表评论</h3>
      </div>
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="msg"
            outlined
            label="Comment"
            placeholder="请输入评论内容"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn block class="primary" @click="postComment">发表评论</v-btn>
        </v-col>
        <v-col class="pa-0">
          <v-list
            subheader
            two-line
            v-for="(item, index) in commentsInfo"
            :key="index"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="body-2 pa-2 grey lighten-2">第{{index + 1}}楼  用户: {{item.user_name}} 发表时间：{{item.add_time | moment("YYYY/MM/DD/ h:mm:ss a")}}</v-list-item-title>
                <v-list-item-subtitle>{{item.content}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12">
          <v-btn block outlined color="pink" @click="loadMore">加载更多</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { getComments } from '../../request/newDetails'
import axios from 'axios'

export default {
  name: 'Comment',
  props: ['id'],
  data () {
    return {
      commentsInfo: [], // 所有评论数据
      pageIndex: 1,
      comments: [],
      msg: ''
    }
  },
  created () {
    this.getComments()
    // axios 的基本数据请求
    // axios
    //   .get('http://www.liulongbin.top:3005/api/getcomments/' + this.id + '?pageindex=' + this.pageIndex)
    //   .then(res => {
    //     console.log(res)
    //   })
  },
  methods: {
    getComments () {
      getComments(this.id, this.pageIndex).then(res => {
        this.commentsInfo.push(...res.message)
        console.log(res)
      })
    },
    loadMore () {
      this.pageIndex++
      this.getComments()
    },
    postComment () {
      axios.post('http://www.liulongbin.top:3005/api/postcomment/' + this.id, {
        content: this.msg
      }).then(res => {
        let cmt = {
          user_name: '匿名用户',
          add_time: Date.now(),
          content: this.msg
        }
        this.commentsInfo.unshift(cmt)
        this.msg = ''
      })
    }
  }
}
</script>

<style scoped>

</style>

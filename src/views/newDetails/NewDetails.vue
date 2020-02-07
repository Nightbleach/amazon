<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4 class="pink--text text-center" v-html="newDetails[0].title"></h4>
      </v-col>
      <v-col class="pt-0" cols="8">
        <span class="blue--text caption">发表时间: {{newDetails[0].add_time | moment("YYYY/MM/DD/ h:mm:ss a")}}</span>
      </v-col>
      <v-col cols="4" class="pt-0">
        <span class="blue--text caption">点击{{newDetails[0].click}}次</span>
      </v-col>
      <v-card>
        <v-col>
          <p v-html="newDetails[0].content"></p>
        </v-col>
      </v-card>
      <v-col>
        <Comment :id = this.id />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Comment from '../../components/shared/Comment'
import { getNewDetails } from '../../request/newDetails'

export default {
  name: 'newDetails',
  components: {
    Comment
  },
  data () {
    return {
      id: this.$route.params.id,
      newDetails: []
    }
  },
  created () {
    // this.id = this.$route.params.id
    this.getNewDetails()
  },
  methods: {
    getNewDetails () {
      getNewDetails(this.id).then(res => {
        console.log(res)
        this.newDetails.push(...res.message)
      })
    }
  }
}
</script>

<style scoped>

</style>

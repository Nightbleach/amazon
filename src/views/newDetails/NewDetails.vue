<template>
  <v-container>
    <v-row>
      <v-col>
        <h4 class="pink--text text-center">{{newDetails[0].title}}</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getNewDetails } from '../../request/newDetails'

export default {
  name: 'newDetails',
  data () {
    return {
      id: null,
      newDetails: []
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getNewDetails()
  },
  methods: {
    getNewDetails () {
      getNewDetails(this.id).then(res => {
        this.newDetails.push(...res.message)
      })
    }
  }
}
</script>

<style scoped>

</style>

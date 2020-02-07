<template>
  <v-container>
    <v-card
      outlined
      @click="goNewDetails"
    >
      <div class="d-flex flex-no-wrap">
        <v-avatar
          class="ma-3"
          size="70"
          tile
        >
          <img v-lazy="newsItems.img_url" alt=""/>
        </v-avatar>
        <div>
          <v-card-title
            class="subtitle-1"
            v-text="newsItems.title"
          />
          <v-card-subtitle class="pb-0" v-text="newsItems.zhaiyao"/>
          <v-row>
            <v-col cols="8">
              <v-card-subtitle class="blue--text caption pt-1 pb-0" >
               发表时间：{{newsItems.add_time | moment("YYYY/MM/DD/ h:mm:ss a")}}
              </v-card-subtitle>
            </v-col>
            <v-col class="pt-3 pb-0">
              <span class="blue--text caption">点击量{{newsItems.click}}</span>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'NewListItems',
  props: {
    newsItems: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goNewDetails () {
      this.$router.push('/newDetails/' + this.newsItems.id)
    }
  }
}
</script>

<style scoped>

</style>

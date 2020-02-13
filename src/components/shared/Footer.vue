<template>
  <v-container fluid>
      <v-footer
        height="50px"
        app
        padless
        class="grey lighten-4"
      >
        <v-row
          no-gutters
          v-for="item in footItems"
          :key="item.id"
        >
            <v-tooltip top>
              <template v-slot:activator="{on}">
                <v-btn
                  class="mx-4"
                  icon
                  :to="item.path"
                  v-on="on"
                >
                  <v-icon size='24px' class="btnActive" color="grey darken-1">{{item.icon}}</v-icon>
                </v-btn>
              </template>
              <span>{{item.tooltip}}</span>
            </v-tooltip>
            <!--          :content="messages"-->
            <!--          :value="messages"-->
            <v-badge
              :content="$store.getters.getAllCount"
              :value="count"
              color="green"
              overlap
            >
              <v-btn icon @click="toCart">
                <v-icon large>far fa-cart-plus</v-icon>
              </v-btn>
            </v-badge>
        </v-row>
      </v-footer>
  </v-container>

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      count: 1,
      footItems: [
        { icon: 'far fa-home-lg-alt', path: '/', tooltip: 'Home' },
        { icon: 'fal fa-horse', path: '/cart', tooltip: 'Cart' }
      ]
    }
  },
  methods: {
    toCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped lang="stylus">
  .btnActive:hover
    color  aqua
</style>

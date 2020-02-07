<template>
  <v-container>
    <v-row>
      <v-col>
        <new-list-items v-for="item in newsInfo" :key="item.id" :newsItems=item />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewListItems from './NewListItems'
export default {
  name: 'NewList',
  props: {
    newsInfo: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    NewListItems
  }
}
</script>

<style scoped>

</style>

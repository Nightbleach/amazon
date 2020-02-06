<template>
    <v-container fluid>
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          />
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Amazon</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
    </v-container>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>

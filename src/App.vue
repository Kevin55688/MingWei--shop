<template>
  <v-app class="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.app{
  background-image: url('./pic/floor-tile.png');
  font-family: 'Noto Sans TC','微軟正黑體',sans-serif;
  overflow: hidden;
}
</style>

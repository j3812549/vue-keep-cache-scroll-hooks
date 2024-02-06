<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="warp">
    <RouterLink class="btn" to="/">页面A</RouterLink>
    <RouterLink class="btn" to="/b">页面B</RouterLink>
  </div>
  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.path" />
    </keep-alive>
  </RouterView>
</template>
<style scoped>
.warp {
  margin-bottom: 20px;
}
.btn {
  width: 200px;
  margin: 0 20px;
  border: 1px solid red;
  padding: 5px 20px;
}
</style>

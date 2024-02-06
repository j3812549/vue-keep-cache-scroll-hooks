<script setup>
import { ref, onMounted } from 'vue'
import useKeepLivePageScroll from '../../dist/index'
const box = ref(null)
onMounted(() => {
  useKeepLivePageScroll(box.value, true)
})
</script>

<template>
  <div ref="box" class="box">
    <div class="item" v-for="i in 100" :key="i">B {{ i }}</div>
  </div>
</template>

<style scoped>
.box {
  width: 300px;
  height: 800px;
  border: 1px solid blue;
  overflow: auto;
}
</style>

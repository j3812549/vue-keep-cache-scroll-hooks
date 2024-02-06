
## vue-keep-cache-scroll-hooks

```
npm install vue-keep-cache-scroll-hooks --save
```

##### Demo

https://j3812549.github.io/pages/index.html#/vuekeepcachescrollhooks/a


##### 使用

 1. 前置开启keepalive缓存页面

```vue
<template>
  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.path" />
    </keep-alive>
  </RouterView>
</template>
```

 2. 在需要使用的盒子上使用

```vue
<script setup>
import { ref, onMounted } from 'vue'
import useKeepLivePageScroll from 'vue-keep-cache-scroll-hooks'
const box = ref(null)
onMounted(() => {
  useKeepLivePageScroll(box.value)
})
</script>

<template>
  <div ref="box" class="box">
    <div class="item" v-for="i in 100" :key="i">A {{ i }}</div>
  </div>
</template>
```

##### 配置

可传入两个形参

| 参数  |    默认    |         描述         |
| :---: | :--------: | :------------------: |
|  dom  | 无（必传） | 用于触发滚动条的盒子 |
| anime |   false    |   是否使用动画效果   |


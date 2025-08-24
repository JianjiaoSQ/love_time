<template>
  
  <Background>
    <div>
      <h2>{{ provinceName }} 的照片</h2>
      <div v-if="photos.length">
        <img v-for="(photo, idx) in photos" :key="idx" :src="photo" :alt="provinceName + ' photo'"
          style="max-width:200px;margin:10px;" />
      </div>
      <div v-else>暂无照片</div>
    </div>
  </Background>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Background from './Background.vue'

const route = useRoute()
const provinceName = computed(() => route.params.province)
const photos = ref([])

// 省份-照片路径映射, 后面前后端分离后可改为从服务器获取
const provincePhotoMap = {
  '云南省': [
    '/assets/云南省/_DSC2412.png',
    '/assets/云南省/_DSC2412.png',
    '/assets/云南省/_DSC2412.png',
    '/assets/云南省/_DSC2412.png',
    '/assets/云南省/_DSC2412.png',
    // 可继续添加云南省的其他照片
  ],

  // ...可继续添加其他省份
}

onMounted(() => {
  photos.value = provincePhotoMap[provinceName.value] || []
})
</script>

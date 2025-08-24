<template>
  <div class="map-module">
    <v-chart 
      class="china-map" 
      :option="option" 
      autoresize="true"
      @click="onMapClick"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts/core'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { MapChart } from 'echarts/charts'
import { TooltipComponent, VisualMapComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import chinaJson from '../assets/china-full.json'
import { useRouter } from 'vue-router'

use([CanvasRenderer, MapChart, TooltipComponent, VisualMapComponent])

const provinceTips = {
  '云南省': '彩云之南，浪漫与美景的交汇。',
  '广东省': '美食天堂，活力之都。',
  '北京市': '首都北京，历史与现代的融合。',
  '上海市': '魔都上海，繁华与创新的交汇。',
  // ...可继续添加其他省份文案
}

const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      return provinceTips[params.name] || params.name;
    }
  },
  visualMap: {
    min: 0,
    max: 100,
    left: 'left',
    top: 'bottom',
    text: ['高','低'],
    inRange: { color: ['#e0ffff', '#006edd'] },
    show: false
  },
  series: [
    {
      name: '中国地图',
      type: 'map',
      map: 'china',
      roam: true,
      label: { show: true, position: 'center' },
      emphasis: { label: { show: true } },
      data: [],
      layoutCenter: ['45%', '35%'], // 地图中心点
      layoutSize: '350%' // 放大到原来的1.8倍，可根据需要调整
    }
  ]
})


onMounted(() => {
  echarts.registerMap('china', chinaJson)
})

const router = useRouter()

function onMapClick(params) {
  console.log('回调的省份信息：', params); // 查看所有信息
  if (params && params.name) {
    // 跳转到照片列表页面，params.name 为省份名
    router.push({ path: `/photos/${params.name}` })
  }
}
</script>

<style scoped>
.map-module {
  width: 800px;
  max-width: 96vw;
  height: 420px;
  margin: 32px auto 24px auto;
  background: rgba(255,255,255,0.18);
  border-radius: 18px;
  box-shadow: 0 6px 32px 0 rgba(255,182,185,0.13), 0 2px 12px 0 #e0e7ef;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  border: none;
  z-index: 10;
  backdrop-filter: blur(10px) saturate(1.2);
  transition: box-shadow 0.3s, background 0.3s;
}
.map-module:hover {
  box-shadow: 0 12px 36px 0 rgba(255,182,185,0.18), 0 4px 18px 0 #e0e7ef;
  background: rgba(255,255,255,0.28);
}
.china-map {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  background: transparent;
  box-shadow: none;
  transition: box-shadow 0.3s;
}
.china-map:hover {
  box-shadow: 0 4px 18px rgba(0,0,0,0.10);
}
/* 优化滚动条样式（如有） */
::-webkit-scrollbar {
  width: 8px;
  background: #f0f2f5;
}
::-webkit-scrollbar-thumb {
  background: #c1c7d0;
  border-radius: 4px;
}
</style>

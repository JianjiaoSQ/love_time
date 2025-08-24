<template>
  <div class="bg-root">
    <div class="bg-blur-circle circle1"></div>
    <div class="bg-blur-circle circle2"></div>
    <div class="bg-blur-circle circle3"></div>
    <div class="bg-hearts">
      <span v-for="n in hearts" :key="n.id" class="heart" :style="n.style">❤</span>
      <span v-for="b in bubbles" :key="b.id" class="bubble" :style="b.style"></span>
    </div>
    <div class="bg-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const hearts = ref([])
const bubbles = ref([])

function random(min, max) {
  return Math.random() * (max - min) + min
}

onMounted(() => {
  // 爱心动效
  setInterval(() => {
    const id = Date.now() + Math.random()
    const left = random(5, 95)
    const size = random(18, 36)
    const duration = random(2.8, 4.5)
    const delay = 0
    hearts.value.push({
      id,
      style: `left:${left}vw;font-size:${size}px;animation-duration:${duration}s;animation-delay:${delay}s;`
    })
    setTimeout(() => {
      hearts.value = hearts.value.filter(h => h.id !== id)
    }, duration * 1000 + 1000)
  }, 600)
  // 粉红泡泡动效
  setInterval(() => {
    const id = Date.now() + Math.random()
    const left = random(2, 98)
    const size = random(22, 48)
    const duration = random(3.2, 5.2)
    const opacity = random(0.18, 0.32)
    const blur = random(2, 8)
    bubbles.value.push({
      id,
      style: `left:${left}vw;width:${size}px;height:${size}px;opacity:${opacity};filter:blur(${blur}px);animation-duration:${duration}s;`
    })
    setTimeout(() => {
      bubbles.value = bubbles.value.filter(b => b.id !== id)
    }, duration * 1000 + 1000)
  }, 900)
})
</script>

<style scoped>
.bg-root {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%);
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}
.bg-blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.45;
  animation: float 12s ease-in-out infinite alternate;
}
.circle1 {
  width: 420px; height: 420px;
  left: 8vw; top: 10vh;
  background: #a7bfff;
  animation-delay: 0s;
}
.circle2 {
  width: 320px; height: 320px;
  right: 10vw; top: 18vh;
  background: #ffb6b9;
  animation-delay: 2s;
}
.circle3 {
  width: 260px; height: 260px;
  left: 30vw; bottom: 8vh;
  background: #ffe6a7;
  animation-delay: 4s;
}
@keyframes float {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-40px) scale(1.08); }
}
.bg-content {
  position: relative;
  z-index: 1;
  width: 100vw;
  min-height: 100vh;
  pointer-events: auto;
  /* 移除height: 100vh; 让内容自适应高度可滚动 */
}
.bg-hearts {
  pointer-events: none;
  position: fixed;
  left: 0; top: 0; width: 100vw; height: 100vh;
  z-index: 2;
}
.heart {
  position: absolute;
  bottom: 0;
  color: #ff6b81;
  opacity: 0.85;
  animation: heart-float 3.5s linear forwards;
  filter: drop-shadow(0 2px 8px #ffb6b9);
  user-select: none;
  will-change: transform, opacity;
}
@keyframes heart-float {
  0% {
    transform: translateY(0) scale(1) rotate(-8deg);
    opacity: 0.9;
  }
  60% {
    opacity: 1;
    transform: translateY(-60vh) scale(1.12) rotate(8deg);
  }
  100% {
    transform: translateY(-100vh) scale(1.18) rotate(-12deg);
    opacity: 0;
  }
}
.bubble {
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 60% 40%, #fff8, #ffb6b9 60%, #ffe6f7 100%);
  box-shadow: 0 0 18px 6px #ffb6b955, 0 2px 12px #fff4;
  animation: bubble-float 4.2s linear forwards;
  pointer-events: none;
  will-change: transform, opacity;
  border: 1.5px solid #fff3;
  mix-blend-mode: lighten;
}
@keyframes bubble-float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.25;
  }
  60% {
    opacity: 0.32;
    transform: translateY(-60vh) scale(1.08);
  }
  100% {
    transform: translateY(-100vh) scale(1.18);
    opacity: 0;
  }
}
</style>

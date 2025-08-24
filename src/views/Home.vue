<template>
  <Background>
    <div class="title">
      <h1 class="home-title">H❤D恋爱时光机</h1>
    </div>

    <div class="home">
      <ChinaMap />
    </div>

    <div class="letter">
      <h1>致未来的你</h1>
      <p>亲爱的，你好！</p>
      <p>感谢你选择了我，让我成为你的男朋友。</p>
      <p>我会努力成为你最坚强的后盾，保护你，照顾你，爱你。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
      <p>我会努力读书，努力学习，给你一个美好的未来。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
      <p>我会努力读书，努力学习，给你一个美好的未来。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
      <p>我会努力读书，努力学习，给你一个美好的未来。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
      <p>我会努力读书，努力学习，给你一个美好的未来。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
      <p>我会努力读书，努力学习，给你一个美好的未来。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
      <p>我会努力读书，努力学习，给你一个美好的未来。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
      <p>我会努力读书，努力学习，给你一个美好的未来。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
      <p>我会努力读书，努力学习，给你一个美好的未来。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
      <p>我会努力读书，努力学习，给你一个美好的未来。</p>
      <p>我会努力工作，努力赚钱，给你一个幸福的生活。</p>
    </div>

  </Background>
</template>

<script setup>
import Background from './Background.vue'
import ChinaMap from '../components/ChinaMap.vue'
</script>

<style scoped>
.home-title {
  position: absolute;
  top: 32px;
  left: 48px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #3a466e;
  letter-spacing: 2px;
  background: rgba(255,255,255,0.85);
  padding: 6px 22px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  z-index: 201;
  user-select: none;
}
.home {
  position: relative;
  margin: 0 auto 32px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.letter {
  max-width: 520px;
  margin: 48px auto 0 auto;
  background: linear-gradient(135deg, #fff 80%, #f8fafc 100%);
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(255,182,185,0.10), 0 1.5px 0 0 #ffb6b9;
  border: 2.5px solid #ffe6f7;
  padding: 36px 32px 32px 32px;
  position: relative;
  z-index: 10;
  font-family: 'FZKai-Z03', 'STKaiti', 'KaiTi', '楷体', serif;
  color: #d16a7a;
  font-size: 1.18rem;
  line-height: 2.1;
  letter-spacing: 1.2px;
  transition: box-shadow 0.3s;
  backdrop-filter: blur(2px);
}
.letter h1 {
  font-size: 1.45rem;
  font-weight: bold;
  color: #ff6b81;
  margin-bottom: 18px;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px #ffe6f7;
}
.letter p {
  margin: 0 0 10px 0;
  text-indent: 2em;
  word-break: break-all;
}
.letter:before {
  content: '';
  position: absolute;
  left: 18px; top: 18px;
  width: 32px; height: 32px;
  background: url('https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f48c.png') no-repeat center/cover;
  opacity: 0.18;
}
.letter:after {
  content: '';
  position: absolute;
  right: 18px; bottom: 18px;
  width: 32px; height: 32px;
  background: url('https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f49e.png') no-repeat center/cover;
  opacity: 0.18;
}
</style>

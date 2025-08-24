import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  base: mode === 'production' ? '/love_time/' : '/',
  server: {
    watch: {
      usePolling: true,
      interval: 100
    }
  }
}))

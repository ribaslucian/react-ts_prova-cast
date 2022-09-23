import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/react-ts_prova-cast/',
  plugins: [react()],
  build: {
    outDir: 'public',
    // assetsDir: './',
    cors: false
  },
  server: {
    cors: false
  },
  preview: {
    cors: false
  }
})

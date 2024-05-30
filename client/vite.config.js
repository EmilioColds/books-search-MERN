import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3031,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3031',
        secure: false,
        changeOrigin: true
      }
    }
  }
})

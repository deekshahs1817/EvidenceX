import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // ✅ IMPORTANT for GitHub Pages
  base: "/EvidenceX/",

  server: {
    proxy: {
      '/api/cctv': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
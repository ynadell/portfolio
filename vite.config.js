import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ynadell.github.io/', // This is important for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}) 
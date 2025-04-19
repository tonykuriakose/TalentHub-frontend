import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@core': path.resolve(__dirname,"src/core"),
      '@assets':path.resolve(__dirname,"src/assets")
    }
  },
  server: {
    port: 3000
  }
})

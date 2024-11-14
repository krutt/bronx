/* ~~/vite.config.js */

import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  css: {
    postcss: {
      plugins: [autoprefixer(), tailwindcss()],
    },
  },
  plugins: [react()],
})

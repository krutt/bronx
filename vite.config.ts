/* ~~/vite.config.ts */

import { URL, fileURLToPath } from 'node:url'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  base: '/bronx/',
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [react()],
  publicDir: fileURLToPath(new URL('./static', import.meta.url)),
})

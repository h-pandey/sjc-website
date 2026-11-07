import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { staticPages } from './build/static-pages.ts'

// Served from the root of its own domain (www.sjcprojects.in on GitHub Pages),
// so the default base '/' is correct.
export default defineConfig({
  plugins: [react(), tailwindcss(), staticPages()],
  server: {
    port: 5174,
    strictPort: true,
  },
})

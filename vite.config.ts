import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves a project site under /<repo-name>/; Actions sets GITHUB_REPOSITORY to owner/repo.
const pagesBase = `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'sjc-website'}/`

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? pagesBase : '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
    strictPort: true,
  },
})

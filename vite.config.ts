import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Client-side routes. GitHub Pages only serves real files, so each route gets its own copy of
// index.html (and 404.html catches anything else) so links like /book work when opened directly.
const ROUTES = ['book', 'library']

function spaRoutes(): Plugin {
  return {
    name: 'spa-routes',
    apply: 'build',
    closeBundle() {
      const out = 'dist'
      for (const route of ROUTES) {
        mkdirSync(join(out, route), { recursive: true })
        copyFileSync(join(out, 'index.html'), join(out, route, 'index.html'))
      }
      copyFileSync(join(out, 'index.html'), join(out, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaRoutes()],
  server: { host: true },
})

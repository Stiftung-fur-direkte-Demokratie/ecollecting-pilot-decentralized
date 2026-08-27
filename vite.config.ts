import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // LINDAS erlaubt keine Cross-Origin-Abfragen aus dem Browser; im
      // Dev-Betrieb läuft die SPARQL-Abfrage darum über diesen Proxy.
      '/lindas': {
        target: 'https://lindas.admin.ch',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lindas/, ''),
      },
    },
  },
})

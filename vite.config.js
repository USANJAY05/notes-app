import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Notes App',
        short_name: 'Notes',
        description: 'A simple notes app',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/favicon.png',
            sizes: '16x16 32x32 48x48',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    host: true,  // Exposes the server on your network
    port: 5173,  // You can change the port if needed
  },
})

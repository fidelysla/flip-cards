import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    // Si usas React o Vue, añade aquí sus respectivos plugins, ej: react(), vue()
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon.png'],
      manifest: {

        name: 'Flip Cards - Aprende japonés desde cero',
        short_name: 'Flip Cards',
        description: 'Aprende japonés desde cero con FlipCards interactivas de Hiragana, Katakana y Kanji. Ideal para principiantes.',
        theme_color: '#2F4A62',
        background_color: '#1e1e1e',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './?utm_source=web_app_manifest',
        scope: '/',
        lang: 'es-LA',
        icons: [
          {
            src: 'icon-1024.png',
            sizes: '1024x1024',
            type: 'image/png'
          },
          {
            src: 'maskable-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'maskable-icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        //   {
        //     src: 'icon_384.png',
        //     sizes: '384x384',
        //     type: 'image/png'
        //   },
        //   {
        //     src: 'icon-256.png',
        //     sizes: '256x256',
        //     type: 'image/png'
        //   },
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
        //   {
        //     src: 'icon-128.png',
        //     sizes: '128x128',
        //     type: 'image/png'
        //   },
        //   {
        //     src: 'icon-96.png',
        //     sizes: '96x96',
        //     type: 'image/png'
        //   },
        //   {
        //     src: 'icon-64.png',
        //     sizes: '64x64',
        //     type: 'image/png'
        //   },
        //   {
        //     src: 'icon-32.png',
        //     sizes: '32x32',
        //     type: 'image/png'
        //   }
        ]

      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'], // Extensiones que se guardarán para uso offline
        navigateFallback: '/index.html'
      },
      devOptions: {
        enabled: true // Permite probar la PWA también en modo desarrollo
      }
    })
  ]
})
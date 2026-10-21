import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { VitePWA } from 'vite-plugin-pwa'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: fileURLToPath(new URL('./src/locales/**', import.meta.url)),
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true
    }),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt',
      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
            },
      injectRegister: false,
      pwaAssets: {
        disabled: false,
        preset: 'all',
        image: 'public/logo.svg',
        config: true,
        overrideManifestIcons: true, // let the generator write manifest.icons
      },
      manifest: {
        name: 'Orderyn Office',
        short_name: 'Orderyn Office',
        description: 'Orderyn Office for orderyn\'s employee',
        theme_color: '#ffffff',
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

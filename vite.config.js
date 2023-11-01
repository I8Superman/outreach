import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

import autoprefixer from 'autoprefixer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  css: {
    // Import and make variables and mixins global (= no need to import them in every component)
    // This is a special case ONLY for non-standard css, like varibales, mixins and the like, because the Vue
    // components cannot access the non-processed custom properties normally (you can still import them in every component, though).
    // Normal css declarations are globally available in the normal wat by simply being imported in main.js. 
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer
      ]
    }
  },
  // This is where ability to write file paths from the root using '@' is created: 
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

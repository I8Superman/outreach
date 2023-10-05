import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Lets us use a css/scss stylesheet globally, accessing its 
  // variables without importing it in every single component.
  // The '@use ... as v' lets us access the variables by writing v.$variable-name
  // instead of global.$variable-name. Makes it easy to see it's a variable!
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/global.scss";`,
      },
    },
  },
  plugins: [
    vue(),
  ],
  // This is where ability to write file paths from the root using '@' is created: 
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

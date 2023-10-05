import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Set variables.scss to be accessible globally here.
  // This can ONLY include SCSS code that doens't get rendered (variables, mixins, functions)!
  // If we put normal (S)CSS rules in the file made accessible here, it will be repeated
  // in the compiled stylesheet for EVERY component, bloating the file.
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
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

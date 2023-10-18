import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// postcss-import is already built into Vite - or is it?

import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  css: {
    postcss: {
      plugins: [ // How do I add options to the postcss plugins when registered inline like this?
        postcssNested,
        autoprefixer
      ],
    },
  },
  // This is where ability to write file paths from the root using '@' is created: 
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

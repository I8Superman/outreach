import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// postcss-import is already built into Vite - or is it?

import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
// Is this the correct way to import PostCss Simple Vars plugin?:
import postcssSimpleVars from 'postcss-simple-vars';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  css: {
    // Is this the correct (inline) way to setup PostCSS plugins and add options?
    // Should I use a postcss.config.js file instead?
    postcss: {
      plugins: [
        postcssNested({ /* options */ }),
        autoprefixer({ /* options */ }),
        postcssSimpleVars
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

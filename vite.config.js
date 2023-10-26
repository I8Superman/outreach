import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import postcssMixins from 'postcss-mixins';
// import postcssSimpleVars from 'postcss-simple-vars';
// import postcssNested from 'postcss-nested';
// import autoprefixer from 'autoprefixer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  // css: {
  //   postcss: {
  //     plugins: [
  //       postcssMixins(),
  //       postcssSimpleVars(),
  //       postcssNested({ /* options */ }),
  //       autoprefixer({ /* options */ }),
  //     ],
  //   },
  // },
  // This is where ability to write file paths from the root using '@' is created: 
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

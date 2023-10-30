// Import global stylesheet here as normal. 
// SCSS variables, mixins and functions are all put in a seperate variables.scss 
// file made globally accessible in the vite.config.js file (see that file for more info).
import './assets/styles/global.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

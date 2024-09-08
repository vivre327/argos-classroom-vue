import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'  // SCSS 파일 import

const app = createApp(App)

app.use(router)
app.mount('#app')

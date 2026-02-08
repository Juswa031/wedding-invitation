import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Global elegant wedding typography
import './styles/global.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(router) // On utilise Vue Router

app.mount('#app')







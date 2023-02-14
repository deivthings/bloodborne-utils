import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router.js'
import './style.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import App from './App.vue'
import '@purge-icons/generated'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')

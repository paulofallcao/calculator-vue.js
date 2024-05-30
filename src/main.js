import { createApp } from 'vue'
import { createPinia, defineStore } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia(defineStore))
app.mount('#app')

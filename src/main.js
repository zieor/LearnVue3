import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Example1 from '@/components/Example1.vue'

const app = createApp(App)

app.component('Example1', Example1)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/plugins/vuex/store'

createApp(App)
    .use(store)
    .mount('#app')

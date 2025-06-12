// import './assets/main.css'
import './assets/my.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import 'bootstrap/dist/css/bootstrap.min.css'
import VSelect from "vue3-select";
import "vue3-select/dist/vue3-select.css";
app.component('v-select', VSelect)
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
app.use(router)

app.mount('#app')

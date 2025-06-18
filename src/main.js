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
import axios from 'axios'
     import 'bootstrap-icons/font/bootstrap-icons.css'
app.config.globalProperties.$axios = axios
app.config.globalProperties.$axios.interceptors.request.use(req => {
  req.headers.authorization = "Bearer " + localStorage.getItem("token");
  req.headers['content-type'] = "application/json";
  req.headers["Accept-Language"] = "uz";
  return req;
});
app.config.globalProperties.$axios.defaults.baseURL='http://185.76.13.223:3084/';
app.use(router)

app.mount('#app')

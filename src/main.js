import { createApp } from 'vue'
import App from './App.vue'

// import router from './router'
// import store from './store'
import 'normalize.css'
import 'css-spinners/dist/all.min.css'
import 'font-awesome/scss/font-awesome.scss'
import 'animate.css'
import Maska from 'maska'

// store.dispatch('auth/checkUser')
createApp(App)
    .use(Maska)
    // .use(store)
    // .use(router)
    .mount('#app')
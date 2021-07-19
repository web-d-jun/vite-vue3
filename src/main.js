import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSun, faMoon, faHome)

const app = createApp(App)
app.use(Router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

import { createApp, popScopeId } from 'vue'
import App from './App.vue'
import Router from '@/router/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSun, faMoon, faHome, faChevronRight)

import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const app = createApp(App)
app.use(Router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

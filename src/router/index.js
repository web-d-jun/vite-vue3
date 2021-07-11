import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/TheHeader.vue'

const routes = [
    { path: '/', redirect: '/main' },
    { path: '/main', component: HelloWorld },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

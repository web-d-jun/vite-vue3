<template>
    <TheHeader />
    <AppMenu />
    <!-- <router-view></router-view> -->
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import LoadingComponent from 'components/AppLoading.vue'
import ErrorComponent from 'components/AppError.vue'

const TheHeader = defineAsyncComponent({
    loader: () => import('components/TheHeader.vue'),
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
})
const AppMenu = defineAsyncComponent({
    loader: () => import('components/AppMenu.vue'),
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
})
</script>

<style>
@import '@/scss/root.scss';
body,
html {
    margin: 0;
    font-size: 62.5%;
}
body.dark {
    background-color: #1e1f21;
}
body.bright {
    background-color: #f4f2f5;
}
* {
    box-sizing: border-box;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
}
#menuContainer {
    padding: 15px 0;
}
</style>


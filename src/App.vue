<template>
  <TheHeader />
  <AppMenu />
  <div class="router-view__container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { defineAsyncComponent, inject } from 'vue'

const TheHeader = defineAsyncComponent({
  loader: () => import('components/TheHeader.vue'),
  loadingComponent: inject('LoadingComponent'),
  errorComponent: inject('ErrorComponent'),
})
const AppMenu = defineAsyncComponent({
  loader: () => import('components/AppMenu.vue'),
  loadingComponent: inject('LoadingComponent'),
  errorComponent: inject('ErrorComponent'),
})
</script>

<style lang="scss">
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
.router-view__container {
  margin-left: $menuContainerWidth;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
</style>


<template>
  <div id="dashboardContainer">
    
    <div class="chart-bar__container">
      <AppChart :chartData="chartData.value" :labels="['치킨', '피자', '햄버거', '라면', '자장면', '돈가스', '국밥', '된장찌개']" />
    </div>
  </div>
</template>
<script setup>
import { defineAsyncComponent, inject, reactive } from 'vue'
const AppChart = defineAsyncComponent({
  loader: () => import('components/AppChart.vue'),
  loadingComponent: inject('LoadingComponent'),
  errorComponent: inject('ErrorComponent'),
})
const chartData = reactive({
  value: [
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
  ],
})
setInterval(() => {
  chartData.value = [
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
  ]
}, 5000)
</script>
<style lang="scss" scoped>
#dashboardContainer {
  width: 100%;
  .chart-bar__container {
    width: 400px;
    height: 400px;
    border: 1px solid var(--default-color);
  }
}
</style>
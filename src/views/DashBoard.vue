<template>
  <div id="dashboardContainer">
    <div class="chart-bar__container">
      <canvas id="chartBar" width="400" height="400"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { Chart } from 'chart.js'
const loadChart = (datas) => {
  const ctx = document.querySelector('#chartBar')
  const chartBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['치킨', '피자', '햄버거', '라면', '자장면', '돈가스', '국밥', '된장찌개'],
      datasets: [
        {
          label: '# of Votes',
          data: datas,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(28, 224, 255, 0.2)',
            'rgba(255, 28, 125, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(28, 224, 255, 1)',
            'rgba(255, 28, 125, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  })
}
onMounted(() => {
  loadChart()
  setInterval(() => {

  },5000)
})
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
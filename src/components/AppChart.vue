<template>
  <canvas id="chartBar" width="400" height="400"></canvas>
</template>
<script>
import { defineComponent, onMounted, toRefs, watch } from 'vue'

import { Chart } from 'chart.js'
export default defineComponent({
  props: {
    chartData: Array,
    labels: Array,
  },
  setup(props) {
    const { chartData, labels } = toRefs(props)

    let chartBar
    const loadChart = () => {
      const ctx = document.querySelector('#chartBar')
      chartBar = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels.value,
          datasets: [
            {
              label: '# of Votes',
              data: chartData.value,
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
    const setChartInfo = () => {
      chartBar.data.datasets[0].data = chartData.value
      chartBar.update()
    }
    watch(chartData, () => {
      setChartInfo()
    })
    onMounted(() => {
      loadChart()
    })
  },
})
</script>
<style lang="scss" scoped>
</style>
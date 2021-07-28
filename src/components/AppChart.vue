<template>
  <canvas :id="chartId"></canvas>
</template>
<script>
import { defineComponent, onMounted, toRefs, watch } from 'vue'

import { Chart } from 'chart.js'
export default defineComponent({
  props: {
    config: {},
    chartData: {},
    chartId: String,
  },
  setup(props) {
    const { chartId, config, chartData } = toRefs(props)
    const chartConfig = config.value

    let chart
    const loadChart = () => {
      const ctx = document.querySelector(`#${chartId.value}`)
      chart = new Chart(ctx, {
        ...chartConfig,
      })
    }
    const setChartInfo = () => {
      chart.data.datasets[0].data = chartData.value
      chart.update()
    }
    watch(chartData, () => {
      setChartInfo()
    })
    onMounted(() => {
      loadChart()
    })
    return {
      chartId,
    }
  },
})
</script>
<style lang="scss" scoped>
</style>
<template>
  <div id="dashboardContainer">
    <div class="chart-container__wrap">
      <div class="chart__container">
        <AppChart chartId="chartBar" :config="barCartConfig" :chartData="barChartInitData.value" />
      </div>
    </div>

    <div class="chart-container__wrap">
      <div class="chart__container">
        <AppChart chartId="chartLine" :config="lineCartConfig" :chartData="lineChartInitData.value" />
      </div>
    </div>

    <div class="chart-container__wrap">
      <div class="chart__container radar">
        <AppChart chartId="chartRadar" :config="radarChartConfig" :chartData="radarChartInitData.value" />
      </div>
    </div>
    <div class="chart-container__wrap">
      <div class="chart__container pie">
        <AppChart chartId="chartPie" :config="pieChartConfig" :chartData="pieChartInitData.value" />
      </div>
    </div>
    <div class="chart-container__wrap">
      <div class="chart__container radar">
        <AppChart chartId="chartAniLine" :config="aniLineChartConfig" :chartData="aniLineChartInitData.value" />
      </div>
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

const barChart = () => {
  const barChartInitData = reactive({
    value: [
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
    ],
  })
  const barCartConfig = {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      datasets: [
        {
          label: '# of Votes',
          data: barChartInitData.value,
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
  }

  setInterval(() => {
    barChartInitData.value = [
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
    ]
  }, 5000)

  return {
    barCartConfig,
    barChartInitData,
  }
}

const lineChart = () => {
  const lineChartInitData = reactive({
    value: [
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
    ],
  })
  const lineCartConfig = {
    type: 'line',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      datasets: [
        {
          label: '# of Votes',
          data: lineChartInitData.value,
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
  }

  setInterval(() => {
    lineChartInitData.value = [
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
    ]
  }, 5000)

  return {
    lineCartConfig,
    lineChartInitData,
  }
}

const radarChart = () => {
  const radarChartInitData = reactive({
    value: [
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
    ],
  })
  const radarChartConfig = {
    type: 'radar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      datasets: [
        {
          label: '# of Votes',
          data: radarChartInitData.value,
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
  }

  setInterval(() => {
    radarChartInitData.value = [
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
    ]
  }, 5000)

  return {
    radarChartConfig,
    radarChartInitData,
  }
}

const pieChart = () => {
  const pieChartInitData = reactive({
    value: [
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
    ],
  })
  const pieChartConfig = {
    type: 'pie',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      datasets: [
        {
          label: '# of Votes',
          data: pieChartInitData.value,
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
  }

  setInterval(() => {
    pieChartInitData.value = [
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
      Math.random() * 1000,
    ]
  }, 5000)

  return {
    pieChartConfig,
    pieChartInitData,
  }
}

const aniLineChart = () => {
  const data = reactive({
    value: [],
  })
  const data2 = reactive({
    value: [],
  })

  let prev = 100
  let prev2 = 80
  for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10
    data.value.push({ x: i, y: prev })
    prev2 += 5 - Math.random() * 10
    data2.value.push({ x: i, y: prev2 })
  }
  const totalDuration = 10000
  const delayBetweenPoints = totalDuration / data.value.length
  const previousY = (ctx) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y
  const animation = {
    x: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.xStarted) {
          return 0
        }
        ctx.xStarted = true
        return ctx.index * delayBetweenPoints
      },
    },
    y: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.yStarted) {
          return 0
        }
        ctx.yStarted = true
        return ctx.index * delayBetweenPoints
      },
    },
  }
  const aniLineChartConfig = {
    type: 'line',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      datasets: [
        {
          borderColor: 'red',
          borderWidth: 1,
          radius: 0,
          data: data.value,
        },
        {
          borderColor: 'blue',
          borderWidth: 1,
          radius: 0,
          data: data2.value,
        },
      ],
    },
    options: {
      animation,
      interaction: {
        intersect: false,
      },
      plugins: {
        legend: false,
      },
      scales: {
        x: {
          type: 'linear',
        },
      },
    },
  }

  const aniLineChartInitData = reactive({
    value: [],
  })
  setInterval(() => {
    const data = []
    const data2 = []

    for (let i = 0; i < 1000; i++) {
      prev += 5 - Math.random() * 10
      data.push({ x: i, y: prev })
      prev2 += 5 - Math.random() * 10
      data2.push({ x: i, y: prev2 })
    }
    data.value = data
    data2.value = data2
    aniLineChartInitData.value = [data.value, data2.value]
  }, 5000)

  return {
    aniLineChartConfig,
    aniLineChartInitData,
  }
}

const { barCartConfig, barChartInitData } = barChart()
const { lineCartConfig, lineChartInitData } = lineChart()
const { radarChartConfig, radarChartInitData } = radarChart()
const { pieChartConfig, pieChartInitData } = pieChart()
const { aniLineChartConfig, aniLineChartInitData } = aniLineChart()
</script>
<style lang="scss" scoped>
#dashboardContainer {
  width: 100%;
  display: grid;
  .chart-container__wrap {
    flex: 1;
    padding: 4px;
    & .chart__container {
      width: 500px;
      height: 300px;
      border: 1px solid var(--default-color);
      border-radius: 10px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      &.radar,
      &.pie {
        height: 500px;
      }
    }
  }
}
</style>
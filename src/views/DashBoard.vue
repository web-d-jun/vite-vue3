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
      <div class="chart__container radar">
        <AppChart chartId="pie" :config="radarChartConfig" :chartData="radarChartInitData.value" />
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

const { barCartConfig, barChartInitData } = barChart()
const { lineCartConfig, lineChartInitData } = lineChart()
const { radarChartConfig, radarChartInitData } = radarChart()
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
      &.radar {
        height: 500px;
      }
    }
  }
}
</style>
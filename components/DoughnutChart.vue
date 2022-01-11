<template>
  <canvas id="doughnut-chart" class="doughnut-chart"></canvas>
</template>

<script>
import Chart from "~/node_modules/chart.js/dist/chart.js";

export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.setChart();
  },
  methods: {
    setChart() {
      const ctx = document.getElementById("doughnut-chart");

      const data = {
        datasets: [
          {
            data: [65, 35],
            backgroundColor: [
              "rgba(255, 255, 255, 0.2)",
              "rgba(40, 255, 113, 1)",
            ],
            borderWidth: 0,
          },
        ],
      };

      this.chart = new Chart(ctx, {
        type: "doughnut",
        data: data,
        options: {
          cutout: "85%",
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.doughnut-chart {
  pointer-events: none;
}
</style>

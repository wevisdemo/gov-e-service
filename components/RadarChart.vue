<template>
  <div class="radar-chart">
    <div class="circle top b2">OSI</div>

    <div class="circle left b2">HCI</div>

    <div class="circle right b2">TII</div>

    <canvas id="radar-chart"></canvas>
  </div>
</template>

<script>
import _ from "lodash";
import Chart from "~/node_modules/chart.js/dist/chart.js";

export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  mounted() {
    this.setChart();
  },
  methods: {
    setChart() {
      const ctx = document.getElementById("radar-chart");

      const data = {
        labels: ["OSI", "HCI", "TII"],
        datasets: _.map(this.data, (d) => {
          return {
            data: [d.osi, d.hci, d.tii],
            borderWidth: d["Country Name"] === "Thailand" ? 4 : 2,
            borderColor:
              d["Country Name"] === "Thailand"
                ? "rgba(40, 255, 113, 1)"
                : "rgba(255, 255, 255, 0.05)",
            fill: "",
            pointHoverRadius: 0,
            pointRadius: 0,
          };
        }),
      };

      new Chart(ctx, {
        type: "radar",
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          elements: {},
          scales: {
            r: {
              pointLabels: {
                display: false,
              },
              angleLines: {
                lineWidth: 2,
                color: "black",
              },
              ticks: {
                color: "white",
                backdropColor: "transparent",
                stepSize: 0.2,
                font: {
                  size: 14,
                  family: "'Anuphan', sans-serif",
                },
              },
            },
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.radar-chart {
  width: 650px;
  height: 525px;
  margin: 90px auto 0 auto;
  position: relative;
  .circle {
    position: absolute;
    width: 50px;
    height: 50px;
    background: black;
    border-radius: 100%;
    font-weight: bold;
    color: white;
    line-height: 50px;
  }
  .circle.top {
    top: -56px;
    left: 50%;
    transform: translateX(-50%);
  }
  .circle.left {
    bottom: 0;
    left: 0;
  }
  .circle.right {
    bottom: 0;
    right: 0;
  }
}
</style>

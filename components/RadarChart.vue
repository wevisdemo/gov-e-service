<template>
  <div class="radar-chart">
    <div class="circle top b2">OSI</div>

    <div class="circle left b2">HCI</div>

    <div class="circle right b2">TII</div>

    <div class="tooltip-wrap thailand">
      <div class="tooltip">
        <div class="b1">
          <b>{{ thailand_data["Country Name"] }}</b>
        </div>

        <div class="b4">
          OSI : <b>{{ thailand_data.osi }}</b>
        </div>

        <div class="b4">
          TII : <b>{{ thailand_data.tii }}</b>
        </div>

        <div class="b4">
          HCI : <b>{{ thailand_data.hci }}</b>
        </div>
      </div>
    </div>

    <div v-if="select_country_data" class="tooltip-wrap select-country">
      <div class="tooltip">
        <div class="b1">
          <b>{{ select_country_data["Country Name"] }}</b>
        </div>

        <div class="b4">
          OSI : <b>{{ select_country_data.osi }}</b>
        </div>

        <div class="b4">
          TII : <b>{{ select_country_data.tii }}</b>
        </div>

        <div class="b4">
          HCI : <b>{{ select_country_data.hci }}</b>
        </div>
      </div>
    </div>

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
    select_country: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.setChart();
  },
  computed: {
    thailand_data() {
      const res = _.find(this.data, (d) => d["Country Name"] === "Thailand");
      return res || {};
    },
    select_country_data() {
      const res = _.find(
        this.data,
        (d) => d["Country Name"] === this.select_country
      );
      return res;
    },
  },
  watch: {
    select_country() {
      const datasets = _.map(this.data, (d) => {
        return {
          data: [d.osi, d.hci, d.tii],
          borderWidth: d["Country Name"] === "Thailand" ? 4 : 2,
          borderColor:
            d["Country Name"] === "Thailand"
              ? "rgba(40, 255, 113, 1)"
              : d["Country Name"] === this.select_country
              ? "rgba(255, 255, 255, 1)"
              : "rgba(255, 255, 255, 0.05)",
          fill: "transparent",
          pointHoverRadius: 0,
          pointRadius: 0,
        };
      });

      this.chart.data.datasets = datasets;
      this.chart.update();
    },
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

      this.chart = new Chart(ctx, {
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
  .tooltip-wrap {
    position: absolute;
    .tooltip {
      padding: 10px 20px;
      text-align: left;
      background: white;
      color: black;
      position: relative;
      .b1 {
        margin-bottom: 4px;
      }
    }
    .tooltip::after {
      content: "";
      position: absolute;
      border-style: solid;
      border-width: 18px 15px 0 0;
      border-color: white transparent transparent transparent;
      bottom: -18px;
      left: 0;
      transform: f;
    }
  }
  .tooltip-wrap.thailand {
    left: 0;
    top: 0;
    .tooltip {
      background: $color-green;
    }
    .tooltip::after {
      border-color: transparent $color-green transparent transparent;
      right: 0;
      left: unset;
      border-width: 0 15px 18px 0;
    }
  }
  .tooltip-wrap.select-country {
    right: 0;
    top: 0;
  }
}
</style>

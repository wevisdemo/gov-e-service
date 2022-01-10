<template>
  <div class="point-chart">
    <div class="b1">
      <b>{{ title }}</b>
    </div>

    <div class="bar">
      <div
        v-for="(item, index) in 11"
        :key="`x_${index}`"
        :class="{
          x: true,
          'is-first': index === 0,
          'is-last': index === 10,
        }"
      >
        <div class="b4">{{ index / 10 }}</div>

        <div class="line"></div>
      </div>

      <div
        :style="{ bottom: `${world_average * 10 * 38}px` }"
        class="x average"
      >
        <div class="b4">{{ world_average.toFixed(2) }}</div>

        <div class="line"></div>
      </div>

      <div :style="{ bottom: `${sea_average * 10 * 38}px` }" class="x average">
        <div class="b4">{{ sea_average.toFixed(2) }}</div>

        <div class="line dashed"></div>
      </div>

      <el-popover
        v-for="(item, index) in data"
        :key="`p_${index}`"
        :value="
          (item['Country Name'] === 'Thailand' ||
            item['Country Name'] === select_country) &&
          render_tooltip
        "
        :placement="item['Country Name'] === 'Thailand' ? 'left' : 'right'"
        trigger="manual"
        :style="{ bottom: `${item[value_key] * 10 * 38}px` }"
        :popper-class="`point-popover${
          item['Country Name'] === 'Thailand' ? ' is-thai' : ''
        }`"
        :class="{
          point: true,
          'is-thai': item['Country Name'] === 'Thailand',
        }"
      >
        <div class="b2">
          อันดับ
          <b>{{
            item["Country Name"] === "Thailand"
              ? thailand_data[rank_key]
              : item[rank_key]
          }}</b>
        </div>

        <div class="b1">
          <b>{{ item["Country Name"] }}</b>
        </div>

        <div class="b3">
          {{
            item["Country Name"] === "Thailand"
              ? thailand_data[value_key]
              : item[value_key]
          }}
        </div>

        <div slot="reference"></div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    title: {
      type: String,
      default: "",
    },
    value_key: {
      type: String,
      default: "",
    },
    rank_key: {
      type: String,
      default: "",
    },
    world_average: {
      type: Number,
      default: 0,
    },
    sea_average: {
      type: Number,
      default: 0,
    },
    select_country: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      render_tooltip: false,
    };
  },
  computed: {
    thailand_data() {
      const res = _.find(this.data, (d) => d["Country Name"] === "Thailand");
      return res || {};
    },
  },
  mounted() {
    this.render_tooltip = true;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.point-chart {
  .bar {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    margin-top: 10px;
    .x {
      display: flex;
      align-items: center;
      opacity: 0.5;
      height: 38px;
      .b4 {
        width: 30px;
        margin-right: 5px;
        text-align: right;
        color: $color-purple;
      }
      .line {
        width: 350px;
        border: 1px solid $color-purple;
      }
    }
    .x.is-first,
    .x.is-last {
      opacity: 1;
      .b4 {
        font-weight: bold;
      }
    }
    .average {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      .b4 {
        color: $color-green;
      }
      .line {
        border: 1px solid $color-green;
      }
      .line.dashed {
        border: 1px dashed $color-green;
      }
    }
    .point {
      position: absolute;
      width: 11px;
      height: 11px;
      border-radius: 100%;
      background: rgba(255, 255, 255, 0.2);
      left: 35px;
      right: 0;
      margin: 0 auto;
      bottom: 0;
    }
    .point.is-thai {
      z-index: 1;
      background: $color-green;
      border: 1px solid black;
    }
  }
}
</style>

<style lang="scss">
.point-popover {
  border: none;
  border-radius: 0;
  color: black;
  .b3 {
    color: rgba(0, 0, 0, 0.6);
  }
}
.point-popover.is-thai {
  background: black;
  color: white;
  .b2 {
    color: $color-green;
  }
  .b3 {
    color: rgba(255, 255, 255, 0.6);
  }
  .popper__arrow {
    border-left-color: black;
  }
  .popper__arrow::after {
    border-left-color: black;
  }
}
</style>

<template>
  <div class="step-review">
    <div class="legend-wrap">
      <div class="b2"><b>ช่องทางเข้าถึง</b></div>

      <div class="type-wrap">
        <div v-for="(legend, index) in legends" :key="index" class="type b2">
          <img :src="legend.image" :alt="legend.image" />

          {{ legend.name }}
        </div>
      </div>

      <div class="b4">
        *บางธุรกรรมมีมากกว่า 1 ช่องทาง
        แต่เราเลือกนำเสนอเฉพาะช่องทางที่คิดว่าสะดวกที่สุด
      </div>
    </div>

    <div class="hint b2">คลิกแต่ละแถวเพื่อดูรายละเอียดขั้นตอน</div>

    <div class="step-wrap">
      <div
        v-for="(review, review_index) in review_data"
        :key="review_index"
        class="step"
      >
        <div class="title">
          <div class="b2">
            <b>{{ review.name }}</b>
          </div>

          <img :src="review.image" :alt="review.image" />
        </div>

        <div
          v-for="(data, data_index) in review.data"
          :key="data_index"
          class="detail"
          @click="selectStep(data)"
        >
          <div class="b3 label">{{ data.sub_categories }}</div>

          <div v-if="data.images.length > 0" class="images">
            <img
              v-for="(image, image_index) in data.images"
              :key="image_index"
              :src="image.path"
              :alt="image.path"
              :class="image.type"
            />
          </div>

          <div v-else class="b2 no-image">
            ไม่มีการใช้บัตรประชาชนแล้ว ให้ใช้passportแทน
          </div>
        </div>
      </div>
    </div>

    <div v-if="show_step_detail" class="step-detail">
      <div class="container">
        <img
          :src="back_icon"
          :alt="back_icon"
          class="btn-back"
          @click="show_step_detail = false"
        />

        <div class="content">
          <h5>{{ step_detail.service_name }}</h5>

          <div class="h7">{{ step_detail.sub_categories }}</div>

          <div class="b1 channel">{{ step_detail_emoji.text }}</div>

          <div
            v-for="(image, index) in step_detail_images"
            :key="index"
            class="step"
          >
            <div class="b1">{{ index + 1 }}. {{ image.text }}</div>

            <img :src="image.path" :alt="image.path" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    legends: {
      type: Array,
      default: () => {
        return [];
      },
    },
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    icon_path: {
      type: String,
      default: "",
    },
    image_path: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      review_data: [],
      show_step_detail: false,
      step_detail: {},
      back_icon: require("~/assets/images/back.png"),
    };
  },
  watch: {
    data: {
      immediate: true,
      handler() {
        this.setReviewData();
      },
    },
  },
  computed: {
    step_detail_images() {
      return _.filter(this.step_detail.images, (i) => i.type === "image");
    },
    step_detail_emoji() {
      return _.find(this.step_detail.images, (i) => i.type === "emoji");
    },
  },
  methods: {
    selectStep(data) {
      if (data.images.length < 1) return;
      this.show_step_detail = true;
      this.step_detail = data;
    },
    setReviewData() {
      this.review_data = [];
      const obj = _.groupBy(this.data, "service_name");

      for (const property in obj) {
        const id = obj[property][0].service_id.split("_")[0];
        const data = [];

        obj[property].forEach((d) => {
          const no_empty_obj = _.omitBy(d, _.isEmpty);
          const keys = [
            "channel",
            "emoji",
            "service_id",
            "service_name",
            "sub_categories",
          ];
          const img_obj = _.omit(no_empty_obj, keys);
          const service_obj = _.pick(no_empty_obj, keys);
          const images = [];
          let img_id = 0;

          for (const img_property in img_obj) {
            const type = `${d.emoji}`.includes(`${img_id}`) ? "emoji" : "image";
            const path = require(`~/assets/images/${this.image_path}/${d.service_id}/${img_id}.jpg`);
            images.push({ type, text: img_obj[img_property], path });
            img_id++;
          }

          data.push({ images, ...service_obj });
        });

        this.review_data.push({
          name: obj[property][0].service_name,
          image: require(`~/assets/images/${this.icon_path}/${id}.png`),
          data,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.step-review {
  .legend-wrap {
    width: fit-content;
    padding: 20px;
    border: 1px dashed rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    margin: 0 auto;
    .b2 {
      color: rgba(255, 255, 255, 0.8);
    }
    .type-wrap {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      .type {
        color: rgba(255, 255, 255, 0.8);
        margin: 0 12px;
        img {
          height: 20px;
          margin-right: 8px;
        }
      }
    }
    .b4 {
      margin-top: 6px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .hint {
    color: $color-green;
    margin-top: 40px;
  }
  .step-wrap {
    max-width: 850px;
    margin: 40px auto 0 auto;
    .step {
      .title {
        display: flex;
        align-items: center;
        padding: 12px 0;
        .b2 {
          width: 200px;
          text-align: right;
          margin-right: 20px;
          flex: none;
        }
        img {
          width: 40px;
        }
      }
      .detail {
        display: flex;
        align-items: center;
        padding: 12px 0;
        cursor: pointer;
        .label {
          color: rgba(255, 255, 255, 0.7);
          width: 200px;
          text-align: right;
          margin-right: 20px;
          flex: none;
        }
        .images {
          display: flex;
          flex: 1;
          img {
            margin: 0 3px;
            width: 30px;
            height: 20px;
          }
          .image {
            object-fit: cover;
          }
        }
        .no-image {
          color: rgba(255, 255, 255, 0.5);
        }
      }
      .detail:hover {
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
        border-radius: 5px;
      }
    }
  }
  .step-detail {
    position: fixed;
    z-index: 10;
    background: black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 170px 0 100px 0;
    overflow-y: auto;
    .btn-back {
      cursor: pointer;
      width: 50px;
      display: block;
      margin-right: auto;
      position: fixed;
      top: 100px;
    }
    .content {
      max-width: 650px;
      margin: 0 auto;
      h5 {
        color: $color-green;
      }
      .h7 {
        color: $color-green;
        margin-top: 10px;
      }
      .channel {
        margin-top: 95px;
      }
      .step {
        margin-top: 40px;
        .b1 {
          text-align: left;
        }
        img {
          width: 100%;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>

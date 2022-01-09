<template>
  <div class="thai-section">
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
        v-for="(service, service_index) in service_data"
        :key="service_index"
        class="step"
      >
        <div class="title">
          <div class="b2">
            <b>{{ service.name }}</b>
          </div>

          <img :src="service.image" :alt="service.image" />
        </div>

        <div
          v-for="(data, data_index) in service.data"
          :key="data_index"
          class="detail"
          @click="
            () => {
              show_step_detail = true;
              step_detail = data;
            }
          "
        >
          <div class="b3 label">{{ data.sub_categories }}</div>

          <div class="images">
            <img
              v-for="(image, image_index) in data.images"
              :key="image_index"
              :src="image.path"
              :alt="image.path"
              :class="image.type"
            />
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

    <el-form ref="form" :model="form" label-position="top" class="form-wrap">
      <img :src="letter_emoji" :alt="letter_emoji" class="emoji" />

      <div class="title b1">
        นอกเหนือจากที่เรารวบรวมมาให้ คุณมีปัญหาเกี่ยวกับการใช้งาน Gov-e-service
        อื่น ๆ ที่อยากเสริมมั้ย
        <b>เราจะรวบรวมไปยื่นต่อสำนักงานพัฒนารัฐบาลดิจิทัล (DGA) ให้</b>
      </div>

      <el-form-item>
        <el-input
          type="textarea"
          :autosize="{ minRows: 10, maxRows: 10 }"
          maxlength="1000"
          v-model="form.problem"
          placeholder="เล่าปัญหาการใช้งาน Gov-e-service...(ไม่เกิน 1,000 ตัวอักษร)"
          class="b2"
          @focus="textarea_focus = true"
        >
        </el-input>
      </el-form-item>

      <template v-if="textarea_focus">
        <div class="b1">รบกวนขอสอบถามข้อมูลสั้นๆ ประกอบการประมวลผล</div>

        <el-form-item label="เพศ (Gender)">
          <el-radio-group v-model="form.gender">
            <el-radio
              v-for="(item, index) in gender_options"
              :key="index"
              :label="item.value"
            ></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="ช่วงอายุ (Age)">
          <el-radio-group v-model="form.age">
            <el-radio
              v-for="(item, index) in age_options"
              :key="index"
              :label="item.value"
            ></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="ที่อยู่อาศัยปัจจุบัน (Address)">
          <el-radio-group v-model="form.address">
            <el-radio
              v-for="(item, index) in address_options"
              :key="index"
              :label="item.value"
            ></el-radio>
          </el-radio-group>
        </el-form-item>
      </template>

      <el-button
        :disabled="btn_send_disabled"
        class="btn-send b1"
        @click="submitForm"
        ><b>ส่ง</b></el-button
      >
    </el-form>

    <el-dialog
      :visible.sync="show_success_dialog"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="375px"
      class="success-dialog"
    >
      <img :src="ok_emoji" :alt="ok_emoji" />

      <div class="b1">เราได้รับความคิดเห็นของคุณแล้ว</div>
    </el-dialog>

    <div class="share-wrap">
      <div class="b2">แชร์ไปบอกบุญต่อ</div>

      <div class="social">
        <img
          data-sharer="facebook"
          :data-url="web_url"
          :src="facebook_icon"
          :alt="facebook_icon"
        />

        <img
          data-sharer="twitter"
          :data-url="web_url"
          :src="twitter_icon"
          :alt="twitter_icon"
        />

        <img
          data-sharer="line"
          :data-url="web_url"
          :src="line_icon"
          :alt="line_icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import service_data from "~/static/data/service.json";

export default {
  data() {
    return {
      legends: [
        {
          name: "เว็บไซต์",
          image: require("~/assets/images/emoji/website.png"),
        },
        {
          name: "แอปพลิเคชัน",
          image: require("~/assets/images/emoji/application.png"),
        },
        {
          name: "ไลน์",
          image: require("~/assets/images/emoji/line.png"),
        },
        {
          name: "ไปสถานที่จริง",
          image: require("~/assets/images/emoji/onsite.png"),
        },
      ],
      service_data: [],
      show_step_detail: false,
      step_detail: {},
      back_icon: require("~/assets/images/back.png"),
      letter_emoji: require("~/assets/images/emoji/letter.png"),
      ok_emoji: require("~/assets/images/emoji/ok.png"),
      facebook_icon: require("~/assets/images/facebook.svg"),
      twitter_icon: require("~/assets/images/twitter.svg"),
      line_icon: require("~/assets/images/line.svg"),
      gender_options: [
        {
          name: "ชาย",
          value: "ชาย",
        },
        {
          name: "หญิง",
          value: "หญิง",
        },
        {
          name: "LGBTQ+",
          value: "LGBTQ+",
        },
        {
          name: "ไม่ระบุเพศ",
          value: "ไม่ระบุเพศ",
        },
      ],
      age_options: [
        {
          name: "ต่ำกว่า 20 ปี",
          value: "ต่ำกว่า 20 ปี",
        },
        {
          name: "20 - 25 ปี",
          value: "20 - 25 ปี",
        },
        {
          name: "26 - 30 ปี",
          value: "26 - 30 ปี",
        },
        {
          name: "30 - 35 ปี",
          value: "30 - 35 ปี",
        },
        {
          name: "36 - 40 ปี",
          value: "36 - 40 ปี",
        },
        {
          name: "สูงกว่า 40 ปีขึ้นไป",
          value: "สูงกว่า 40 ปีขึ้นไป",
        },
      ],
      address_options: [
        {
          name: "กรุงเทพฯ",
          value: "กรุงเทพฯ",
        },
        {
          name: "จังหวัดอื่น ๆ",
          value: "จังหวัดอื่น ๆ",
        },
        {
          name: "ต่างประเทศ",
          value: "ต่างประเทศ",
        },
      ],
      textarea_focus: false,
      show_success_dialog: false,
      form: {
        problem: "",
        gender: "",
        age: "",
        address: "",
      },
      web_url: "",
    };
  },
  created() {
    this.setServiceData();
  },
  mounted() {
    this.web_url = window.location.href;
    window.Sharer.init();
  },
  computed: {
    step_detail_images() {
      return _.filter(this.step_detail.images, (i) => i.type === "image");
    },
    step_detail_emoji() {
      return _.find(this.step_detail.images, (i) => i.type === "emoji");
    },
    btn_send_disabled() {
      return !(
        this.form.problem &&
        this.form.gender &&
        this.form.age &&
        this.form.address
      );
    },
  },
  methods: {
    submitForm() {
      this.show_success_dialog = true;

      setTimeout(() => {
        this.show_success_dialog = false;
        this.form.problem = "";
        this.form.gender = "";
        this.form.age = "";
        this.form.address = "";
      }, 1000);
    },
    setServiceData() {
      const obj = _.groupBy(service_data, "service_name");

      for (const property in obj) {
        const id = obj[property][0].service_id.split("_")[0];
        const data = [];

        obj[property].forEach((d) => {
          const no_empty_obj = _.omitBy(d, _.isEmpty);
          const service_keys = [
            "channel",
            "emoji",
            "service_id",
            "service_name",
            "sub_categories",
          ];
          const img_obj = _.omit(no_empty_obj, service_keys);
          const service_obj = _.pick(no_empty_obj, service_keys);
          const images = [];
          let img_id = 0;

          for (const img_property in img_obj) {
            const type = `${d.emoji}`.includes(`${img_id}`) ? "emoji" : "image";
            const path = require(`~/assets/images/thai/review_th/${d.service_id}/${img_id}.jpg`);
            images.push({ type, text: img_obj[img_property], path });
            img_id++;
          }

          data.push({ images, ...service_obj });
        });

        this.service_data.push({
          name: obj[property][0].service_name,
          image: require(`~/assets/images/thai/icon/${id}.png`),
          data,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.thai-section {
  background: black;
  color: white;
  padding: 100px 0;
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
  .form-wrap {
    max-width: 720px;
    margin: 170px auto 0 auto;
    .emoji {
      width: 70px;
    }
    .title {
      margin-top: 10px;
    }
    .el-form-item {
      margin-bottom: 45px;
      /deep/ {
        .el-form-item__label {
          color: white;
          font-size: 18px;
          font-weight: bold;
        }
        .el-textarea {
          margin-top: 45px;
          textarea {
            border-radius: 0;
          }
        }
        .el-radio {
          margin-top: 20px;
          .el-radio__inner {
            width: 30px;
            height: 30px;
            border: 1px solid $color-gray;
            background: none;
          }
          .el-radio__inner::after {
            width: 18px;
            height: 18px;
            background: $color-green;
          }
          .el-radio__label {
            font-size: 21px;
            color: white;
          }
        }
      }
    }
    .btn-send:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    .btn-send {
      min-width: 250px;
      background: white;
      padding: 16px;
      border: none;
      border-radius: 0;
    }
    .btn-send:hover,
    .btn-send:focus {
      color: black;
    }
  }
  .success-dialog {
    /deep/ {
      .el-dialog__header {
        display: none;
      }
      .el-dialog__body {
        img {
          width: 80px;
        }
        .b1 {
          color: black;
          margin-top: 20px;
        }
      }
    }
  }
  .share-wrap {
    margin-top: 135px;
    .social {
      margin-top: 10px;
      img {
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
}
</style>

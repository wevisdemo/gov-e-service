<template>
  <div class="thai-section">
    <StepReview
      :legends="legends"
      :data="review_th_data"
      icon_path="thai/icon"
      image_path="thai/review_th"
    />

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
import review_th_data from "~/static/data/review_th.json";

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
      review_th_data: review_th_data,
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
  mounted() {
    this.web_url = window.location.href;
  },
  computed: {
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
  },
};
</script>

<style lang="scss" scoped>
.thai-section {
  background: black;
  color: white;
  padding: 100px 0;
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

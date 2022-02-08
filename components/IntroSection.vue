<template>
  <div class="intro-section">
    <template v-if="render && !['mobile', 'tablet'].includes($mq)">
      <img
        v-for="(item, index) in number_images"
        :ref="`floating_image_${item}`"
        :key="index"
        :src="require(`~/assets/images/intro/floating_img/${item}.jpg`)"
        :alt="require(`~/assets/images/intro/floating_img/${item}.jpg`)"
        class="floating-image"
      />
    </template>

    <div class="life-hack">
      <div>
        <img :src="life_hack_image" :alt="life_hack_image" class="image" />

        <img :src="intro_text_image" :alt="intro_text_image" class="intro" />

        <img :src="point_emoji" :alt="point_emoji" class="emoji" />
      </div>
    </div>

    <div class="content">
      <div class="b1">
        <span>
          ตั้งแต่เกิดจนตาย.. เราทุกคนต่างต้องเกี่ยวข้องกับบริการของภาครัฐ
        </span>

        <br />

        <span>
          โดยรัฐเองก็พยายามทำบริการให้อยู่ในรูปแบบเว็บไซต์และแอปพลิเคชัน
        </span>

        <br />

        <span>หรือ E-Government Service เพื่อให้บริการประชาชน</span>
      </div>

      <button @click="show_dialog = true" class="b2">
        งงว่า E-Government Service คืออะไร <b>คลิก!</b>
      </button>

      <div class="b1">
        <span
          >ใครได้เคยลิ้มรสประสบการณ์ใช้งาน E-Government Service ก็พบว่า</span
        >

        <br />

        <span>
          บริการต่างๆ มีช่องทางเข้าถึงที่หลากหลาย ทั้งเว็บไซต์ ทั้งไลน์
          และแอปพลิเคชั่น
        </span>

        <br />

        <span>แถมมีหน้าตาภาษาที่อาจจะไม่ง่ายต่อการเข้าถึงเท่าไหร่</span>

        <br />

        <span>
          ไหนๆ ก็ต้องใช้เหมือนกันทุกคนแล้ว
          เราจึงอาสารีวิวและรวบรวมวิธีใช้งานที่คิดว่า
        </span>

        <br />

        <span>น่าจะสะดวกที่สุดมาบอกทุกคน</span>
      </div>
    </div>

    <el-dialog :visible.sync="show_dialog" width="490px">
      <div class="b1"><b>E-Government Service คืออะไร?</b></div>

      <div class="b2">
        การบริการของภาครัฐผ่านช่องทางออนไลน์เพื่อ
        ตอบสนองความต้องการของประชาชนและภาคส่วนที่ เกี่ยวข้องอย่างทันสถานการณ์
      </div>

      <div class="b1" style="margin-top: 20px">
        <b>E-Government Service มีประโยชน์อย่างไร?</b>
      </div>

      <div class="b2">
        สามารถเข้าถึงบริการได้สะดวกและรวดเร็ว ไม่ต้องเดินทาง
        ได้รับการตอบสนองต่อปัญหาและความต้องการตรงจุด
        สามารถติดตามตรวจสอบความโปร่งใสและมีส่วนร่วม
      </div>
    </el-dialog>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      intro_text_image: require("~/assets/images/intro_text.png"),
      life_hack_image: require("~/assets/images/intro/head.svg"),
      point_emoji: require("~/assets/images/emoji/point.png"),
      show_dialog: false,
      render: false,
    };
  },
  computed: {
    number_images() {
      let nums = [];

      for (let index = 1; index < 95; index++) {
        if (index < 41) nums.push(index);
      }

      nums = _.shuffle(nums);
      return nums;
    },
  },
  async mounted() {
    this.render = true;
    await this.$nextTick();

    if (!["mobile", "tablet"].includes(this.$mq)) {
      this.floatImages();
    }
  },
  methods: {
    floatImages() {
      for (const property in this.$refs) {
        const position_left =
          Math.floor(Math.random() * 100 + 1).toFixed(2) + "%";
        const position_top =
          Math.floor(Math.random() * 100 + 1).toFixed(2) + "%";
        const num = Math.floor(Math.random() * 10 + 1);
        this.$refs[property][0].classList.add(`x${num}`);
        this.$refs[property][0].style.left = position_left;
        this.$refs[property][0].style.top = position_top;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.intro-section {
  background: $color-green;
  text-align: center;
  position: relative;
  overflow: hidden;
  .floating-image {
    width: 30px;
    height: 20px;
    object-fit: cover;
    position: absolute;
    z-index: 1;
  }
  .x1 {
    animation: animateBubble 15s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }
  .x2 {
    animation: animateBubble 10s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }
  .x3 {
    animation: animateBubble 14s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }
  .x4 {
    animation: animateBubble 11s linear infinite,
      sideWays 3s ease-in-out infinite alternate;
  }
  .x5 {
    animation: animateBubble 14s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }
  .x6 {
    animation: animateBubble 10s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }
  .x7 {
    animation: animateBubble 10s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }
  .x8 {
    animation: animateBubble 11s linear infinite,
      sideWays 3s ease-in-out infinite alternate;
  }
  .x9 {
    animation: animateBubble 10s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }
  .x10 {
    animation: animateBubble 14s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }
  .life-hack {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @include media-breakpoint(mobile) {
      padding: 24px 0;
      min-height: 70vh;
    }
    img {
      display: block;
    }
    .image {
      width: 65vw;
      margin: 0 auto;
      @include media-breakpoint(mobile) {
        width: 80vw;
      }
    }
    .emoji {
      width: 80px;
      margin: 10px auto 0 auto;
      animation: updown 0.6s infinite;
      position: relative;
      z-index: 1;
      @include media-breakpoint(mobile) {
        width: 50px;
        margin: 100px auto 0 auto;
      }
    }
    .intro {
      width: 505px;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      @include media-breakpoint(mobile) {
        width: 80vw;
        top: 60%;
      }
    }
  }
  .content {
    max-width: 670px;
    margin: 0 auto;
    padding: 70px 0 140px 0;
    position: relative;
    z-index: 2;
    @include media-breakpoint(mobile) {
      padding: 50px 16px;
    }
    .b1 {
      > span {
        background: black;
        color: white;
        padding: 4px 10px;
        @include media-breakpoint(mobile) {
          display: inline-block;
        }
      }
    }
    button {
      margin: 20px 0;
      border: 1px solid black;
      padding: 5px 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      background: $color-green;
      white-space: nowrap;
    }
    button:hover {
      background: white;
    }
  }
  .el-dialog__wrapper {
    ::v-deep {
      .el-dialog {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        text-align: left;
        .el-dialog__body {
          color: black;
          word-break: break-word;
        }
        .el-dialog__close {
          font-weight: bold;
          color: black;
        }
      }
    }
  }
}
@keyframes updown {
  0% {
    top: 10px;
  }
  50% {
    top: -10px;
  }
  100% {
    top: 10px;
  }
}
@keyframes animateBubble {
  0% {
    margin-top: 2000px;
  }
  100% {
    margin-top: -2000px;
  }
}
@keyframes sideWays {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 50px;
  }
}
</style>

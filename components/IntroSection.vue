<template>
  <div class="intro-section">
    <template v-if="!['mobile', 'tablet'].includes($mq)">
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
        <div>ตั้งแต่เกิดจนตายลง เราต่างต้องเกี่ยวข้องกับบริการของภาครัฐ</div>

        <div>
          โดยรัฐเองก็พยายามทำบริการให้อยู่ในรูปแบบเว็บไซต์และแอปพลิเคชัน
          เรียกว่า
        </div>

        <div>e-Government Service เพื่อให้บริการประชาชน</div>
      </div>

      <button @click="show_dialog = true" class="b2">
        งงว่า e-Government Service คืออะไร <b>คลิก!</b>
      </button>

      <div class="b1">
        <div>
          จากประสบการณ์ตรง เราพบว่า หลายบริการมีช่องทางเข้าถึงที่หลากหลาย
        </div>

        <div>
          เว็บเอย แอปเอย ไลน์เอย
          แถมมีหน้าตาภาษาที่อาจจะไม่ได้เป็นมิตรเท่าไหร่สำหรับ
        </div>

        <div>
          มือใหม่หลายคน ไหนๆ เราก็เสียเวลางมไปแล้ว
          เลยอยากมาแชร์วิธีใช้งานที่คิดว่า
        </div>

        <div>น่าจะสะดวกที่สุดมาเผื่อแผ่ทุกคน</div>
      </div>
    </div>

    <el-dialog :visible.sync="show_dialog" width="490px">
      <div class="b1"><b>e-Government Service คืออะไร?</b></div>

      <div class="b2">
        การบริการของภาครัฐผ่านช่องทางออนไลน์เพื่อ
        ตอบสนองความต้องการของประชาชนและภาคส่วนที่ เกี่ยวข้องอย่างทันสถานการณ์
      </div>

      <div class="b1" style="margin-top: 20px">
        <b>e-Government Service มีประโยชน์อย่างไร?</b>
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
  mounted() {
    this.floatimages();
  },
  methods: {
    floatimages() {
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
    -webkit-animation: animateBubble 15s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 15s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 15s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }
  .x2 {
    -webkit-animation: animateBubble 10s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 10s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 10s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }
  .x3 {
    -webkit-animation: animateBubble 14s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 14s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 14s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }
  .x4 {
    -webkit-animation: animateBubble 11s linear infinite,
      sideWays 3s ease-in-out infinite alternate;
    -moz-animation: animateBubble 11s linear infinite,
      sideWays 3s ease-in-out infinite alternate;
    animation: animateBubble 11s linear infinite,
      sideWays 3s ease-in-out infinite alternate;
  }
  .x5 {
    -webkit-animation: animateBubble 14s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 14s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 14s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }
  .x6 {
    -webkit-animation: animateBubble 10s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 10s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 10s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }
  .x7 {
    -webkit-animation: animateBubble 10s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 10s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 10s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }
  .x8 {
    -webkit-animation: animateBubble 11s linear infinite,
      sideWays 3s ease-in-out infinite alternate;
    -moz-animation: animateBubble 11s linear infinite,
      sideWays 3s ease-in-out infinite alternate;
    animation: animateBubble 11s linear infinite,
      sideWays 3s ease-in-out infinite alternate;
  }
  .x9 {
    -webkit-animation: animateBubble 10s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 10s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 10s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }
  .x10 {
    -webkit-animation: animateBubble 14s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 14s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
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
    max-width: 650px;
    margin: 0 auto;
    padding: 70px 0 140px 0;
    position: relative;
    z-index: 2;
    @include media-breakpoint(mobile) {
      padding: 50px 16px;
    }
    .b1 {
      > div {
        background: black;
        color: white;
        display: inline-block;
        padding: 3px;
      }
    }
    button {
      margin: 20px 0;
      border: 1px solid black;
      padding: 5px 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      background: $color-green;
    }
    button:hover {
      background: white;
    }
  }
  .el-dialog__wrapper {
    /deep/ {
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
@-webkit-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}
@-moz-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}
@keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}
@-webkit-keyframes sideWays {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 50px;
  }
}
@-moz-keyframes sideWays {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 50px;
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

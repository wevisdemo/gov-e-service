<template>
  <div class="top-countries-section">
    <div class="head">
      <img :src="telescope_emoji" :alt="telescope_emoji" />

      <div class="h7">
        พาไปส่องตัวอย่าง e-service ในประเทศที่เราเลือกมาให้ดู
      </div>
    </div>

    <div class="select-country">
      <button
        v-for="(country, index) in country_options"
        :key="index"
        :class="{ 'is-active': current_country === country.th_country_name }"
        @click="current_country = country.th_country_name"
      >
        <img :src="country.flag_image" :alt="country.flag_image" />

        <h3>{{ country.th_country_name }}</h3>

        <div class="b2">
          EGDI อันดับที่ <b>{{ country["E-Government Rank"] }}</b>
        </div>

        <div class="b2">
          EPI อันดับที่ <b>{{ country["E-Participation Rank"] }}</b>
        </div>
      </button>
    </div>

    <div class="step-wrap">
      <div v-if="current_country === 'เอสโตเนีย'" class="estonia-step h7">
        บริการส่วนใหญ่ของเอสโตเนีย
        จะมีระบบระบุตัวตนทางอิเล็กทรอนิกส์ที่รัฐออกให้ เรียกว่าระบบ
        <a
          href="https://e-estonia.com/solutions/e-identity/id-card/"
          target="_blank"
          rel="noopener noreferrer"
          ><b>e-Identity</b></a
        >
        เพื่อใช้ทำธุรกรรมต่างๆ เช่น ชำระค่าใช้จ่าย โหวตออนไลน์ เซ็นสัญญา
        เข้าถึงข้อมูลต่างๆ โดยใช้ผ่านแอปพลิเคชัน Smart-ID
        หรือถ้าใช้คอมพิวเตอร์ก็แค่ติดตั้งโปรแกรม และเสียบบัตรประชาชน
        ชาวเอสโตเนียนจึงแทบไม่ต้องก้าวเท้าออกจากบ้านเลย!! <br /><br />
        หากต้องการดูข้อมูลประกอบการทำ e-service ต่างๆ ก็มีเว็บไซต์
        <a
          href="https://www.eesti.ee/en"
          target="_blank"
          rel="noopener noreferrer"
          >https://www.eesti.ee/en</a
        >
        ที่รวบรวมเป็นรายประเด็นไว้ให้หมดแล้วในที่เดียว 😍
      </div>

      <StepReview
        v-else
        :legends="legends"
        :data="current_country_data"
        :image_path="
          current_country === 'อังกฤษ'
            ? 'top_countries/review_uk'
            : 'top_countries/review_nz'
        "
        icon_path="top_countries/icon"
      />
    </div>

    <div class="jealous-wrap">
      <img :src="wow_emoji" :alt="wow_emoji" />

      <h5>อิจฉามั้ย?</h5>

      <div class="b1">
        สำหรับเรา
        สิ่งที่น่าอิจฉาที่สุดคือการที่ทุกกิจกรรมถูกรวมไว้ในเว็บไซต์เดียวกัน
        ทำให้ไม่ต้องเสียเวลาหาตัวเว็บและทำให้เราคุ้นเคยกับโครงสร้างและลักษณะการแบ่งประเด็น
        จนพอเดาได้ว่าอะไรน่าจะอยู่ตรงไหน
        ไม่ต้องมานั่งเรียนรู้การใช้งานเว็บหน้าตาใหม่ทุกครั้ง
        หรือเปลืองพื้นที่มือถือในการดาวน์โหลดแอปพลิเคชันมากมาย
        <br /><br />
        ที่สำคัญคือกระบวนการส่วนใหญ่สามารถจบได้ในออนไลน์ หรือถ้าเป็นระบบจองคิว
        ก็จะมีส่วนที่ให้ทำล่วงหน้าได้เพื่อลดเวลาในสถานที่จริง เช่น
        การกรอกข้อมูลจำนวนมาก
        <br /><br />
        แถมบางประเทศยังล้ำ ถึงขั้นระบุถึงตัวตน เซ็นชื่อผ่านออนไลน์ได้
        ซึ่งสอดรับกับจำนวนการใช้อินเทอร์เน็ตที่มากขึ้น
        และสถานการณ์การแพร่ระบาดของเชื้อ<span style="white-space: nowrap"
          >โควิด - 19</span
        >
        ที่เราเจออยู่ตอนนี้สุดๆ <br /><br />
        ส่วนของไทย
        <br /><br />
        เราต้องยอมรับว่ามีหลายเว็บและแอปที่กำลังพัฒนาดีขึ้น อย่างแอป
        <a
          href="https://www.dga.or.th/our-services/one-stop-service/citizeninfo/application-citizeninfo/"
          target="_blank"
          rel="noopener noreferrer"
          >CITIZENinfo</a
        >
        ที่รวมการให้ข้อมูลและค้นหาสถานที่ของหลายบริการ
        สามารถอ่านข้อมูลได้ก่อนเริ่มใช้บริการ และ<a
          href="https://czp.dga.or.th/cportal/sdk/landing/index.html"
          target="_blank"
          rel="noopener noreferrer"
          >แอปทางรัฐ</a
        >มีรวมบริการที่ใช้บ่อยๆไว้ให้ เช่น LandsMaps ประกันสังคม Smart Job
        นอกจากนี้ยังมี<a
          href="https://www.egov.go.th/th/index.php"
          target="_blank"
          rel="noopener noreferrer"
          >เว็บไซต์กลางบริการอิเล็กทรอนิกส์ภาครัฐ</a
        >ที่รวมเว็บไซต์ตามประเด็นต่างๆ ซึ่งถือเป็นการทำบริการทางทิศทางที่ดี
        <br /><br />
        *ที่ไม่เลือกแอป
        <a
          href="https://www.dga.or.th/our-services/one-stop-service/citizeninfo/application-citizeninfo/"
          target="_blank"
          rel="noopener noreferrer"
          >CITIZENinfo</a
        >
        ทางรัฐ หรือเว็บกลาง เนื่องจากมุ่งเน้นเรื่องการเข้ารับบริการได้เลย เช่น
        จองคิว รวมขั้นตอนการใช้งาน <br /><br />
        สุดท้ายหวังว่า ความเห็นจากทุกคนและตัวอย่างจากประเทศที่ได้คะแนนสูงๆ
        จะเป็นแรงบันดาลใจในการปรับปรุงบริการ e-Government Service
        ของเราให้ดียิ่งขึ้นไปอีกกกก
      </div>
    </div>

    <div class="share-wrap">
      <div class="b2">แชร์ไปบอกโลก ว่าอยากได้แบบนี้บ้าง!</div>

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
import _ from "lodash";
import review_nz_data from "~/static/data/review_nz.json";
import review_uk_data from "~/static/data/review_uk.json";

export default {
  props: {
    world_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      telescope_emoji: require("~/assets/images/emoji/telescope.png"),
      wow_emoji: require("~/assets/images/emoji/wow.png"),
      legends: [
        {
          name: "เว็บไซต์",
          image: require("~/assets/images/emoji/website.png"),
        },
        {
          name: "ไปสถานที่จริง",
          image: require("~/assets/images/emoji/onsite.png"),
        },
        {
          name: "ไปส่งเอกสารทางไปรษณีย์",
          image: require("~/assets/images/emoji/postbox.png"),
        },
      ],
      current_country: "อังกฤษ",
      facebook_icon: require("~/assets/images/facebook.svg"),
      twitter_icon: require("~/assets/images/twitter.svg"),
      line_icon: require("~/assets/images/line.svg"),
      web_url: "",
    };
  },
  computed: {
    country_options() {
      let countries = _.filter(this.world_data, (d) =>
        [
          "United Kingdom of Great Britain and Northern Ireland",
          "New Zealand",
          "Estonia",
        ].includes(d["Country Name"])
      );

      countries = _.map(countries, (c) => {
        let data = {};
        let flag_image = require("~/assets/images/emoji/flag-estonia.png");
        let th_country_name = "เอสโตเนีย";

        if (
          c["Country Name"] ===
          "United Kingdom of Great Britain and Northern Ireland"
        ) {
          data = review_uk_data;
          flag_image = require("~/assets/images/emoji/flag-uk.png");
          th_country_name = "อังกฤษ";
        }

        if (c["Country Name"] === "New Zealand") {
          data = review_nz_data;
          flag_image = require("~/assets/images/emoji/flag-new-zealand.png");
          th_country_name = "นิวซีแลนด์";
        }

        return { ...c, data, flag_image, th_country_name };
      });

      return [countries[1], countries[2], countries[0]];
    },
    current_country_data() {
      const res = _.find(
        this.country_options,
        (o) => o.th_country_name === this.current_country
      );
      return _.get(res, "data") || [];
    },
  },
  mounted() {
    this.web_url = window.location.href;
  },
};
</script>

<style lang="scss" scoped>
.top-countries-section {
  background: black;
  color: white;
  padding: 120px 0;
  @include media-breakpoint(mobile) {
    padding: 50px 16px 100px 16px;
  }
  .head {
    img {
      width: 80px;
    }
    .h7 {
      margin-top: 20px;
    }
  }
  .select-country {
    margin: 94px auto 0 auto;
    max-width: 95vw;
    display: flex;
    overflow-x: auto;
    padding-bottom: 24px;
    @include media-breakpoint(mobile) {
      margin: 94px -8px 0 -8px;
      max-width: 100vw;
    }
    button {
      flex: 1;
      border-radius: 20px;
      border: none;
      margin: 0 8px;
      padding: 40px;
      opacity: 0.2;
      background: white;
      @include media-breakpoint(mobile) {
        width: 200px;
        flex: none;
        padding: 30px 5px;
        margin: 0 5px;
      }
      img {
        width: 60px;
      }
      h3 {
        margin-top: 10px;
        word-break: break-all;
      }
      .b2 {
        margin-top: 5px;
      }
    }
    button.is-active {
      opacity: 1;
    }
  }
  .step-wrap {
    padding-top: 100px;
    @include media-breakpoint(mobile) {
      padding-top: 50px;
    }
    .estonia-step {
      max-width: 650px;
      margin: 0 auto;
      a {
        color: $color-green;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
  .jealous-wrap {
    max-width: 650px;
    margin: 200px auto 0 auto;
    @include media-breakpoint(mobile) {
      margin: 90px auto 0 auto;
    }
    img {
      width: 60px;
    }
    h5 {
      margin-top: 20px;
    }
    .b1 {
      margin-top: 20px;
      a {
        color: white;
      }
    }
  }
  .share-wrap {
    margin-top: 72px;
    .b2 {
      color: $color-green;
    }
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

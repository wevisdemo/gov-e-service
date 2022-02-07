<template>
  <div class="world-section">
    <div class="container">
      <div class="intro-wrap">
        <div class="b1">
          ประเมินจากความเห็นส่วนตัวกันไปแล้ว อยากรู้มั้ยว่าในระดับนานาชาติ
        </div>

        <h6>ประเทศไทยอยู่จุดไหน</h6>

        <img :src="earth_emoji" :alt="earth_emoji" class="earth-emoji" />
      </div>

      <div class="research-wrap">
        <div class="h7">
          ผลการสำรวจ <b>UN E-Government Survey 2020</b><br />
          จาก 193 ประเทศสมาชิกสหประชาชาติ
        </div>

        <h6 class="highlight">ประเทศไทยจัดอยู่ในอันดับสูงทีเดียว</h6>

        <el-select
          v-model="research_select_country"
          filterable
          placeholder="เลือกประเทศเปรียบเทียบ"
          class="select-country"
        >
          <el-option
            v-for="item in world_data_options"
            :key="item['Country Name']"
            :label="item['Country Name']"
            :value="item['Country Name']"
          >
          </el-option>
        </el-select>

        <div class="legend-wrap b4">
          <div class="legend">
            <div class="line"></div>

            ค่าเฉลี่ยโลก
          </div>

          <div class="legend">
            <div class="line dashed"></div>

            ค่าเฉลี่ยเอเชียตะวันออกเฉียงใต้
          </div>
        </div>

        <div class="chart-wrap">
          <PointChart
            title="E-Government Development Index"
            value_key="E-Government Index"
            rank_key="E-Government Rank"
            :select_country="research_select_country"
            :world_average="0.5988"
            :sea_average="0.6321"
            :data="world_data"
          />

          <PointChart
            title="E-participation index"
            value_key="E-Participation Index"
            rank_key="E-Participation Rank"
            :select_country="research_select_country"
            :world_average="0.5677"
            :sea_average="0.6126"
            :data="world_data"
          />
        </div>
      </div>

      <div class="wonder-wrap">
        <img
          :src="thinking_emoji"
          :alt="thinking_emoji"
          class="thinking-emoji"
        />

        <div class="b1">สงสัยใช่ไหม.. ว่าใช้เกณฑ์อะไรในการประเมิน</div>
      </div>

      <div class="egdi-wrap">
        <div class="head">
          <h5>
            <b>E-Government Development Index (EGDI)</b><br />มีเกณฑ์ในการวัด 3
            ด้าน
          </h5>

          <div class="b1">
            ซึ่งไม่ได้เน้นการวัดเพื่อพัฒนาตามเป้าหมายของ E-Government Service
            โดยตรง<br />
            ส่วนใหญ่เน้นวัดการปฏิบัติงานของรัฐบาลรองรับต่อระดับชาติให้สัมพันธ์กัน
          </div>
        </div>

        <div class="row">
          <div class="card-wrap">
            <div class="label b1"><b>OSI</b></div>

            <div class="card">
              <div class="h7"><b>ขอบเขตและคุณภาพของบริการออนไลน์</b></div>

              <div class="b2 subtitle">(Online Service Index)</div>

              <div class="b2">
                ประเมินจากเว็บไซต์ต่างๆ เช่น
                เว็บไซต์ศูนย์กลางคอยรวบรวมเว็บไซต์อื่นๆ (National Portal)
                และเว็บไซต์ระดับกระทรวง แบ่งการประเมิน 4 ระดับ
              </div>

              <img :src="osi_1_emoji" :alt="osi_1_emoji" class="emoji" />

              <div class="b4">ระดับ 1 Emerging Information Services</div>

              <div class="b2">
                ให้ข้อมูลกับประชาชน เข้าถึงได้ทั้งอดีตและปัจจุบัน
                และมีลิงค์เชื่อมเว็บระดับกระทรวง กรม หรือหน่วยอื่นๆ เข้าหากัน
              </div>

              <img :src="osi_2_emoji" :alt="osi_2_emoji" class="emoji" />

              <div class="b4">ระดับ 2 Enhanced Information Services</div>

              <div class="b2">
                มีบริการข้อมูลเพิ่มเติม เช่น มีแบบฟอร์มให้ดาวน์โหลดได้
              </div>

              <img :src="osi_3_emoji" :alt="osi_3_emoji" class="emoji" />

              <div class="b4">ระดับ 3 Transaction Information Services</div>

              <div class="b2">
                ประชาชนสามารถเข้ามามีส่วนร่วมกับเว็บไซต์
                และสามารถดำเนินการให้เสร็จสมบูรณ์ผ่านเว็บไซต์ได้เลย
              </div>

              <img :src="osi_4_emoji" :alt="osi_4_emoji" class="emoji" />

              <div class="b4">ระดับ 4 Connected Information Services</div>

              <div class="b2">
                จัดบริการตามความต้องการของ ประชากรในแต่ละช่วงวัย
                ไม่ต้องใช้บริการข้ามหน่วยงาน
              </div>
            </div>
          </div>

          <div class="card-wrap">
            <div class="label b1"><b>TII</b></div>

            <div class="card">
              <div class="h7">
                <b>สถานะการพัฒนาโครงสร้างพื้นฐานด้านโทรคมนาคม</b>
              </div>

              <div class="b2 subtitle">
                (Telecommunication Infrastructure Index)
              </div>

              <div class="b2">วัดจากข้อมูล 5 อย่าง</div>

              <div class="list">
                <div class="item">
                  <img :src="tii_1_emoji" :alt="tii_1_emoji" class="emoji" />

                  <div class="b2">จำนวนผู้ใช้โทรศัพท์บ้านต่อประชากร 100 คน</div>
                </div>

                <div class="item">
                  <img :src="tii_2_emoji" :alt="tii_2_emoji" class="emoji" />

                  <div class="b2">
                    จำนวนผู้ลงทะเบียนใช้งานโทรศัพท์มือถือต่อประชากร 100 คน
                  </div>
                </div>

                <div class="item">
                  <img :src="tii_3_emoji" :alt="tii_3_emoji" class="emoji" />

                  <div class="b2">จำนวนผู้ใช้อินเทอร์เน็ตต่อประชากร 100 คน</div>
                </div>

                <div class="item">
                  <img :src="tii_4_emoji" :alt="tii_4_emoji" class="emoji" />

                  <div class="b2">
                    จำนวนผู้ลงทะเบียนใช้อินเทอร์เน็ตต่อประชากร 100 คน
                  </div>
                </div>

                <div class="item">
                  <img :src="tii_5_emoji" :alt="tii_5_emoji" class="emoji" />

                  <div class="b2">
                    จำนวนผู้ลงทะเบียนใช้อินเทอร์เน็ตความเร็วสูงต่อประชากร 100 คน
                  </div>
                </div>
              </div>

              <div class="hint b4">
                *ใช้ข้อมูลจาก The International Telecommunication Union: ITU
                ซึ่งเป็นหน่วยงานที่รวบรวมข้อมูลตัวชี้วัดทางด้านต่างๆ ของ United
                Nations ในแต่ละประเทศ
              </div>
            </div>
          </div>

          <div class="card-wrap">
            <div class="label b1"><b>HCI</b></div>

            <div class="card">
              <div class="h7"><b>ลักษณะ/พื้นฐานของคนในประเทศนั้น</b></div>

              <div class="b2 subtitle">(Human Capital Index)</div>

              <div class="b2">วัดจากข้อมูล 4 อย่าง</div>

              <img :src="hci_1_emoji" :alt="hci_1_emoji" class="emoji" />

              <div class="b2 head-text">
                อัตราการรู้หนังสือในผู้ใหญ่<br />(Adult Literacy)
              </div>

              <div class="b3">
                ร้อยละของผู้ที่มีอายุ 15 ปีขึ้นไป สามารถอ่านและเขียนข้อความง่ายๆ
                ในชีวิตประจำวันได้
              </div>

              <img :src="hci_2_emoji" :alt="hci_2_emoji" class="emoji" />

              <div class="b2 head-text">
                อัตราส่วนการลงทะเบียนทั้งหมดภายในประเทศ<br />(Gross Enrollment
                Ratio)
              </div>

              <div class="b3">
                จำนวนนักเรียนทั้งหมดที่ลงทะเบียนระดับประถมศึกษา มัธยมศึกษา
                และอุดมศึกษา
              </div>

              <img :src="hci_3_emoji" :alt="hci_3_emoji" class="emoji" />

              <div class="b2 head-text">
                จำนวนปีที่คาดว่าจะได้รับการศึกษา<br />(Expected Years of
                schooling)
              </div>

              <div class="b3">
                เป็นการตั้งสมมติฐานว่าความน่าจะเป็นอายุของการเรียนในช่วงวัยนั้นๆ
                กับอัตราส่วนการเข้าเรียนในปัจจุบัน
              </div>

              <img :src="hci_4_emoji" :alt="hci_4_emoji" class="emoji" />

              <div class="b2 head-text">
                จำนวนปีเฉลี่ยที่ได้รับการศึกษา<br />(Mean years of schooling)
              </div>

              <div class="b3">
                จำนวนปีเฉลี่ยของการศึกษา<br />ไม่รวมปีที่เรียนซ้ำ
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index-chart-wrap">
        <el-select
          v-model="index_select_country"
          filterable
          placeholder="เลือกประเทศเปรียบเทียบ"
          class="select-country"
        >
          <el-option
            v-for="item in world_data_options"
            :key="item['Country Name']"
            :label="item['Country Name']"
            :value="item['Country Name']"
          >
          </el-option>
        </el-select>

        <RadarChart :data="world_data" :select_country="index_select_country" />
      </div>

      <div class="epi-wrap">
        <div class="head">
          <h5>
            ส่วน
            <b>E-Participation Index (EPI)</b><br />
            ใช้วัดการสร้างความโปร่งใสของภาครัฐ<br />ในการเปิดโอกาสให้ภาคประชาชน<br />
            ได้เข้ามามีส่วนร่วม 3 ระดับ
          </h5>
        </div>

        <div class="row">
          <div class="card-wrap">
            <img :src="e_1_emoji" :alt="e_1_emoji" />

            <div class="card">
              <div class="b1"><b>E-Information</b></div>

              <div class="b2">
                เป็นสื่อสารทางเดียวจากรัฐที่เปิดให้ข้อมูลสาธารณะแก่ประชาชนผ่านเว็บไซต์
                และให้ประชาชนเข้าถึงข้อมูลได้ เช่น กฎหมาย , ระเบียบ ,
                นโยบายต่างๆ
              </div>
            </div>
          </div>

          <div class="card-wrap">
            <img :src="e_2_emoji" :alt="e_2_emoji" />

            <div class="card">
              <div class="b1"><b>E-Consultation</b></div>

              <div class="b2">
                เปิดให้เป็นการสื่อสารสองทางมากขึ้น ที่รัฐมีปฏิสัมพันธ์กับประชาชน
                เช่น ให้คำปรึกษา ประชาชนสามารถเข้ามาแสดงความคิดเห็น
                เสนอแนะแนวทาง และคอยตอบคำถามจากภาคประชาชน
                สามารถใช้เครื่องมือออนไลน์ในการมีส่วนร่วม เช่น บล็อก ,
                เครือข่ายสังคมออนไลน์ , เครื่องมือตอบโต้
              </div>
            </div>
          </div>

          <div class="card-wrap">
            <img :src="e_3_emoji" :alt="e_3_emoji" />

            <div class="card">
              <div class="b1"><b>E-Decision-Making</b></div>

              <div class="b2">
                มีช่องทางเปิดการมีส่วนร่วมประชาชน
                สามารถตัดสินใจออกแบบนโยบายร่วมกันได้
                และภาครัฐจะต้องแจ้งผลจากการตัดสินใจบนพื้นฐานของกระบวนการให้คำปรึกษา
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="internet-wrap">
        <div class="head">
          <div class="b1">
            ปัจจุบัน ประเทศไทยมีผู้ใช้อินเทอร์เน็ตถึง <b>73.4% ของประชากร</b>
          </div>

          <div class="b4">(48.59 ล้านคน จากประชากร 66.19 ล้านคน)</div>

          <div class="b1 highlight">
            <b>เพิ่มขึ้นจากปีที่แล้ว 9.7%</b>
          </div>
        </div>

        <div class="emoji-list">
          <div v-for="(item, index) in 100" :key="index" class="emoji-wrap">
            <img
              v-if="item > 73"
              :src="no_internet_emoji"
              :alt="no_internet_emoji"
              class="emoji no-internet"
            />

            <template v-else>
              <img :src="internet_emoji" :alt="internet_emoji" class="emoji" />

              <img
                v-if="item > 62 && item < 74"
                :src="internet_stroke_green_emoji"
                :alt="internet_stroke_green_emoji"
                class="emoji emoji-stroke"
              />

              <img
                v-else
                :src="internet_stroke_blue_emoji"
                :alt="internet_stroke_blue_emoji"
                class="emoji emoji-stroke"
              />
            </template>
          </div>
        </div>

        <div class="per-day-wrap">
          <div class="b1">
            และใช้อินเทอร์เน็ต <b>8 ชั่วโมง 44 นาทีต่อวัน</b> สูงเป็นอันดับ 9
            ของโลก
          </div>

          <div class="doughnut-wrap">
            <DoughnutChart />

            <img :src="eyes_emoji" :alt="eyes_emoji" class="emoji" />

            <img
              :src="eye_stroke_emoji"
              :alt="eye_stroke_emoji"
              class="emoji emoji-stroke"
            />
          </div>

          <div class="h7">
            แม้ E-Government Service ในประเทศไทยจะไม่ถือว่าแย่ แต่เราเชื่อว่า
            สามารถดีกว่านี้ได้อีก! เพื่อรองรับแนวโน้มการใช้อินเทอร์เน็ต
            ของคนไทยที่เพิ่มขึ้นเรื่อยๆ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

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
      earth_emoji: require("~/assets/images/emoji/earth.png"),
      thinking_emoji: require("~/assets/images/emoji/thinking.png"),
      osi_1_emoji: require("~/assets/images/emoji/egdi_emoji/osi_1.png"),
      osi_2_emoji: require("~/assets/images/emoji/egdi_emoji/osi_2.png"),
      osi_3_emoji: require("~/assets/images/emoji/egdi_emoji/osi_3.png"),
      osi_4_emoji: require("~/assets/images/emoji/egdi_emoji/osi_4.png"),
      tii_1_emoji: require("~/assets/images/emoji/egdi_emoji/tii_1.png"),
      tii_2_emoji: require("~/assets/images/emoji/egdi_emoji/tii_2.png"),
      tii_3_emoji: require("~/assets/images/emoji/egdi_emoji/tii_3.png"),
      tii_4_emoji: require("~/assets/images/emoji/egdi_emoji/tii_4.png"),
      tii_5_emoji: require("~/assets/images/emoji/egdi_emoji/tii_5.png"),
      hci_1_emoji: require("~/assets/images/emoji/egdi_emoji/hci_1.png"),
      hci_2_emoji: require("~/assets/images/emoji/egdi_emoji/hci_2.png"),
      hci_3_emoji: require("~/assets/images/emoji/egdi_emoji/hci_3.png"),
      hci_4_emoji: require("~/assets/images/emoji/egdi_emoji/hci_4.png"),
      e_1_emoji: require("~/assets/images/emoji/epi_emoji/e_1.png"),
      e_2_emoji: require("~/assets/images/emoji/epi_emoji/e_2.png"),
      e_3_emoji: require("~/assets/images/emoji/epi_emoji/e_3.png"),
      internet_emoji: require("~/assets/images/emoji/internet.gif"),
      no_internet_emoji: require("~/assets/images/emoji/no_internet.png"),
      internet_stroke_blue_emoji: require("~/assets/images/emoji/internet_stroke_blue.png"),
      internet_stroke_green_emoji: require("~/assets/images/emoji/internet_stroke_green.png"),
      eyes_emoji: require("~/assets/images/emoji/eyes.gif"),
      eye_stroke_emoji: require("~/assets/images/emoji/eye_stroke.png"),
      research_select_country: "",
      index_select_country: "",
    };
  },
  computed: {
    world_data_options() {
      let options = _.filter(
        this.world_data,
        (d) => d["Country Name"] !== "Thailand"
      );
      options = _.orderBy(options, "Country Name", "asc");
      return options;
    },
  },
};
</script>

<style lang="scss" scoped>
.world-section {
  background: $color-blue;
  padding: 170px 0;
  color: white;
  @include media-breakpoint(mobile) {
    padding: 30px 0 60px 0;
  }
  .container {
    max-width: 1400px;
    width: 100%;
  }
  .select-country {
    width: 280px;
    margin-top: 40px;
    ::v-deep {
      input {
        border: 1px solid $color-purple;
        border-radius: 0;
        background: none;
        font-size: 16px;
        color: white;
      }
    }
  }
  .intro-wrap {
    .earth-emoji {
      width: 80px;
      margin-top: 50px;
      animation: rotation 1s linear infinite;
    }
  }
  .research-wrap {
    margin-top: 110px;
    .highlight {
      color: black;
      background: $color-green;
      width: fit-content;
      margin: 10px auto 0 auto;
      padding: 5px 10px;
    }
    .legend-wrap {
      display: flex;
      justify-content: center;
      margin-top: 24px;
      .legend {
        display: flex;
        align-items: center;
        margin: 0 8px;
        color: $color-green;
        .line {
          width: 40px;
          border-top: 2px solid $color-green;
          margin-right: 8px;
        }
        .line.dashed {
          border-top: 2px dashed $color-green;
        }
      }
    }
    .chart-wrap {
      display: flex;
      justify-content: center;
      @include media-breakpoint(mobile) {
        display: block;
      }
      .point-chart {
        margin: 25px 46px 0 46px;
        @include media-breakpoint(mobile) {
          margin: 25px 0 0 0;
        }
      }
    }
  }
  .wonder-wrap {
    margin-top: 150px;
    @include media-breakpoint(mobile) {
      margin-top: 90px;
    }
    .thinking-emoji {
      width: 80px;
      animation: thinking 4s infinite;
    }
  }
  .egdi-wrap {
    margin-top: 180px;
    @include media-breakpoint(mobile) {
      margin-top: 90px;
    }
    .head {
      max-width: 674px;
      margin: 0 auto;
      h5 {
        font-weight: normal;
        b {
          color: $color-green;
        }
      }
      .b1 {
        margin-top: 15px;
      }
    }
    .row {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      @include media-breakpoint(mobile) {
        display: block;
      }
      .card-wrap {
        width: 300px;
        margin: 0 15px;
        @include media-breakpoint(mobile) {
          margin: 30px 0 0 0;
          width: 100%;
        }
        .label {
          color: white;
          background: black;
          width: 60px;
          height: 60px;
          border-radius: 100%;
          line-height: 60px;
          margin: 0 auto;
        }
        .card {
          border-radius: 10px;
          background: white;
          padding: 30px 10px;
          color: black;
          margin-top: 10px;
          @include media-breakpoint(mobile) {
            padding: 20px 10px;
          }
          .subtitle {
            color: $color-blue;
            margin: 20px 0;
          }
          .b4 {
            font-weight: bold;
            color: $color-blue;
            margin: 5px 0;
          }
          .emoji {
            height: 30px;
            margin-top: 20px;
          }
          .list {
            .item {
              display: flex;
              margin-top: 20px;
              text-align: left;
              .emoji {
                margin: 0 10px 0 0;
              }
            }
          }
          .hint {
            margin-top: 20px;
            color: rgba(0, 0, 0, 0.5);
            font-weight: normal;
            text-align: left;
          }
          .head-text {
            margin: 5px 0;
            font-weight: bold;
          }
          .b3 {
            margin-top: 5px;
          }
        }
      }
    }
  }
  .index-chart-wrap {
    margin-top: 140px;
    @include media-breakpoint(mobile) {
      margin-top: 90px;
    }
  }
  .epi-wrap {
    margin-top: 180px;
    @include media-breakpoint(mobile) {
      margin-top: 90px;
    }
    .head {
      max-width: 650px;
      margin: 0 auto;
      h5 {
        font-weight: normal;
        b {
          color: $color-green;
        }
      }
      .b1 {
        margin-top: 15px;
      }
    }
    .row {
      display: flex;
      justify-content: center;
      margin-top: 70px;
      @include media-breakpoint(mobile) {
        display: block;
        margin-top: 40px;
      }
      .card-wrap {
        width: 300px;
        margin: 0 15px;
        @include media-breakpoint(mobile) {
          margin: 30px 0 0 0;
          width: 100%;
        }
        .label {
          color: white;
          background: black;
          width: 60px;
          height: 60px;
          border-radius: 100%;
          line-height: 60px;
          margin: 0 auto;
        }
        img {
          width: 108px;
        }
        .card {
          border-radius: 10px;
          background: white;
          padding: 30px 10px;
          color: black;
          margin-top: 10px;
          @include media-breakpoint(mobile) {
            padding: 20px 10px;
          }
          .b2 {
            margin-top: 10px;
          }
        }
      }
    }
  }
  .internet-wrap {
    margin-top: 250px;
    @include media-breakpoint(mobile) {
      margin-top: 90px;
    }
    .head {
      max-width: 650px;
      margin: 0 auto;
      .b4 {
        margin-top: 5px;
      }
      .highlight {
        color: $color-green;
        margin-top: 5px;
      }
    }
    .emoji-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1280px;
      margin: 56px auto 0 auto;
      .emoji-wrap {
        position: relative;
        width: 44px;
        height: 40px;
        margin: 20px 9px 0 9px;
        @include media-breakpoint(mobile) {
          width: 30px;
          height: 30px;
          margin: 5px 2px 0 2px;
        }
        img.emoji {
          width: 44px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          @include media-breakpoint(mobile) {
            width: 30px;
          }
        }
        img.emoji.no-internet {
          opacity: 0.5;
        }
        img.emoji-stroke {
          width: 45px;
          @include media-breakpoint(mobile) {
            width: 31px;
          }
        }
      }
    }
    .per-day-wrap {
      max-width: 650px;
      margin: 90px auto 0 auto;
      @include media-breakpoint(mobile) {
        margin: 50px auto 0 auto;
      }
      b {
        color: $color-green;
      }
      .doughnut-wrap {
        width: 254px;
        height: 254px;
        margin: 50px auto 0 auto;
        position: relative;
        img {
          width: 120px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        img.emoji-stroke {
          width: 121px;
        }
        .doughnut-chart {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .h7 {
        margin-top: 90px;
        @include media-breakpoint(mobile) {
          margin-top: 50px;
        }
      }
    }
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes thinking {
  0% {
    transform: rotate(-60deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-60deg);
  }
}
</style>

<style lang="scss">
.el-select-dropdown {
  border: none;
  border-radius: 0;
  width: 280px;
  text-align: left;
  .popper__arrow {
    display: none;
  }
  .el-select-dropdown__item {
    color: $color-blue;
  }
}
</style>

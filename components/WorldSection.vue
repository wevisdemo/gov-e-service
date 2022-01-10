<template>
  <div class="world-section">
    <div class="intro-wrap">
      <div class="b1">
        ประเมินจากความเห็นส่วนตัวกันไปแล้ว อยากรู้มั้ยว่าในระดับนานาชาติ
      </div>

      <h6>ประเทศไทยอยู่จุดไหน</h6>

      <img :src="earth_emoji" :alt="earth_emoji" class="earth-emoji" />
    </div>

    <div class="research-wrap">
      <div class="h7">
        ผลการสำรวจ <b>UN Gov e-Service survey 2564</b><br />
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
      <img :src="thinking_emoji" :alt="thinking_emoji" class="thinking-emoji" />

      <div class="b1">สงสัยล่ะสิ ว่าเค้าใช้เกณฑ์อะไรในการประเมิน</div>
    </div>

    <div class="measurement-wrap">
      <div class="head">
        <h5>
          <span>E-Government Development Index (EGDI)</span> มีเกณฑ์ในการวัด 3
          ด้าน
        </h5>

        <div class="b1">
          ซึ่งไม่ได้เน้นการวัดเพื่อพัฒนาตามเป้าหมาของ Gov- e-Service โดยตรง
          ส่วนใหญ่เน้นวัดการปฏิบัติงานของรัฐบาลรองรับระดับชาติให้สัมพันธ์กัน
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

                <div class="b2">จำนวนผู้ใช้โทรศัพทฺบ้านต่อประชากร 100 คน</div>
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
              อัตราการรู้หนังสือในผู้ใหญ่ (Adult Literacy)
            </div>

            <div class="b3">
              ร้อยละของผู้ที่มีอายุ 15 ปีขึ้นไป สามารถอ่านและเขียนข้อความง่ายๆ
              ในชีวิตประจำวันได้
            </div>

            <img :src="hci_2_emoji" :alt="hci_2_emoji" class="emoji" />

            <div class="b2 head-text">
              อัตราส่วนการลงทะเบียนทั้งหมดภายในประเทศ (Gross Enrollment Ratio)
            </div>

            <div class="b3">
              จำนวนนักเรียนทั้งหมดที่ลงทะเบียนระดับประถมศึกษา มัธยมศึกษา
              และอุดมศึกษา
            </div>

            <img :src="hci_3_emoji" :alt="hci_3_emoji" class="emoji" />

            <div class="b2 head-text">
              จำนวนปีที่คาดว่าจะได้รับการศึกษา (Expected Years of schooling)
            </div>

            <div class="b3">
              เป็นการตั้งสมมติฐานว่าความน่าจะเป็นอายุของการเรียนในช่วงวัยนั้นๆ
              กับอัตราส่วนการเข้าเรียนในปัจจุบัน
            </div>

            <img :src="hci_4_emoji" :alt="hci_4_emoji" class="emoji" />

            <div class="b2 head-text">
              จำนวนปีเฉลี่ยที่ได้รับการศึกษา (Mean years of schooling)
            </div>

            <div class="b3">จำนวนปีเฉลี่ยของการศึกษา ไม่รวมปีที่เรียนซ้ำ</div>
          </div>
        </div>
      </div>

      <div class="chart-wrap">
        <el-select
          v-model="measurement_select_country"
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

        <RadarChart :data="world_data" />
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
      research_select_country: "",
      measurement_select_country: "",
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
  .select-country {
    width: 280px;
    margin-top: 40px;
    /deep/ {
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
      .point-chart {
        margin: 25px 46px 0 46px;
      }
    }
  }
  .wonder-wrap {
    margin-top: 150px;
    .thinking-emoji {
      width: 80px;
      animation: thinking 4s infinite;
    }
  }
  .measurement-wrap {
    margin-top: 180px;
    .head {
      max-width: 650px;
      margin: 0 auto;
      h5 {
        span {
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
      .card-wrap {
        width: 300px;
        margin: 0 15px;
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
    .chart-wrap {
      margin-top: 140px;
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

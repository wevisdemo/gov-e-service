<template>
  <div class="about-page">
    <WvContainer heading="เกี่ยวกับโครงการ">
      <WvParagraphGroup heading="เป้าหมาย">
        <div class="b2">
          ตั้งแต่เกิดจนตายลง
          เราต่างต้องเกี่ยวข้องกับบริการของภาครัฐโดยรัฐเองก็พยายามทำบริการให้อยู่ในรูปแบบเว็บไซต์และแอปพลิเคชัน
          เรียกว่า E-Government Service เพื่อให้บริการประชาชน
          แต่ค่อนข้างที่จะมีหลากหลายบริการ แถมยังอยู่ในช่องทางที่ต่างกัน
          ทั้งในเว็บไซต์ แอปพลิเคชัน ในไลน์ คำถามคือ
          แล้วจะต้องใช้ช่องทางไหนล่ะถึงจะง่ายที่สุด?
          <br /><br />
          เพื่อให้ทุกคนใช้ชีวิตได้ง่ายขึ้น ทีม WeVis
          จึงรวบรวมข้อมูลและวิธีการใช้บริการภาครัฐที่เกี่ยวข้องกับชีวิตประจำวัน
          (life Hack) เพื่อชี้เป้าช่องทางใช้งาน e-service ของรัฐบาลที่ชีวิตนี้
          ทุกคนหนีไม่พ้น โดยจะเลือก E-Government Service ช่องทางที่ง่ายที่สุด 1
          ช่องทางพร้อมสอนวิธีการแต่ละขั้นตอนอย่างละเอียด
          <br /><br />
          พร้อมกับนำตัวอย่างจากต่างประเทศมาให้แสดงให้เห็นด้วย
          ซึ่งประเทศที่เลือกมาถูกประเมินด้วย UN E-Government Survey
          ใช้เกณฑ์ต่างๆมาประเมินและจัดอันดับประเทศใน United Nations (UN)
          ทั้งหมดถึงการบริการ E-Government Service
          ซึ่งไทยเป็นหนึ่งในประเทศที่ถูกประเมินเช่นกัน
          <br /><br />
          นอกจากการรวบรวมช่องทางแล้ว
          โปรเจกต์นี้ตั้งใจสอบถามความคิดเห็นจากทุกคนที่ใช้บริการว่าเป็นอย่างไรกันบ้าง?
          และความเห็นเหล่านี้จะถูกรวบรวมพื่อยื่นต่อสำนักงานพัฒนารัฐบาลดิจิทัล
          (DGA) ต่อไป เพื่อสุดท้ายจะนำไปสู่การพัฒนา E-Government Service
          ของไทยต่อไป
        </div>
      </WvParagraphGroup>

      <WvParagraphGroup heading="ที่มาของข้อมูล">
        <div class="b2">
          ทางทีมผู้พัฒนา ได้ใช้ข้อมูลจากเว็บไซต์ United Nations (UN)
          เกี่ยวกับข้อมูลการประเมินการให้บริการ E-Government Service
          โดยเกณฑ์ไม่ได้เน้นการวัดเพื่อพัฒนาตามเป้าหมายของ E-Government Service
          โดยตรง
          ส่วนใหญ่เน้นการวัดปฏิบัติงานของรัฐบาลรองรับระดับชาติให้สัมพันธ์กัน
          แต่ภาพรวมของเกณฑ์บอกถึงการให้บริการ และข้อมูลจากสำนักสถิติแห่งชาติ
          เกี่ยวกับสถิติการใช้อินเทอร์เน็ตในไทย
          เว็บไซต์และแอปพลิเคชันการให้บริการ E-Government Service ของประเทศไทย ,
          ประเทศอังกฤษ , ประเทศนิวซีแลนด์ และประเทศแอสโตเนีย
        </div>

        <div class="b3 hint">
          <b>หมายเหตุ</b>

          <br /><br />
          1. ข้อมูลจากต่างประเทศบางบริการต้องใช้รหัสเฉพาะภายในประเทศนั้นๆ
          ทำให้ไม่สามารถนำข้อมูลเชิงลึกมาให้ได้
          ซึ่งพยายามรวบรวมมาให้มากที่สุดเท่าที่จะทำได้เพื่อมาแสดงผล<br /><br />
          2.
          จากการสำรวจและรวบรวมข้อมูลมีเว็บไซต์หรือแอปพลิเคชันของรัฐบาลที่ดีเช่นกัน
          แต่ไม่ได้เลือกมาแสดง อย่างเช่น CITIZENinfo
          ที่สำนักงานพัฒนารัฐบาลดิจิทัล (สพร.)
          พยายามพัฒนาเพื่อชี้เป้าให้ประชาชนรู้ว่าถ้าต้องติดต่อบริการภาครัฐ
          ต้องเตรียมเอกสารอะไรบ้าง ต้องไปทำเรื่องที่ไหนบ้าง (แต่หลายๆ
          บริการก็ยังไม่มีข้อมูลและไม่สามารถดำเนินการผ่านช่องทางออนไลน์ได้)
        </div>

        <WvParagraphGroup small heading="อ้างอิงข้อมูลจาก :">
          <ul class="b2">
            <li v-for="(link, index) in ref_links" :key="index">
              <a :href="link" target="_blank" rel="noopener noreferrer">
                {{ link }}</a
              >
            </li>
          </ul>
        </WvParagraphGroup>
      </WvParagraphGroup>

      <WvParagraphGroup heading="นโยบายการนำข้อมูลไปใช้ต่อ">
        <div class="b2">
          ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
          และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
          Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้
          โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
          และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
          <br /><br />
          หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
          ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
          หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
        </div>
      </WvParagraphGroup>

      <WvParagraphGroup heading="อาสาสมัครร่วมพัฒนา">
        <WvParagraphGroup small heading="เขียนโปรแกรม">
          <div class="b2">กฤษณ์ ตันติแสงอรุณ</div>
        </WvParagraphGroup>

        <WvParagraphGroup small heading="ออกแบบ">
          <a
            href="https://www.instagram.com/namsaisupavong/"
            target="_blank"
            rel="noopener noreferrer"
            class="b2"
            >น้ำใส ศุภวงศ์</a
          >
        </WvParagraphGroup>

        <WvParagraphGroup small heading="สืบค้นและรวบรวมข้อมูล">
          <a
            href="https://www.linkedin.com/in/suphisara-isaranugul-a943b017b/"
            target="_blank"
            rel="noopener noreferrer"
            class="b2"
            >ศุภิสรา อิศรานุกูล</a
          >
        </WvParagraphGroup>

        <WvParagraphGroup small heading="บรรณาธิการ">
          <a
            href="https://www.linkedin.com/in/thanisara-r/"
            target="_blank"
            rel="noopener noreferrer"
            class="b2"
            >ธนิสรา เรืองเดช</a
          >
        </WvParagraphGroup>

        <WvParagraphGroup small heading="ประสานงานและจัดการอื่นๆ">
          <div class="b2">
            <a
              href="https://punchup.world/"
              target="_blank"
              rel="noopener noreferrer"
              class="highlight"
              >Punch Up</a
            >
            โปรเจกต์ Life Hack ชี้เป้า!!รวมช่องทางใช้งาน e-service
            ของรัฐบาลที่ชีวิตนี้ คุณหนีไม่พ้นแน่นอน
            ยังได้รับการสนับสนุนทุนในการดำเนินงานจาก
            <a
              href="https://www.ned.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="highlight"
            >
              National Endowment for Democracy (NED)</a
            >
            ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์
            ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
          </div>
        </WvParagraphGroup>
      </WvParagraphGroup>

      <WvButtonGroup center>
        <a
          href="https://docs.google.com/spreadsheets/d/1UWnq7W4KR5KWVBMCsR_ccqoksd1vlYmBs63GA5yu-6I/edit#gid=502117389"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WvButton
            ><svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_314_173)">
                <path
                  d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <line
                  x1="10.667"
                  y1="0.5"
                  x2="10.667"
                  y2="13"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_314_173">
                  <rect
                    width="20.8333"
                    height="20"
                    fill="white"
                    transform="translate(0.0834961 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div>ดาวน์โหลดข้อมูล</div>
          </WvButton>
        </a>

        <a
          href="https://airtable.com/shryu4errnlj1LWsM"
          target="_blank"
          rel="noopener noreferrer"
          class="b2"
        >
          <WvButton>
            <img
              width="26"
              src="data:image/png;base64,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"
              alt=""
            />
            <span>Feedback</span>
          </WvButton>
        </a>
      </WvButtonGroup>

      <WvSharer center :url="web_url" />
    </WvContainer>
  </div>
</template>

<script>
import WvContainer from "@wevisdemo/ui/components/container.vue";
import WvParagraphGroup from "@wevisdemo/ui/components/paragraph-group.vue";
import WvButtonGroup from "@wevisdemo/ui/components/button-group.vue";
import WvButton from "@wevisdemo/ui/components/button.vue";
import WvSharer from "@wevisdemo/ui/components/sharer.vue";

export default {
  components: {
    WvContainer,
    WvParagraphGroup,
    WvButtonGroup,
    WvButton,
    WvSharer,
  },
  data() {
    return {
      web_url: "",
      ref_links: [
        "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/169-Thailand",
        "https://www.un-ilibrary.org/content/books/9789210051453/read",
        "https://publicadministration.un.org/egovkb/en-us/About/Overview/-E-Government-Development-Index",
        "https://publicadministration.un.org/egovkb/en-us/About/Methodology",
        "https://www.etda.or.th/th/Useful-Resource/Digital-Service/The-Power-and-Development-of-Government-e-Services.aspx",
        "https://www.pptvhd36.com/news/สังคม/142614",
        "https://publicadministration.un.org/egovkb/en-us/",
        "http://statbbi.nso.go.th/staticreport/page/sector/th/01.aspx",
        "https://www.gov.uk/",
        "https://www.govt.nz/",
        "https://youtu.be/bJlclVa_v9k",
        "https://youtu.be/RqZ9e1GXJLo",
        "https://www.britbound.com/the-inbounder/step-by-step-applying-for-your-national-insurance-number-nino",
        "https://www.eesti.ee/en/",
        "https://www.e-resident.gov.ee/become-an-e-resident/",
        "https://q-online.bora.dopa.go.th",
        "https://apps.apple.com/th/app/bmaq/id1438840804",
        "https://www.mhesi.go.th/",
        "https://www.doe.go.th/prd/",
        "https://apps.apple.com/th/app/smart-vote/id1447199802?l=th",
        "https://apps.apple.com/th/app/thaimeengantham/id1557393379",
        "https://www.dlt.go.th/th/",
        "https://consular.mfa.go.th/th/index",
        "https://page.line.me/?accountId=mophconnect&openerPlatform=webview&openerKey=webview%3AunifiedSearch#mst_challenge=zyBJOxOSVqQbzx5oLhu23_q8oDREMqPM_T3LUfnk7og",
        "https://www.sso.go.th/eform_news/",
      ],
    };
  },
  mounted() {
    this.web_url = window.location.href;
  },
};
</script>

<style lang="scss" scoped>
.about-page {
  text-align: left;
  .b2 {
    display: block;
  }
  a {
    color: black;
    text-decoration: none;
  }
  a.highlight {
    color: $color-ultramarine;
  }
  a:hover {
    text-decoration: underline;
  }
  ul {
    margin-top: 10px;
    a {
      word-break: break-all;
    }
  }
}
</style>

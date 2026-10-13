<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 서바이벌 선택 게임에서</p>
      <img
        src="~/assets/image/illust/result_ESTP.png"
        alt="위험한 도박사 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ESTP</p>
      <p class="charName">위험한 도박사</p>
      <p class="mbtiSummary">행동이 빠르고 적응력이 강한 활동적인 인물</p>
    </div>
    <main>
      <div class="mbtiInfo_wrap">
        <section class="mbtiInfo">
          <p class="mbtiInfo_summary">서바이벌 게임에서 당신은?</p>
          <ul class="mbtiInfo_text">
            <li v-for="(text, i) in mbtiInfo_text" :key="i">
              <span>{{ text }}</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="mbtiInfo2_wrap">
        <section class="mbtiInfo2">
          <p class="mbtiInfo2_summary">현실 세계에서 당신은?</p>
          <ul class="mbtiInfo2_text">
            <LinkShare
              v-if="!firstTest"
              :result-link="resultLink"
              :home-link="homeLink"
              :mbti="mbti"
              :middle="true"
              @blurClass="blurResult"
            ></LinkShare>
            <li
              v-for="(text, i) in mbtiInfo2_text"
              :key="i"
              :class="{ blurList: blurClass }"
            >
              <span>{{ text }}</span>
            </li>
          </ul>
        </section>
      </div>
      <section v-if="!firstTest" class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('INFJ')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/illust/result_INFJ.png"
              alt="신비로운 관찰자 이미지"
            />
            <p class="typeCharName">신비로운 관찰자</p>
            <p class="typeCharInfo">창의력과 통찰력이 뛰어난 독창적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('INFP')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/illust/result_INFP.png"
              alt="강인한 이방인 이미지"
            />
            <p class="typeCharName">강인한 이방인</p>
            <p class="typeCharInfo">신념과 조화를 중시하는 이상주의자형 인물</p>
          </section>
        </div>
      </section>
    </main>
    <footer>
      <section v-if="!firstTest">
        <LinkShare
          :result-link="resultLink"
          :home-link="homeLink"
          :mbti="mbti"
        ></LinkShare>
        <div class="footerBTN">
          <button class="allResultBTN" @click="showResult">
            결과 전체보기
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.5L6 5.5L1 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="testRestart" @click="testRestart">
            테스트 다시하기
            <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_98_158" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="2" width="10" height="11">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96521 2.56897H4.9997V7.53449H0.0341797V12.5H9.96521V2.56897Z" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0_98_158)">
                <circle cx="4.9997" cy="7.53449" r="4.46552" stroke="white" />
              </g>
              <path d="M7.15463 0.5L4.67188 3.39655L7.15463 6.2931" stroke="white" />
            </svg>
          </button>
        </div>
      </section>
      <article v-else>
        <button class="returnResult" @click="returnResult">결과로 돌아가기</button>
      </article>
    </footer>
    <Final_Modal v-if="showModal" @close="showModal = false" @closeModal="closeModal"></Final_Modal>
  </div>
</template>

<script>
import Final_Modal from "./Final_Modal.vue";
import LinkShare from "~/components/LinkShare.vue";

export default {
  name: "FinalESTP",
  components: { Final_Modal, LinkShare },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => { if (process.client) return window.location.href; },
      homeLinkResult: () => { if (process.client) return window.location.origin; },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "ESTP",
      mbtiInfo_text: [
        "순간적인 판단력이 뛰어나며 위기 상황에서 빠르게 행동한다.",
        "위험을 기회로 전환하는 대담한 도박사적 기질을 가지고 있다.",
        "강인한 체력과 추진력으로 팀 안에서 영향력을 발휘한다.",
        "감정보다 논리를 앞세우며 상황을 냉정하게 분석한다.",
        "주도권을 잡기 위해 다양한 전략적 행동을 서슴지 않는다.",
      ],
      mbtiInfo2_text: [
        "현실적이고 즉각적인 결과를 중시하는 행동파다.",
        "이론보다 실전을 선호하며 현장에서 빠르게 배운다.",
        "사교적이고 에너지가 넘치며 주목받는 것을 즐긴다.",
        "위험을 감수하는 것을 두려워하지 않으며 스릴을 즐긴다.",
        "문제 해결에 있어 논리적이면서도 실용적인 접근을 선호한다.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "서바이벌 선택 게임 MBTI — 위험한 도박사 ESTP",
      meta: [
        { hid: "title", name: "og:title", content: "서바이벌 선택 게임 MBTI — 위험한 도박사 ESTP" },
        { hid: "description", name: "og:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "image", name: "og:image", content: `${process.env.baseURL}/image/meta/metaimg_estp.png` },
        { hid: "twitter:title", name: "twitter:title", content: "서바이벌 선택 게임 MBTI — 위험한 도박사 ESTP" },
        { hid: "twitter:description", name: "twitter:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "twitter:image", name: "twitter:image", content: `${process.env.baseURL}/image/meta/metaimg_estp.png` },
      ],
    };
  },
  created() {
    if (this.$route.query.firstTest) {
      this.firstTest = this.$route.query.firstTest;
      this.blurClass = false;
    }
    this.resultLink = this.resultLinkResult();
    this.homeLink = this.homeLinkResult();
  },
  methods: {
    showResult() { this.showModal = !this.showModal; },
    closeModal(show) { this.showModal = show; },
    typeLink(type) { this.$router.push({ path: `${type}?firstTest=true` }); },
    testRestart() { this.$router.push({ path: "/ko" }); },
    returnResult() { this.$router.go(-1); },
    blurResult() { this.blurClass = false; },
  },
};
</script>

<style scoped>
@import "~/assets/css/Final_MBTI.css";
</style>

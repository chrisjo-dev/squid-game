<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 서바이벌 선택 게임에서</p>
      <img
        src="~/assets/image/illust/result_INTP.png"
        alt="충직한 실행자 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">INTP</p>
      <p class="charName">충직한 실행자</p>
      <p class="mbtiSummary">이해가 빠르고 통찰력 있는 아이디어형 인물</p>
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
          <section class="typeGood" @click="typeLink('ENFJ')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/illust/result_ENFJ.png"
              alt="따뜻한 동료 이미지"
            />
            <p class="typeCharName">따뜻한 동료</p>
            <p class="typeCharInfo">주변을 행복하게 만드는 따뜻한 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ENFP')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/illust/result_ENFP.png"
              alt="자유로운 영혼 이미지"
            />
            <p class="typeCharName">자유로운 영혼</p>
            <p class="typeCharInfo">열정과 상상력이 넘치는 자유로운 인물</p>
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
  name: "FinalINTP",
  components: { Final_Modal, LinkShare },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => { if (process.client) return window.location.href; },
      homeLinkResult: () => { if (process.client) return window.location.origin; },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "INTP",
      mbtiInfo_text: [
        "규칙과 상황을 논리적으로 분석하여 최적의 행동 경로를 찾는다.",
        "무뚝뚝해 보이지만 맡은 역할은 완벽하게 수행한다.",
        "감정보다는 데이터와 관찰 결과를 바탕으로 판단한다.",
        "자신의 역할 범위 밖의 일에는 관여하지 않는 원칙주의자다.",
        "조용히 관찰하다가 결정적인 순간에 핵심을 짚는 말을 한다.",
      ],
      mbtiInfo2_text: [
        "조용하고 과묵하지만 관심 있는 분야에서는 말을 잘 한다.",
        "분석적이고 논리적이며 객관적 비평을 잘 한다.",
        "이론적 아이디어를 분석하는 것을 즐기며 지적인 토론을 선호한다.",
        "규칙보다 논리를 우선시하며 비효율을 참지 못한다.",
        "독립적이고 자율적인 환경에서 최대의 역량을 발휘한다.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "서바이벌 선택 게임 MBTI — 충직한 실행자 INTP",
      meta: [
        { hid: "title", name: "og:title", content: "서바이벌 선택 게임 MBTI — 충직한 실행자 INTP" },
        { hid: "description", name: "og:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "image", name: "og:image", content: `${process.env.baseURL}/image/meta/metaimg_intp.png` },
        { hid: "twitter:title", name: "twitter:title", content: "서바이벌 선택 게임 MBTI — 충직한 실행자 INTP" },
        { hid: "twitter:description", name: "twitter:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "twitter:image", name: "twitter:image", content: `${process.env.baseURL}/image/meta/metaimg_intp.png` },
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

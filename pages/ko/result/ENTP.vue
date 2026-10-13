<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 서바이벌 선택 게임에서</p>
      <img
        src="~/assets/image/illust/result_ENTP.png"
        alt="도발적 혁신가 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ENTP</p>
      <p class="charName">도발적 혁신가</p>
      <p class="mbtiSummary">자신감과 창의력이 넘치는 혁신적인 인물</p>
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
          <section class="typeGood" @click="typeLink('ISFJ')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/illust/result_ISFJ.png"
              alt="희생적인 후원자 이미지"
            />
            <p class="typeCharName">희생적인 후원자</p>
            <p class="typeCharInfo">책임감이 강하고 헌신적인 인내심 많은 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ISFP')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/illust/result_ISFP.png"
              alt="조용한 목격자 이미지"
            />
            <p class="typeCharName">조용한 목격자</p>
            <p class="typeCharInfo">감수성이 풍부하고 독립심이 강한 인물</p>
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
  name: "FinalENTP",
  components: { Final_Modal, LinkShare },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => { if (process.client) return window.location.href; },
      homeLinkResult: () => { if (process.client) return window.location.origin; },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "ENTP",
      mbtiInfo_text: [
        "참가자들 사이에서 예상치 못한 아이디어로 기회를 만들어낸다.",
        "경쟁심이 강하고 도전적인 상황을 즐기는 편이다.",
        "기존 규칙의 허점을 찾아 자신에게 유리하게 활용하는 능력이 있다.",
        "논리적으로 상황을 분석하되, 때로는 도발적인 방식으로 상황을 뒤흔든다.",
        "다방면에 빠르게 적응하며 여러 전략을 동시에 실험한다.",
      ],
      mbtiInfo2_text: [
        "독창적인 혁신가이며 창의력이 풍부해서 새로운 시도를 즐긴다.",
        "다방면에 재능이 있고 자신감과 에너지가 넘친다.",
        "논쟁과 토론을 즐기며 다양한 관점에서 사고한다.",
        "새로운 아이디어를 실험하는 것을 좋아하지만 완결짓는 데 어려움을 겪기도 한다.",
        "규칙보다는 가능성을 우선하는 유연한 사고방식을 가지고 있다.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "서바이벌 선택 게임 MBTI — 도발적 혁신가 ENTP",
      meta: [
        { hid: "title", name: "og:title", content: "서바이벌 선택 게임 MBTI — 도발적 혁신가 ENTP" },
        { hid: "description", name: "og:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "image", name: "og:image", content: `${process.env.baseURL}/image/meta/metaimg_entp.png` },
        { hid: "twitter:title", name: "twitter:title", content: "서바이벌 선택 게임 MBTI — 도발적 혁신가 ENTP" },
        { hid: "twitter:description", name: "twitter:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "twitter:image", name: "twitter:image", content: `${process.env.baseURL}/image/meta/metaimg_entp.png` },
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

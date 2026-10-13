<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 서바이벌 선택 게임에서</p>
      <img
        src="~/assets/image/illust/result_ESTJ.png"
        alt="냉혹한 권력자 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ESTJ</p>
      <p class="charName">냉혹한 권력자</p>
      <p class="mbtiSummary">계획과 조직력이 뛰어난 실행가형 인물</p>
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
          <section class="typeGood" @click="typeLink('ISFP')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/illust/result_ISFP.png"
              alt="조용한 목격자 이미지"
            />
            <p class="typeCharName">조용한 목격자</p>
            <p class="typeCharInfo">감수성이 풍부하고 독립심이 강한 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('INFJ')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/illust/result_INFJ.png"
              alt="신비로운 관찰자 이미지"
            />
            <p class="typeCharName">신비로운 관찰자</p>
            <p class="typeCharInfo">창의력과 통찰력이 뛰어난 독창적인 인물</p>
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
  name: "FinalESTJ",
  components: { Final_Modal, LinkShare },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => { if (process.client) return window.location.href; },
      homeLinkResult: () => { if (process.client) return window.location.origin; },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "ESTJ",
      mbtiInfo_text: [
        "냉정한 판단력으로 상황을 지배하며 자원을 체계적으로 관리한다.",
        "규칙과 질서를 중시하며 이를 어기는 참가자들을 용납하지 않는다.",
        "목표 달성을 위해 타협하지 않는 강한 실행력을 보여준다.",
        "구체적인 계획 속에서 움직이며 불확실성을 극도로 싫어한다.",
        "리더십이 강하지만 때로는 지나치게 통제적인 모습을 보인다.",
      ],
      mbtiInfo2_text: [
        "일을 구체적으로 조직하고 계획하는 능력이 뛰어나다.",
        "체계적이고 조직화된 시스템 속에서 결단력 있는 행동을 보인다.",
        "현실적이고 사실에 기반한 판단을 중시한다.",
        "책임감이 강하고 의무를 다하는 것을 중요하게 여긴다.",
        "지역 사회와 조직의 규범을 존중하고 그것을 지키려 한다.",
        "때로는 융통성이 부족하고 지나치게 통제적일 수 있다.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "서바이벌 선택 게임 MBTI — 냉혹한 권력자 ESTJ",
      meta: [
        { hid: "title", name: "og:title", content: "서바이벌 선택 게임 MBTI — 냉혹한 권력자 ESTJ" },
        { hid: "description", name: "og:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "image", name: "og:image", content: `${process.env.baseURL}/image/meta/metaimg_estj.png` },
        { hid: "twitter:title", name: "twitter:title", content: "서바이벌 선택 게임 MBTI — 냉혹한 권력자 ESTJ" },
        { hid: "twitter:description", name: "twitter:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "twitter:image", name: "twitter:image", content: `${process.env.baseURL}/image/meta/metaimg_estj.png` },
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

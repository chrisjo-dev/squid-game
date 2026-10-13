<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 서바이벌 선택 게임에서</p>
      <img
        src="~/assets/image/illust/result_ENTJ.png"
        alt="냉철한 전략가 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ENTJ</p>
      <p class="charName">냉철한 전략가</p>
      <p class="mbtiSummary">목표를 향해 냉철하게 이끄는 지도자형 인물</p>
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
          <section class="typeGood" @click="typeLink('INFP')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/illust/result_INFP.png"
              alt="강인한 이방인 이미지"
            />
            <p class="typeCharName">강인한 이방인</p>
            <p class="typeCharInfo">신념과 조화를 중시하는 이상주의자형 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ISFJ')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/illust/result_ISFJ.png"
              alt="희생적인 후원자 이미지"
            />
            <p class="typeCharName">희생적인 후원자</p>
            <p class="typeCharInfo">책임감이 강하고 헌신적인 인내심 많은 인물</p>
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
  name: "FinalENTJ",
  components: { Final_Modal, LinkShare },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => { if (process.client) return window.location.href; },
      homeLinkResult: () => { if (process.client) return window.location.origin; },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "ENTJ",
      mbtiInfo_text: [
        "복잡한 상황을 빠르게 분석하고 냉철하게 전략을 세운다.",
        "팀을 이끌 때 감정보다 효율을 앞세우는 카리스마형 지도자다.",
        "목표 달성을 위해서라면 어렵고 불편한 결정도 주저하지 않는다.",
        "전체적인 그림을 보며 자원과 인원을 최적으로 배분한다.",
        "압박 상황에서도 침착함을 유지하며 팀을 방향으로 이끈다.",
      ],
      mbtiInfo2_text: [
        "다소 내향적이고 합리적이며 이성적인 판단을 잘 한다.",
        "독립적인 성격이 강해 혼자만의 시간을 즐기는 편이다.",
        "자신과 타인 모두에게 높은 기준을 요구한다.",
        "직관과 논리를 결합해 복잡한 문제를 해결하는 능력이 있다.",
        "목표를 향해 강한 의지와 결단력으로 밀고 나간다.",
        "장기적인 계획을 세우고 그것을 실현하는 데서 만족감을 얻는다.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "서바이벌 선택 게임 MBTI — 냉철한 전략가 ENTJ",
      meta: [
        { hid: "title", name: "og:title", content: "서바이벌 선택 게임 MBTI — 냉철한 전략가 ENTJ" },
        { hid: "description", name: "og:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "image", name: "og:image", content: `${process.env.baseURL}/image/meta/metaimg_entj.png` },
        { hid: "twitter:title", name: "twitter:title", content: "서바이벌 선택 게임 MBTI — 냉철한 전략가 ENTJ" },
        { hid: "twitter:description", name: "twitter:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "twitter:image", name: "twitter:image", content: `${process.env.baseURL}/image/meta/metaimg_entj.png` },
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

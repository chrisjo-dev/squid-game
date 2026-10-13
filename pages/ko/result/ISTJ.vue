<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 서바이벌 선택 게임에서</p>
      <img
        src="~/assets/image/illust/result_ISTJ.png"
        alt="집념의 추적자 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ISTJ</p>
      <p class="charName">집념의 추적자</p>
      <p class="mbtiSummary">시작한 일은 끝까지 하는 완벽주의자형 인물</p>
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
          <section class="typeGood" @click="typeLink('ENFP')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/illust/result_ENFP.png"
              alt="자유로운 영혼 이미지"
            />
            <p class="typeCharName">자유로운 영혼</p>
            <p class="typeCharInfo">열정과 상상력이 넘치는 자유로운 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ENFJ')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/illust/result_ENFJ.png"
              alt="따뜻한 동료 이미지"
            />
            <p class="typeCharName">따뜻한 동료</p>
            <p class="typeCharInfo">주변을 행복하게 만드는 따뜻한 인물</p>
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
  name: "FinalISTJ",
  components: { Final_Modal, LinkShare },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => { if (process.client) return window.location.href; },
      homeLinkResult: () => { if (process.client) return window.location.origin; },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "ISTJ",
      mbtiInfo_text: [
        "목표를 정하면 반드시 이루는 강한 집념과 인내심을 가지고 있다.",
        "사실과 데이터를 바탕으로 신중하게 행동하며 충동적이지 않다.",
        "한번 맡은 임무는 완수할 때까지 놓지 않는 완벽주의자다.",
        "규칙을 철저히 따르며 예외를 쉽게 허용하지 않는다.",
        "신뢰할 수 있는 체계와 루틴 안에서 최고의 성과를 발휘한다.",
      ],
      mbtiInfo2_text: [
        "궁금한 것은 목숨이 걸려도 직접 체험하고 경험하는 도전적인 성격이다.",
        "한번 시작한 일은 끝까지 성실하게 해내는 성격이다.",
        "책임감이 강하고 신뢰할 수 있는 인물이다.",
        "사실과 데이터를 바탕으로 신중하게 판단하고 결정을 내린다.",
        "전통과 규율을 존중하며 체계적인 환경에서 최선을 다한다.",
        "감정보다 의무를 우선시하며 맡은 일을 반드시 완수한다.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "서바이벌 선택 게임 MBTI — 집념의 추적자 ISTJ",
      meta: [
        { hid: "title", name: "og:title", content: "서바이벌 선택 게임 MBTI — 집념의 추적자 ISTJ" },
        { hid: "description", name: "og:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "image", name: "og:image", content: `${process.env.baseURL}/image/meta/metaimg_istj.png` },
        { hid: "twitter:title", name: "twitter:title", content: "서바이벌 선택 게임 MBTI — 집념의 추적자 ISTJ" },
        { hid: "twitter:description", name: "twitter:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "twitter:image", name: "twitter:image", content: `${process.env.baseURL}/image/meta/metaimg_istj.png` },
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

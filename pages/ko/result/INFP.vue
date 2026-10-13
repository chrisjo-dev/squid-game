<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 서바이벌 선택 게임에서</p>
      <img
        src="~/assets/image/illust/result_INFP.png"
        alt="강인한 이방인 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">INFP</p>
      <p class="charName">강인한 이방인</p>
      <p class="mbtiSummary">신념과 조화를 중시하는 이상주의자형 인물</p>
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
          <section class="typeBad" @click="typeLink('ESTP')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/illust/result_ESTP.png"
              alt="위험한 도박사 이미지"
            />
            <p class="typeCharName">위험한 도박사</p>
            <p class="typeCharInfo">행동이 빠르고 적응력이 강한 활동적인 인물</p>
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
  name: "FinalINFP",
  components: { Final_Modal, LinkShare },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => { if (process.client) return window.location.href; },
      homeLinkResult: () => { if (process.client) return window.location.origin; },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "INFP",
      mbtiInfo_text: [
        "홀로 있는 시간 속에서도 강한 내면의 신념으로 자신을 지킨다.",
        "타인과 쉽게 가까워지지 않지만, 신뢰한 사람에게는 전심을 다한다.",
        "약자나 소외된 참가자를 그냥 지나치지 못하는 공감 능력이 있다.",
        "원칙과 가치에 반하는 행동을 요구받으면 강하게 저항한다.",
        "극한 상황에서도 자신만의 고요함과 내적 균형을 유지한다.",
      ],
      mbtiInfo2_text: [
        "마음은 따뜻하지만 상대방을 잘 알기 전까지는 표현을 잘 하지 않는다.",
        "자신이 지향하는 이상에 대해서는 정열적인 신념을 갖고 있다.",
        "유연하고 적응력이 있으며 무엇이든 가능하다고 생각하는 낙관주의자다.",
        "감정이입 능력이 탁월하고 타인의 고통에 깊이 공감한다.",
        "자신만의 가치와 신념에 따라 조용하지만 단호하게 행동한다.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "서바이벌 선택 게임 MBTI — 강인한 이방인 INFP",
      meta: [
        { hid: "title", name: "og:title", content: "서바이벌 선택 게임 MBTI — 강인한 이방인 INFP" },
        { hid: "description", name: "og:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "image", name: "og:image", content: `${process.env.baseURL}/image/meta/metaimg_infp.png` },
        { hid: "twitter:title", name: "twitter:title", content: "서바이벌 선택 게임 MBTI — 강인한 이방인 INFP" },
        { hid: "twitter:description", name: "twitter:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "twitter:image", name: "twitter:image", content: `${process.env.baseURL}/image/meta/metaimg_infp.png` },
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

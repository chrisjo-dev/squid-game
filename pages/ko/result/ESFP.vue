<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 서바이벌 선택 게임에서</p>
      <img
        src="~/assets/image/illust/result_ESFP.png"
        alt="대담한 생존자 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ESFP</p>
      <p class="charName">대담한 생존자</p>
      <p class="mbtiSummary">현실적이고 활동적인 대담한 인물</p>
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
          <section class="typeGood" @click="typeLink('INTJ')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/illust/result_INTJ.png"
              alt="냉혹한 조종자 이미지"
            />
            <p class="typeCharName">냉혹한 조종자</p>
            <p class="typeCharInfo">행동과 사고가 단호한 독립적인 인물</p>
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
  name: "FinalESFP",
  components: { Final_Modal, LinkShare },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => { if (process.client) return window.location.href; },
      homeLinkResult: () => { if (process.client) return window.location.origin; },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "ESFP",
      mbtiInfo_text: [
        "어떤 상황에서도 빠르게 적응하며 현재에 집중하는 현실주의자다.",
        "타인과의 경계가 명확하고 자신의 생존을 위해 냉정한 판단을 내린다.",
        "위험한 순간에도 특유의 담대함으로 예상 밖의 행동을 보여준다.",
        "사교적인 매력으로 다양한 참가자들과 관계를 형성한다.",
        "어려운 상황을 유연하게 헤쳐나가는 강한 생존 본능을 가지고 있다.",
      ],
      mbtiInfo2_text: [
        "현실적이고 실제적이며 어떤 상황에도 타협적이다.",
        "웃음과 즐거움을 추구하는 성격이다.",
        "선입견이 적고 개방적이며 사람들과 잘 어울린다.",
        "지금 이 순간에 충실하며 즉흥적인 즐거움을 중요하게 여긴다.",
        "감정에 솔직하고 자신의 느낌을 꾸밈없이 표현한다.",
        "새로운 상황에 빠르게 적응하며 다양한 사람들과 잘 어울린다.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "서바이벌 선택 게임 MBTI — 대담한 생존자 ESFP",
      meta: [
        { hid: "title", name: "og:title", content: "서바이벌 선택 게임 MBTI — 대담한 생존자 ESFP" },
        { hid: "description", name: "og:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "image", name: "og:image", content: `${process.env.baseURL}/image/meta/metaimg_esfp.png` },
        { hid: "twitter:title", name: "twitter:title", content: "서바이벌 선택 게임 MBTI — 대담한 생존자 ESFP" },
        { hid: "twitter:description", name: "twitter:description", content: "나는 서바이벌 선택 게임에서 어떤 유형일까?" },
        { hid: "twitter:image", name: "twitter:image", content: `${process.env.baseURL}/image/meta/metaimg_esfp.png` },
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

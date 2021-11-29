<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/주최자_INTJ_200.png" alt="주최자 이미지" class="mbtiIMG" />
      <p class="mbti">INTJ</p>
      <p class="charName">주최자</p>
      <p class="mbtiSummary">행동과 사고가 단호한 <br />독립적인 인물</p>
    </div>
    <main>
      <div class="mbtiInfo_wrap">
        <section class="mbtiInfo">
          <p class="mbtiInfo_summary">오징어 게임에서 당신은?</p>
          <ul class="mbtiInfo_text">
            <li v-for="(text, i) in mbtiInfo_text" :key="i">
              <span>{{ text }}</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="mbtiInfo2_wrap">
        <section class="mbtiInfo2">
          <p class="mbtiInfo2_summary">현실세계에서 당신은?</p>
          <ul class="mbtiInfo2_text">

            <li v-for="(text, i) in mbtiInfo2_text" :key="i">
              <span>{{ text }}</span>

            <LinkShare
              :resultLink="resultLink"
              :homeLink="homeLink"
              :mbti="mbti"
              :middle="true"
              v-on:blurClass="blurResult"
              v-if="!firstTest"
            ></LinkShare>
            <li v-for="(text, i) in mbtiInfo2_text" :key="i" :class="{ blurList: blurClass }">
              {{ text }}

            </li>
          </ul>
        </section>
      </div>
      <section class="typeMatch" v-if="!firstTest">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('ESFP')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/한미녀_ESFP_100.png" alt="INTJ와 잘맞는 유형" />
            <p class="typeCharName">한미녀</p>
            <p class="typeCharInfo">현실적이고 실제적인 <br />사교적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ESFJ')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/조상우맘_ESFJ_100.png" alt="INTJ와 잘맞는 유형" />
            <p class="typeCharName">조상우의 어머니</p>
            <p class="typeCharInfo">동정심과 참을성이 많은<br />양심적인 인물</p>
          </section>
        </div>
      </section>
    </main>
    <footer>
      <section v-if="!firstTest">
        <LinkShare :resultLink="resultLink" :homeLink="homeLink" :mbti="mbti"></LinkShare>
        <div class="footerBTN">
          <button class="allResultBTN" @click="showResult">
            결과 전체보기
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.5L6 5.5L1 10.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="testRestart" @click="testRestart">
            테스트 다시하기
            <svg
              width="10"
              height="13"
              viewBox="0 0 10 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_98_158"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="2"
                width="10"
                height="11"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.96521 2.56897H4.9997V7.53449H0.0341797V12.5H9.96521V2.56897Z"
                  fill="#C4C4C4"
                />
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
    <Final_Modal v-if="showModal" @close="showModal = false" v-on:closeModal="closeModal">
    </Final_Modal>
  </div>
</template>

<script>
import Final_Modal from "./Final_Modal.vue";
import LinkShare from "../LinkShare.vue";

export default {
  name: "Final_INTJ",
  props: {
    firstTest: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,

      mbtiInfo2_text: [

      resultLink: window.location.href,
      homeLink: window.location.origin,
      blurClass: true,
      mbti: "INTJ",
      mbtiInfo_text: [

        "행동과 사고에 있어서 독창적이다.",
        "내적 신념과 비전이 엄청 강하며 고집이 아주 세다. ",
        "목적달성을 위해서는 모든 시간과 노력을 다해 일한다.",
        "자신과 타인의 능력을 중시한다.",
        "16가지 유형중 가장 독립적이고 단호하다.",
        "범생이라는 평가가 늘 따라다니며 타인으로부터 항상 신뢰받는다.",
      ],
      mbtiInfo_text: [
        "빚에 허덕이며 살고 미래가 불확실한 사람들을 모아서 무자비한 오징어 게임을 개최한 게임 주최자이다.",
        "사회적으로 신뢰받는 능력 있는 사업가 출신이다.",
        "어마어마한 재력가이지만 삶의 낙을 잃어서, 궁지에 몰린 사람들이 게임을 하면서 처절하게 생존하는 모습을 보면서 즐거움을 느낀다.",
        "자신만의 독특한 신념을 바탕으로 오징어 게임을 꾸준히 개최하고 있다.",
        "뇌종양으로 시한부 인생을 살아가는 와중에도 자신이 주최하는 게임에 직접 참여를 하면서 열정을 다하는 기묘함을 보여준다.",
        "드라마 내에서 치밀한 일처리가 강점이고 많은 경험과 연룬 덕분에 타인을 손쉽게 조정하는 능력을 보여준다. ",
      ],
    };
  },
  components: {
    Final_Modal,
    LinkShare,
  },
  created() {
    if (this.firstTest) {
      this.blurClass = false;
    }
  },
  methods: {
    showResult() {
      this.showModal = !this.showModal;
    },
    closeModal(show) {
      this.showModal = show;
    },
    typeLink(type) {
      this.$router.push({ name: `Final_${type}`, params: { firstTest: true } });
    },
    testRestart() {
      this.$router.push({ name: "Main" });
    },
    returnResult() {
      this.$router.go(-1);
    },
    blurResult() {
      this.blurClass = false;
    },
  },
};
</script>

<style scoped>
@import "../../css/Final_MBTI.css";
</style>

<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/VIP_ESTJ_200.png" alt="VIP 이미지" class="mbtiIMG" />
      <p class="mbti">ESTJ</p>
      <p class="charName">VIPS</p>
      <p class="mbtiSummary">계획하는 능력이 뛰어난 <br />사업가형 인물</p>
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
          <section class="typeGood" @click="typeLink('ISFP')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/지영_ISFP_100.png" alt="ESTJ와 잘맞는 유형" />
            <p class="typeCharName">지영</p>
            <p class="typeCharInfo">감수성이 풍부하고 <br />독립심이 많은 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('INFJ')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/오일남_INFJ_100.png" alt="ESTJ와 잘맞는 유형" />
            <p class="typeCharName">오일남</p>
            <p class="typeCharInfo">창의력과 통찰력이 뛰어난 <br />독창적인 인물</p>
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
  name: "Final_ESTJ",
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
      mbti: "ESTJ",
      mbtiInfo_text: [

        "일을 구체적으로 조직하고 계획하는 능력이 뛰어나다.",
        "체계적이고 조직화된 시스템 속에서 결단력 있는 행동을 보인다.",
        "현실적이고 논리적으로 사업이나 조직을 이끌어 나가는 재능을 가졌다.",
        "분명한 규칙을 중요시하고 그에 따라 행동하고 일을 추진한다.",
        "주변사람들에게 잔소리를 많이 한다.",
        "지나치게 일 중심적인 성격이 강하다.",
      ],
      mbtiInfo_text: [
        "오징어 게임을 관전하기 위해서 천문학적인 돈을 내는 외국인들.",
        "힘들고 물러날 곳 없는 인생을 사는 사람들이 처절하게 살기 위해 발버둥 치는 모습을 즐기면서 보는 기묘한 성격의 보유자들.",
        "사업가로서 게임을 관전하는 중에도, 권위적이고 규칙을 중시하는 모습을 보여준다.",
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

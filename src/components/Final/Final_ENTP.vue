<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/의문남_ENTP_200.png" alt="의문남 이미지" class="mbtiIMG" />
      <p class="mbti">ENTP</p>
      <p class="charName">의문의 남자</p>
      <p class="mbtiSummary">자신감과 에너지가 넘치는 <br />혁신적인 인물</p>
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
            <LinkShare
              :resultLink="resultLink"
              :homeLink="homeLink"
              :mbti="mbti"
              :middle="true"
              v-on:blurClass="blurResult"
              v-if="!firstTest"
            ></LinkShare>
            <li v-for="(text, i) in mbtiInfo2_text" :key="i" :class="{ blurList: blurClass }">
              <span>{{ text }}</span>
            </li>
          </ul>
        </section>
      </div>
      <section class="typeMatch" v-if="!firstTest">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('ISFJ')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/병기_ISFJ_100.png" alt="ENTP와 잘맞는 유형" />
            <p class="typeCharName">병기</p>
            <p class="typeCharInfo">책임강이 강하고 헌신적인 <br />인내심 많은 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ISFP')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/지영_ISFP_100.png" alt="ENTP와 잘맞는 유형" />
            <p class="typeCharName">지영</p>
            <p class="typeCharInfo">감수성이 풍부하고 <br />독립심이 많은 인물</p>
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
  name: "Final_ENTP",
  props: {
    firstTest: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
      resultLink: window.location.href,
      homeLink: window.location.origin,
      blurClass: true,
      mbti: "ENTP",
      mbtiInfo2_text: [
        "독창적인 혁신가이여 창의력이 풍부해서 새로운 시도를 즐기는 성격이다.",
        "다방면에 재능이 있고 자신감과 에너지가 넘친다.",
        "다른 사람을 판단하기보다 이해하려고 노력한다.",
        "감정에 솔직하고 표현을 잘한다.",
        "경쟁심이 강해서 토론이나 논쟁을 좋아한다.	",
        "자존감이 높고 자신에 대한 확신이 강하다. ",
      ],
      mbtiInfo_text: [
        "오징어 게임 참가자들과 딱지치기를 하여 10만원 내기를 하는 인물로서 자신감과 에너지가 넘친다.",
        "경쟁심이 강해서 성기훈과의 딱지치기에서도 연속적으로 승리한다.",
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

<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/한미녀_ESFP_200.png" alt="한미녀 이미지" class="mbtiIMG" />
      <p class="mbti">ESFP</p>
      <p class="charName">한미녀</p>
      <p class="mbtiSummary">현실적이고 실제적인 <br />사교적인 인물</p>
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
          <section class="typeGood" @click="typeLink('INTJ')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/주최자_INTJ_100.png" alt="ESFP와 잘맞는 유형" />
            <p class="typeCharName">주최자</p>
            <p class="typeCharInfo">행동과 사고가 단호한 <br />독립적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ENFP')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/성기훈_ENFP_100.png" alt="ESFP와 잘맞는 유형" />
            <p class="typeCharName">성기훈</p>
            <p class="typeCharInfo">풍부한 열정과 상상력으로 <br />무엇이든 해내는 인물</p>
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
  name: "Final_ESFP",
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
      mbti: "ESFP",
      mbtiInfo_text: [

        "현실적이고 실제적이며 어떤 상황에도 타협적이다.",
        "웃음과 오락 등 즐거움을 추구하는 성격이다.",
        "선입견이 적고 개방적이며 사람들을 잘 받아들인다.",
        "다른 사람의 일과 행동에 관심이 많고 호기심이 많다.",
        "이론이나 책보단 경험과 실생활을 통해 배우는 것을 선호한다.",
        "성격이 급하고 활발하며 이야기하는 것을 좋아한다.",
        "계획을 잘 세우지만 그 계획에 따라 실천하는 것을 싫어한다.",
        "주변에서 관종이라는 말을 자주 듣는다.",
        "충동적이고 열정적이지만 싫증이 빠르게 나고 진지하지 못한 면이 있다.",
      ],
      mbtiInfo_text: [
        "드라마속에서 전과 5범의 사기꾼으로 누구에게도 신뢰를 받지 못하며 관종 취급을 받는다.",
        "장덕수와 성적인 관계를 가지는 것도 하듯이 목적을 위해서는 수단과 방법을 가리지 않는 모습을 보여준다.",
        "게임이 진행되는 와중에 꾸준히 시끄럽고 언행이 거칠고 활발하며 이야기를 많이 한다.",
        "두뇌회전이 빠르고 상황판단이 뛰어나서 게임 속 난관들을 해결해 나간다.",
        "마지막 다리 건너기 게임에서 장덕수를 잡고 자살하는 모습에서 한미녀의 충동적인 모습을 볼 수 있다. ",
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

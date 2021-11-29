<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/장덕수_ESTP_200.png" alt="장덕수 이미지" class="mbtiIMG" />
      <p class="mbti">ESTP</p>
      <p class="charName">장덕수</p>
      <p class="mbtiSummary">다양한 분야에 관심이 있는 <br />활동적인 인물</p>
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
          <section class="typeGood" @click="typeLink('INFJ')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/오일남_INFJ_100.png" alt="ESTP와 잘맞는 유형" />
            <p class="typeCharName">오일남</p>
            <p class="typeCharInfo">창의력과 통찰력이 뛰어난 <br />독창적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('INFP')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/강새벽_INFP_100.png" alt="ESTP와 안맞는 유형" />
            <p class="typeCharName">강새벽</p>
            <p class="typeCharInfo">신념과 조화를 중시하는 <br />이상주의자 인물</p>
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
  name: "Final_ESTP",
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
      mbti: "ESTP",
      mbtiInfo_text: [

        "삶을 즐기며, 관대하고 느긋하며 선입견이 없이 개방적인 성격이다.",
        "갈등이나 긴장이 일어나는 상황을 잘 무마하는 성격이다.",
        "다양한 분야에 관심이 있고 알고 싶어한다.",
        "매우 현실적이기 때문에 감정적이거나 우유부단한 사람에 대해 답답해한다.",
        "가능하면 말을 자제하고 싶어한다.",
        "스릴을 즐기며 겁이 없고 위험한 행동을 자주 하는 경향이 있다.",
      ],
      mbtiInfo_text: [
        "조폭 출신으로 즉흥적으로 자신의 이익을 위해 잔인한 폭력을 저지르는 인물이다.",
        "오랜 기간 집단 생황을 해서 오징어 게임 내에서도 뛰어난 적응력을 보여준다.",
        "누구 보다 뛰어난 상황 판단과 잔머리가 뛰어나다.",
        "자기 팀원이 이득이 안된다고 판단하면 배신하듯이, 현실적인 기준에 벗어나면 쉽게 돌아선다.",
        "한미녀를 배신할 때도 자신의 생존을 우선시하는 모습을 보였다",
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

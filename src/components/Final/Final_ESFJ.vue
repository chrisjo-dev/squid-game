<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/조상우맘_ESFJ_200.png" alt="조상우맘 이미지" class="mbtiIMG" />
      <p class="mbti">ESFJ</p>
      <p class="charName">조상우의 어머니</p>
      <p class="mbtiSummary">동정심과 참을성이 많은 <br />양심적인 인물</p>
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
          <section class="typeGood" @click="typeLink('INTP')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/진행요원_INTP_100.png" alt="ESFJ와 잘맞는 유형" />
            <p class="typeCharName">진행요원</p>
            <p class="typeCharInfo">이해가 빠르고 통찰력 있는 <br />아이디어형 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('INTJ')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/주최자_INTJ_100.png" alt="ESFJ와 잘맞는 유형" />
            <p class="typeCharName">주최자</p>
            <p class="typeCharInfo">행동과 사고가 단호한 <br />독립적인 인물</p>
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
  name: "Final_ESFJ",
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
      mbti: "ESFJ",
      mbtiInfo_text: [

        "항상 웃으면서 동정심과 동료애가 많다.",
        "양심적이고 정리정돈을 잘한다.",
        "참을성이 많고 남을 잘 돕는다.",
        "다른 이들의 무관심에는 민감하고 남들이 인정해주면 엄청 좋아함.",
        "성격이 급하고 활발하고 계획을 잘 세운다.",
        "사람들과 대화할 때 리액션을 잘한다. ",
      ],
      mbtiInfo_text: [
        "힘들게 가게를 운영하고 있는 현실에도 친절하고 재치가 있으며 다른 사람들에게 관심을 쏟는다. ",
        "안타까운 상황에 처해있는 성기훈을 보고 안타까워하며 걱정을 한다. ",
        "아들의 자랑을 하는 모습에서 남들의 인정을 좋아하는 성격임을 볼 수 있다. ",
        "끝까지 아들을 믿는 모습에서 그녀의 아들에 대한 관심과 사랑을 엿볼 수 있다. ",
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

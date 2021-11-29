<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/성기훈어머니_ISFJ_200.png" alt="성기훈어머니 이미지" class="mbtiIMG" />
      <p class="mbti">ISFJ</p>
      <p class="charName">성기훈의 어머니</p>
      <p class="mbtiSummary">책임감이 강하고 헌신적인 <br />인내심 많은 인물</p>
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
            <img src="/image/final/오일남_INFJ_100.png" alt="ISFJ와 잘맞는 유형" />
            <p class="typeCharName">오일남</p>
            <p class="typeCharInfo">창의력과 통찰력이 뛰어난 <br />독창적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ENTJ')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/조상우_ENTJ_100.png" alt="ISFJ와 잘맞는 유형" />
            <p class="typeCharName">조상우</p>
            <p class="typeCharInfo">전략가로서 실리를 챙기는 <br />지도자형 인물</p>
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
  name: "Final_ISFJ",
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
      mbti: "ISFJ",
      mbtiInfo_text: [

        "책임감이 강하고 헌신적이다.",
        "치밀성과 반복을 요하는 일을 끝까지 하는 인내력이 높다.",
        "온순하고 차분하다.",
        "신중하고 꼼꼼하고 섬세하며 생각이 많다.",
        "돈. 시간. 감정 등의 쓸모없는 낭비를 싫어한다.",
        "상대에게 상처를 주지 않으므로 대인관계가 원만하다.",
        "배려, 겸손 예의를 중시한다.",
        "상대방의 이야기를 경청하고 공감해주지만 본인의 깊은 고민과 이야기는 잘 말하지 않는다. ",
      ],
      mbtiInfo_text: [
        "성기훈의 어머니로서 아버지의 의무를 다하지 못하고 있는 성기훈을 나무라지 않고 끝까지 인내하고 참는 모습을 보인다.",
        "몸이 힘들어도 티 내지 않고 열심히 책임감 있게 일하는 모습을 보여준다.",
        "성기훈의 모습이 탐탁치 않지만 그에게 상처를 주지 않고 차분하게 그를 대하는 모습이 나타난다.",
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

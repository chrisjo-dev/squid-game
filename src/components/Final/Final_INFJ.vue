<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/오일남_INFJ_200.png" alt="오일남 이미지" class="mbtiIMG" />
      <p class="mbti">INFJ</p>
      <p class="charName">오일남</p>
      <p class="mbtiSummary">창의력과 통찰력이 뛰어난 <br />독창적인 인물</p>
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
          <section class="typeGood" @click="typeLink('ESTP')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/장덕수_ESTP_100.png" alt="INFJ와 잘맞는 유형" />
            <p class="typeCharName">장덕수</p>
            <p class="typeCharInfo">다양한 분야에 관심이 있는 <br />활동적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ESTJ')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/VIP_ESTJ_100.png" alt="INFJ와 잘맞는 유형" />
            <p class="typeCharName">VIPS</p>
            <p class="typeCharInfo">계획하는 능력이 뛰어난 <br />사업가형 인물</p>
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
  name: "Final_INFJ",
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
      mbti: "INFJ",
      mbtiInfo_text: [

        "창의력과 통찰력이 뛰어나다.",
        "독창성과 사적인 독립심이 강하다. ",
        "확고한 신념과 원칙을 갖고있다.",
        "다정하고 따듯하지만 냉철한 면도 있다.",
        "대체로 약자의 편에 선다.",
        "직면한 상황을 다방면으로 바라보고 이해할 수 있는 능력이 뛰어나다.",
        "자기 안에 갈등이 많고 복잡하다 남에게 강요보단 행동과 권유로 사람들의 마음을 움직이는 지도력이 있다.",
      ],
      mbtiInfo_text: [
        "456명 중 제일 연장자로서 싸움이 일어나면 말리고 설득과 이야기로 팀원들을 움직이는 매력이 있는 인물이다.",
        "상냥한 성격으로 남을 배려하는 모습을 자주 보여주고 동시에 게임을 할 때는 집중을 하고 전략을 짜는 냉정한 모습도 보여준다.",
        "달고나 게임과 줄다리기 게임을 할 때 남다른 창의력과 독창력을 발휘하여 팀원들의 무사한 통과를 도와줄 수 있게 끔 한다.",
        "구슬게임에서 자신이 이겼음에도 불구하고 '우린 깐부자나'라는 말과 함께 성기훈에게 양보하는 따듯한 모습도 보여준다.",
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

<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/프런트맨_ISTP_200.png" alt="프런트맨 이미지" class="mbtiIMG" />
      <p class="mbti">ISTP</p>
      <p class="charName">프런트맨</p>
      <p class="mbtiSummary">풍부한 열정과 상상력으로 <br />무엇이든 해내는 인물</p>
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
          <section class="typeGood" @click="typeLink('ESFJ')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/조상우맘_ESFJ_100.png" alt="ISTP와 잘맞는 유형" />
            <p class="typeCharName">조상우의 어머니</p>
            <p class="typeCharInfo">동정심과 참을성이 많은 <br />양심적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ESFP')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/한미녀_ESFP_100.png" alt="ISTP와 잘맞는 유형" />
            <p class="typeCharName">한미녀</p>
            <p class="typeCharInfo">현실적이고 실제적인 <br />사교적인 인물</p>
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
  name: "Final_ISTP",
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
      mbti: "ISTP",
      mbtiInfo2_text: [
        "조용하고 말이 없어서 처음에는 차가운 인상이지만 알고 보면 따듯한 사람.",
        "절제된 호기심으로 인생을 관찰하고 상황파악이 빠르다.",
        "자기 자신을 필요 이상으로 드러내지 않는다. ",
        "자신의 느낌이나 생각 정보 계획을 개방하고 상대와 나눌 필요가 있다.",
        "가까운 친구들 외에는 잘 사귀지 않아서 알아가는데 시간이 걸린다.",
        "자기만의 시간과 공간을 중요시하는 개인주의적 성향으로 인해 타인과 감정을 공유하지 않는다.",
        "쉽게 감정 공유를 하지 않아 남들이 다가가기에 쉽지 않다.",
      ],
      mbtiInfo_text: [
        "오징어게임의 진행을 총괄적으로 관리하는 인물로, 논리적이고 객관적으로 상황을 관찰하는 모습을 보여준다.",
        "감정 표현도 없이 차가운 인상을 보여주며 냉정하게 오징어 게임을 운영해 나간다. ",
        "친동생이 자신을 찾으러 왔지만 큰 동요 없이 그를 내치는 모습을 보여준다. ",
        "항상 마스크를 쓰며 혼자 지내면서 감정 표현을 하지 않는다.",
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

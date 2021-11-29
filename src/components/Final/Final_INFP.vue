<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/강새벽_INFP_200.png" alt="강새벽 이미지" class="mbtiIMG" />
      <p class="mbti">INFP</p>
      <p class="charName">강새벽</p>
      <p class="mbtiSummary">신념과 조화를 중시하는 <br />이상주의자 인물</p>
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
          <section class="typeGood" @click="typeLink('ENFJ')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/알리_ENFJ_100.png" alt="INFP와 잘맞는 유형" />
            <p class="typeCharName">알리압둘</p>
            <p class="typeCharInfo">주변을 행복하게 만드는 <br />친절한 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ESTP')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/장덕수_ESTP_100.png" alt="INFP와 잘맞는 유형" />
            <p class="typeCharName">장덕수</p>
            <p class="typeCharInfo">다양한 분야에 관심이 있는 <br />활동적인 인물</p>
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
  name: "Final_INFP",
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
      mbti: "INFP",
      mbtiInfo_text: [

        "마음은 따듯하지만 상대방을 잘 알기 전까지는 표현을 잘하지 않는다.",
        "자신이 지향하는 이상에 대해서는 정열적인 신념을 갖고 있다.",
        "조화로운 관계를 중요시한다.",
        "내면세계에 관심이 많아서 말보다는 자신의 세계가 먼저다.",
        "내향적인 성격이며 솔직하고 합리적인 모습이 있다.",
        " 혼자서 생각하는 시간을 즐기며 독립심이 강하다",
      ],
      mbtiInfo_text: [
        "오징어 게임에서 다른 사람들과 쉽게 어울리지 못하는 모습을 보여준다.",
        "지속적으로 혼자서 있는 모습이 자주 보이듯이 혼자 조용한 시간을 보내는 걸 즐기는 성격이다. ",
        "성훈이 다가가도 쉽게 마음의 문을 열지는 않지만 친해진 후에는 솔직하고 따듯한 모습들을 보여준다.",
        "구슬게임에서 지영이가 자신을 위해 희생할 때 눈물을 보이는 정 많은 모습을 보이기도 한다.",
        "자신이 믿고 친해지는 사람들은 잘 챙기는 모습이 자주 나온다.",
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

<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/성기훈_ENFP_200.png" alt="성기훈 이미지" class="mbtiIMG" />
      <p class="mbti">ENFP</p>
      <p class="charName">성기훈</p>
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
          <section class="typeGood" @click="typeLink('ISTJ')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/황준호_ISTJ_100.png" alt="ENFP와 잘맞는 유형" />
            <p class="typeCharName">황준호</p>
            <p class="typeCharInfo">시작한 일은 끝까지 하는 <br />완벽주의자 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ESFP')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/한미녀_ESFP_100.png" alt="ENFP와 잘맞는 유형" />
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
  name: "Final_ENFP",
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
      mbti: "ENFP",
      mbtiInfo2_text: [
        "열성적이며 활발하고 창의적이다.",
        "철저한 계획을 세우기 보다는 자기 스타일대로 한다.",
        "열정적으로 새 관계를 만들어가며 사람들과 자유롭게 어울리는 것을 즐긴다.",
        "주위의 분위기를 밝게 만드는 에너지의 소유자라 주변 사람들에게 인기가 많다.",
        "다른 사람들에게 많은 관심을 주고 그들을 잘 통솔한다. ",
        "관심있는 일이면 무엇이든 해내는 열성파",
        "풍부한 에너지와 상상력을 갖고 즉흥적으로 일을 재빠르게 하는 성격",
        "한가지 일을 마무리 짓지 않고 다른 일을 새롭게 시작하는 경향이 있다. ",
        "말이 많고 냉철 해야할 때 고민을 많이 한다.",
      ],
      mbtiInfo_text: [
        "드라마내에서 어마어마한 빚이 있을 때, 그 빚을 갚기 위해 도박을 하는 무모한 모습을 보여준다.",
        "조상우와는 반대되는 성격으로, 달고나 게임에서 달고나를 핥아서 뽑는 등, 창의적인 방법으로 문제를 해결하는 능력을 보여준다.",
        "나이 많은 오일남과 아픈 강새벽을 계속 챙겨주듯이, 다른 사람들을 잘 도와주는 성격이다.",
        "오징어 게임 내에서도 항상 적극적이고 열정적으로 임하는 모습을 보여준다. ",
        "팀을 짜는 과정에서도 주도적으로 팀을 짜면서 새 관계를 만들어가는 모습을 보여준다.",
        "가끔씩 감정에 매몰되는 모습을 보임.",
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

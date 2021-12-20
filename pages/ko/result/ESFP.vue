<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img
        src="~/assets/image/final/한미녀_ESFP_200.png"
        alt="한미녀 이미지"
        class="mbtiIMG"
      />
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
            <LinkShare
              v-if="!firstTest"
              :result-link="resultLink"
              :home-link="homeLink"
              :mbti="mbti"
              :middle="true"
              @blurClass="blurResult"
            ></LinkShare>
            <li
              v-for="(text, i) in mbtiInfo2_text"
              :key="i"
              :class="{ blurList: blurClass }"
            >
              <span>{{ text }}</span>
            </li>
          </ul>
        </section>
      </div>
      <section v-if="!firstTest" class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('INTJ')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/final/주최자_INTJ_100.png"
              alt="ESFP와 잘맞는 유형"
            />
            <p class="typeCharName">주최자</p>
            <p class="typeCharInfo">행동과 사고가 단호한 <br />독립적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ENFP')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/final/성기훈_ENFP_100.png"
              alt="ESFP와 잘맞는 유형"
            />
            <p class="typeCharName">성기훈</p>
            <p class="typeCharInfo">
              풍부한 열정과 상상력으로 <br />무엇이든 해내는 인물
            </p>
          </section>
        </div>
      </section>
    </main>
    <footer>
      <section v-if="!firstTest">
        <LinkShare
          :result-link="resultLink"
          :home-link="homeLink"
          :mbti="mbti"
        ></LinkShare>
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
              <path
                d="M7.15463 0.5L4.67188 3.39655L7.15463 6.2931"
                stroke="white"
              />
            </svg>
          </button>
        </div>
      </section>
      <article v-else>
        <button class="returnResult" @click="returnResult">
          결과로 돌아가기
        </button>
      </article>
    </footer>
    <Final_Modal
      v-if="showModal"
      @close="showModal = false"
      @closeModal="closeModal"
    >
    </Final_Modal>
  </div>
</template>

<script>
import Final_Modal from "./Final_Modal.vue";
import LinkShare from "~/components/LinkShare.vue";

export default {
  name: "FinalESFP",
  components: {
    Final_Modal,
    LinkShare,
  },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => {
        if (process.browser) {
          return window.location.href;
        }
      },
      homeLinkResult: () => {
        if (process.browser) {
          return window.location.origin;
        }
      },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "ESFP",
      mbtiInfo2_text: [
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
      firstTest: null,
    };
  },
  head() {
    return {
      title: "당신은 오징어게임에서 한미녀 ESFP",
      meta: [
        {
          hid: "title",
          name: "og:title",
          content: "당신은 오징어게임에서 한미녀 ESFP",
        },
        {
          hid: "description",
          name: "og:description",
          content: "내가 오징어게임 주인공이라면?",
        },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ESFP.png`,
        },
        // Twitter Open Graph
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "당신은 오징어게임에서 한미녀 ESFP",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "내가 오징어게임 주인공이라면?",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ESFP.png`,
        },
      ],
    };
  },
  created() {
    if (this.$route.query.firstTest) {
      this.firstTest = this.$route.query.firstTest;
      this.blurClass = false;
    }
    this.resultLink = this.resultLinkResult();
    this.homeLink = this.homeLinkResult();
  },
  methods: {
    showResult() {
      this.showModal = !this.showModal;
    },
    closeModal(show) {
      this.showModal = show;
    },
    typeLink(type) {
      this.$router.push({
        path: `${type}?firstTest=true`,
      });
    },
    testRestart() {
      this.$router.push({ name: "index" });
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
@import "~/assets/css/Final_MBTI.css";
</style>

<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">You Are…</p>
      <img
        src="~/assets/image/final/의문남_ENTP_200.png"
        alt="의문남 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ENTP</p>
      <p class="charName">Salesman</p>
      <p class="mbtiSummary">
        Full of confidence and energy.<br />
        Innovative person.
      </p>
    </div>
    <main>
      <div class="mbtiInfo_wrap">
        <section class="mbtiInfo">
          <p class="mbtiInfo_summary">Salesman</p>
          <ul class="mbtiInfo_text">
            <li v-for="(text, i) in mbtiInfo_text" :key="i">
              <span>{{ text }}</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="mbtiInfo2_wrap">
        <section class="mbtiInfo2">
          <p class="mbtiInfo2_summary">You</p>
          <ul class="mbtiInfo2_text">
            <LinkShare
              v-if="!firstTest"
              :result-link="resultLink"
              :home-link="homeLink"
              :mbti="mbti"
              :middle="true"
              :eng="true"
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
        <p class="title">Compatibility by type</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('ISFJ')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/final/성기훈어머니_ISFJ_100.png"
              alt="ENTP와 잘맞는 유형"
            />
            <p class="typeCharName">Player 456’ mother</p>
            <p class="typeCharInfo">
              Responsible and dedicated.<br />
              A patient person.
            </p>
          </section>
          <section class="typeBad" @click="typeLink('ISFP')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/final/지영_ISFP_100.png"
              alt="ENTP와 잘맞는 유형"
            />
            <p class="typeCharName">Player 240</p>
            <p class="typeCharInfo">
              Very sentimental.<br />
              A person who is independent.
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
          :eng="true"
        ></LinkShare>
        <div class="footerBTN">
          <button class="allResultBTN" @click="showResult">
            All the results
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
            Test again
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
          Back to result
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
  name: "FinalENTP",
  components: {
    Final_Modal,
    LinkShare,
  },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => {
        if (process.client) {
          return window.location.href;
        }
      },
      homeLinkResult: () => {
        if (process.client) {
          return window.location.origin;
        }
      },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "ENTP",
      mbtiInfo2_text: [
        "A creative innovator, and enjoy trying new things.",
        "A multi-talented person full of confidence and energy.",
        "Try to understand others rather than judge them.",
        "Honest with his/her emotions and express oneself well.",
        "Has a strong competitive spirit and likes to debate and argue.",
        "Has high self-esteem and strong self-confidence.",
      ],
      mbtiInfo_text: [
        "As the person who bets 100,000 won by playing a game of slap-match with the squid game participants, he is full of confidence and energy as.",
        "He has a strong competitive spirit, so he wins consecutive fights against player 456.",
      ],

      firstTest: null,
    };
  },
  head() {
    return {
      title: "You are Salesman in Squid game",
      meta: [
        {
          hid: "title",
          name: "og:title",
          content: "You are Salesman in Squid game",
        },
        {
          hid: "description",
          name: "og:description",
          content: "Which squid game character are you?",
        },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta_eng/metaimg_ENTP.png`,
        },
        // Twitter Open Graph
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "You are Salesman in Squid game",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Which squid game character are you?",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta_eng/metaimg_ENTP.png`,
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
@import "~/assets/css/Final_MBTI_EN.css";
</style>

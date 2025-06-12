<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">You Are…</p>
      <img
        src="~/assets/image/final/황준호_ISTJ_200.png"
        alt="황준호 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ISTJ</p>
      <p class="charName">Game Host</p>
      <p class="mbtiSummary">
        Do what he started to do<br />
        until the end. A perfectionist.
      </p>
    </div>
    <main>
      <div class="mbtiInfo_wrap">
        <section class="mbtiInfo">
          <p class="mbtiInfo_summary">Detective Hwang</p>
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
          <section class="typeGood" @click="typeLink('ENFP')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/final/성기훈_ENFP_100.png"
              alt="ISTJ와 잘맞는 유형"
            />
            <p class="typeCharName">Player 456</p>
            <p class="typeCharInfo">
              Passionate,<br />
              active and creative.
            </p>
          </section>
          <section class="typeBad" @click="typeLink('ENFJ')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/final/알리_ENFJ_100.png"
              alt="ISTJ와 잘맞는 유형"
            />
            <p class="typeCharName">Player 199</p>
            <p class="typeCharInfo">
              Makes people happy.<br />
              A kind person.
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
  name: "FinalISTJ",
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
      mbti: "ISTJ",
      mbtiInfo2_text: [
        "Owns a challenging personality that does anything even if it is dangerous. ",
        "Has a personality that diligently finishes anything that he/she started. ",
        "Practical, thorough and systematic.",
        "Hard working and meticulous with detailed procedures.",
        "Have his/her own standards, and make decisions based on those standards.",
      ],
      mbtiInfo_text: [
        "Hwang Jun-ho, a detective of the Dobong Police Station, finds a suspicious business card in his brother's room, and then executes a thorough plan without hesitation to find his missing brother and go to the island where the squid game is held.",
        "He shows his challenging personality by going directly inside the dangerous squid game and risking his life to investigate the mystery of his brother's disappearance.",
        "Even during the investigation, he uncovers the secrets of the squid game through his excellent observation and analysis skills.",
      ],

      firstTest: null,
    };
  },
  head() {
    return {
      title: "You are Detective Hwang in Squid game",
      meta: [
        {
          hid: "title",
          name: "og:title",
          content: "You are Detective Hwang in Squid game",
        },
        {
          hid: "description",
          name: "og:description",
          content: "Which squid game character are you?",
        },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta_eng/metaimg_ISTJ.png`,
        },
        // Twitter Open Graph
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "You are Detective Hwang in Squid game",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Which squid game character are you?",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta_eng/metaimg_ISTJ.png`,
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

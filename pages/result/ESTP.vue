<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div v-if="!easterSkull" class="testMBTI">
      <p class="testTitle">You Are…</p>
      <div class="charImgContainer">
        <img
          class="charImg"
          src="~/assets/image/final/장덕수_ESTP_200.png"
          alt="장덕수 이미지"
        />
        <div class="bloodImgContainer">
          <img
            v-if="bloodImg"
            class="bloodImg"
            src="~/assets/image/easterEgg/장덕수_피눈물.png"
            alt="장덕수 피눈물 이미지"
            @click="imgClick()"
          />
        </div>
      </div>
      <p class="charName">Player 101</p>
      <p class="mbtiSummary">
        Interested in various fields.<br />
        An active person.
      </p>
    </div>
    <div v-else class="testMBTI">
      <div class="easterEggContainer">
        <img
          src="~assets/image/easterEgg/easterSkull.png"
          alt="이스터에그 해골"
          class="easterSkull"
        />
        <div class="easterHellContainer">
          <img
            v-if="easterHell"
            class="easterHell"
            src="~/assets/image/easterEgg/easterHell_eng.png"
            alt="지옥"
          />
        </div>
      </div>
    </div>
    <main>
      <div class="mbtiInfo_wrap">
        <section class="mbtiInfo">
          <p class="mbtiInfo_summary">Player 101</p>
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
          <section class="typeGood" @click="typeLink('INFJ')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/final/오일남_INFJ_100.png"
              alt="ESTP와 잘맞는 유형"
            />
            <p class="typeCharName">Player 001</p>
            <p class="typeCharInfo">
              Creative and insightful.<br />
              An original character.
            </p>
          </section>
          <section class="typeBad" @click="typeLink('INFP')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/final/강새벽_INFP_100.png"
              alt="ESTP와 안맞는 유형"
            />
            <p class="typeCharName">Player 067</p>
            <p class="typeCharInfo">
              Values belief and harmony.<br />
              An idealist.
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
  name: "FinalESTP",
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
      mbti: "ESTP",
      mbtiInfo2_text: [
        "Enjoys life, generous, relaxed, and has an open personality without prejudice.",
        "Has a personality that is good at dealing with situations where conflict or tension arises.",
        "Interested in various fields and want to know more.",
        "Very realistic, so it's frustrating for people who are emotional or indecisive.",
        "Like to refrain from talking as much as possible.",
        "Enjoy thrills, fearless, and tend to engage in risky behavior frequently.",
      ],
      mbtiInfo_text: [
        "He is a gangster who spontaneously commits brutal violence for his own benefit.",
        "He shows excellent adaptability even in the squid game due to his long life as a gangster.",
        "In the squid game, he has superior situational judgment and finesse than anyone else.",
        "Just as he betrays his teammates when he decides that there is no benefit, he easily turns around when it deviates from realistic standards. Even when he betrayed player 212, he showed that he prioritized his own survival.",
      ],
      firstTest: null,
      bloodImg: false,
      easterSkull: false,
      easterHell: false,
    };
  },
  head() {
    return {
      title: "You are Player 101 in Squid game",
      meta: [
        {
          hid: "title",
          name: "og:title",
          content: "You are Player 101 in Squid game",
        },
        {
          hid: "description",
          name: "og:description",
          content: "Which squid game character are you?",
        },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta_eng/metaimg_ESTP.png`,
        },
        // Twitter Open Graph
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "You are Player 101 in Squid game",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Which squid game character are you?",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta_eng/metaimg_ESTP.png`,
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
    setTimeout(() => {
      this.bloodImg = true;
    }, 2000);
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
    imgClick() {
      this.easterSkull = true;
      setTimeout(() => {
        this.easterHell = true;
      }, 5000);
    },
  },
};
</script>

<style scoped>
@import "~/assets/css/Final_MBTI_EN.css";
</style>

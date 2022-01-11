<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img
        src="~/assets/image/final/조상우_ENTJ_200.png"
        alt="조상우 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ENTJ</p>
      <p class="charName">조상우</p>
      <p class="mbtiSummary">전략가로서 실리를 챙기는 <br />지도자형 인물</p>
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
          <section class="typeGood" @click="typeLink('INFP')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/final/강새벽_INFP_100.png"
              alt="ENTJ와 잘맞는 유형"
            />
            <p class="typeCharName">강새벽</p>
            <p class="typeCharInfo">
              신념과 조화를 중시하는 <br />이상주의자 인물
            </p>
          </section>
          <section class="typeBad" @click="typeLink('ISFJ')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/final/성기훈어머니_ISFJ_100.png"
              alt="ENTJ와 잘맞는 유형"
            />
            <p class="typeCharName">성기훈의 어머니</p>
            <p class="typeCharInfo">
              책임감이 강하고 헌신적인 <br />인내심 많은 인물
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
  name: "FinalENTJ",
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
      mbti: "ENTJ",
      mbtiInfo2_text: [
        "다소 내향적이고 합리적이며 이성적인 판단을 잘 한다.",
        "독립적인 성격이 강해 많은 사람들과 있는 거 보디 혼자 만의 시간을 즐기는 편이다. ",
        "주변 사람들에게는 친절하지만 사생활을 중시하는 성격이다. ",
        "어떠한 상황에도 실리를 챙긴다.",
        "팀워크가 필요할 때 전력가로서 빛을 발한다.",
        "비효율적이거나 확실치 않은 상황을 싫어한다.",
        "사전 준비가 철저하고 계획적이다.",
        "일을 할 때 논리적이고 분석적이다.",
      ],
      mbtiInfo_text: [
        "드라마 내에서 서울대 경영학과 수석 입학 출신으로 똑똑하고 능력이 있지만 산더미 같은 빚에 허덕이며 살고 있으며, 회사 돈을 횡령한 죄로 범죄자 신세다.",
        "빚이 쌓여서 막막한 상황에 놓여있을 때도 주변의 조언과 도움을 요청하기 보다 혼자서 고민하고 해결하려는 모습을 보여준다. ",
        "다리게임에서 앞사람을 밀고 강새벽을 잔인하게 죽이고 구슬게임에서 알리압둘을 속이듯이 어떤 상황에서도 사람과 감정보다 실리와 효율적인 선택을 한다.",
        "게임 도중에 팀워크가 필요할 때는 직접 나서서 전략가로서 빛을 발하기도 한다. ",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "당신은 오징어게임에서 조상우 ENTJ",
      meta: [
        {
          hid: "title",
          name: "og:title",
          content: "당신은 오징어게임에서 조상우 ENTJ",
        },
        {
          hid: "description",
          name: "og:description",
          content: "내가 오징어게임 주인공이라면?",
        },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ENTJ.png`,
        },
        // Twitter Open Graph
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "당신은 오징어게임에서 조상우 ENTJ",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "내가 오징어게임 주인공이라면?",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ENTJ.png`,
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
      this.$router.push({ path: "/ko" });
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

<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img
        src="~/assets/image/final/황준호_ISTJ_200.png"
        alt="황준호 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ISTJ</p>
      <p class="charName">황준호</p>
      <p class="mbtiSummary">시작한 일은 끝까지 하는 <br />완벽주의자 인물</p>
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
          <section class="typeGood" @click="typeLink('ENFP')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/final/성기훈_ENFP_100.png"
              alt="ISTJ와 잘맞는 유형"
            />
            <p class="typeCharName">성기훈</p>
            <p class="typeCharInfo">
              풍부한 열정과 상상력으로 <br />무엇이든 해내는 인물
            </p>
          </section>
          <section class="typeBad" @click="typeLink('ENFJ')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/final/알리_ENFJ_100.png"
              alt="ISTJ와 잘맞는 유형"
            />
            <p class="typeCharName">알리압둘</p>
            <p class="typeCharInfo">주변을 행복하게 만드는 <br />친절한 인물</p>
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
        "궁금한 것은 목숨이 걸려도 직접 체험하고 경험하는 도전적인 성격이다.",
        "한번 시작한 일은 끝까지 성실하게 해내는 성격이다.",
        "현실적, 실용적, 철저하고 체계적이다.",
        "열심히 일하고 세부적인 절차에 세심하다.",
        "자신만의 기준이 있고 그 기준에 따라 판단을 한다.",
      ],
      mbtiInfo_text: [
        "도봉 경찰서 소속 경찰인 황준호는 형의 고시원 방에서 수상한 명함을 발견한 후에 사라진 형을 찾아 오징어 게임이 열리는 섬까지 가는 철저한 계획을 망설임없이 실행하는 모습을 보여준다.",
        "위험한 오징어 게임 내부에도 직접 들어가서 형의 실종에 관한 비밀을 풀기 위해 목숨 걸고 수사를 하는 모습을 통해 그의 도전적인 성격을 보여준다.",
        "수사중에도 뛰어난 관찰력과 분석력을 통해 오징어 게임의 비밀을 파헤쳐 나간다. ",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "당신은 오징어게임에서 황준호 ISTJ",
      meta: [
        {
          hid: "title",
          name: "og:title",
          content: "당신은 오징어게임에서 황준호 ISTJ",
        },
        {
          hid: "description",
          name: "og:description",
          content: "내가 오징어게임 주인공이라면?",
        },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ISTJ.png`,
        },
        // Twitter Open Graph
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "당신은 오징어게임에서 황준호 ISTJ",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "내가 오징어게임 주인공이라면?",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ISTJ.png`,
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
      this.$router.push({ path: "/ko" });
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

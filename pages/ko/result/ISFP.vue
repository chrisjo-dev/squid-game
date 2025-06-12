<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img
        src="~/assets/image/final/지영_ISFP_200.png"
        alt="지영 이미지"
        class="mbtiIMG"
      />
      <p class="mbti">ISFP</p>
      <p class="charName">지영</p>
      <p class="mbtiSummary">감수성이 풍부하고 <br />독립심이 많은 인물</p>
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
          <section class="typeGood" @click="typeLink('ESTJ')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/final/VIP_ESTJ_100.png"
              alt="ISFP와 잘맞는 유형"
            />
            <p class="typeCharName">VIPS</p>
            <p class="typeCharInfo">
              계획하는 능력이 뛰어난 <br />사업가형 인물
            </p>
          </section>
          <section class="typeBad" @click="typeLink('ENTP')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/final/의문남_ENTP_100.png"
              alt="ISFP와 잘맞는 유형"
            />
            <p class="typeCharName">의문의 남자</p>
            <p class="typeCharInfo">
              자신감과 에너지가 넘치는 <br />혁신적인 인물
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
  name: "FinalISFP",
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
      mbti: "ISFP",
      mbtiInfo2_text: [
        "말보다 행동으로 따듯함을 나타낸다.",
        "감정기복이 심하고 공감능력이 좋다.",
        "귀찮음이 많고 의욕이 부족한 편이다.",
        "남 눈치를 많이 봐서 자신만의 시간을 갖는 것을 좋아한다.",
        "상대방을 잘 알게 될 때까지 따듯함을 잘 드러내지 않는다.",
        "거절과 부정적 반응을 하기 어렵고 양보를 잘한다.",
        "감수성이 예민하고 고민거리나 힘든 일을 혼자 해결하려고 한다.",
      ],
      mbtiInfo_text: [
        "안타까운 가족사를 갖고 있는 지영은 겉으로는 차가운 인물이지만 구슬게임에서 고의로 져주는 모습애서도 나오듯이 마음이 따듯하고 동정적이다.",
        "강새벽과 친해지기 전에 남에게 쉽게 정을 주지 않고 혼자 있는 모습이 자주 나타난다.",
        "강새벽과 대화 후 뛰어난 공감능력을 바탕으로 동질감을 느끼고 그녀에게 마음의 문을 열면서 따듯함을 나타낸다.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "당신은 오징어게임에서 지영 ISFP",
      meta: [
        {
          hid: "title",
          name: "og:title",
          content: "당신은 오징어게임에서 지영 ISFP",
        },
        {
          hid: "description",
          name: "og:description",
          content: "내가 오징어게임 주인공이라면?",
        },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ISFP.png`,
        },
        // Twitter Open Graph
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "당신은 오징어게임에서 지영 ISFP",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "내가 오징어게임 주인공이라면?",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ISFP.png`,
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

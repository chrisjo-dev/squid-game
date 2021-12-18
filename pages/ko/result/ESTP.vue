<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div v-if="!easterSkull" class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
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
      <p class="mbti">ESTP</p>
      <p class="charName">장덕수</p>
      <p class="mbtiSummary">다양한 분야에 관심이 있는 <br />활동적인 인물</p>
    </div>
    <div v-else class="testMBTI">
      <div class="easterEggContainer">
        <img
          src="~assets/image/easterEgg/해골.png"
          alt="이스터에그 해골"
          class="easterSkull"
        />
        <div class="easterHellContainer">
          <img
            v-if="easterHell"
            class="easterHell"
            src="~/assets/image/easterEgg/지옥.png"
            alt="지옥"
          />
        </div>
      </div>
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
          <section class="typeGood" @click="typeLink('INFJ')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/final/오일남_INFJ_100.png"
              alt="ESTP와 잘맞는 유형"
            />
            <p class="typeCharName">오일남</p>
            <p class="typeCharInfo">
              창의력과 통찰력이 뛰어난 <br />독창적인 인물
            </p>
          </section>
          <section class="typeBad" @click="typeLink('INFP')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/final/강새벽_INFP_100.png"
              alt="ESTP와 안맞는 유형"
            />
            <p class="typeCharName">강새벽</p>
            <p class="typeCharInfo">
              신념과 조화를 중시하는 <br />이상주의자 인물
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
        "삶을 즐기며, 관대하고 느긋하며 선입견이 없이 개방적인 성격이다.",
        "갈등이나 긴장이 일어나는 상황을 잘 무마하는 성격이다.",
        "다양한 분야에 관심이 있고 알고 싶어한다.",
        "매우 현실적이기 때문에 감정적이거나 우유부단한 사람에 대해 답답해한다.",
        "가능하면 말을 자제하고 싶어한다.",
        "스릴을 즐기며 겁이 없고 위험한 행동을 자주 하는 경향이 있다.",
      ],
      mbtiInfo_text: [
        "조폭 출신으로 즉흥적으로 자신의 이익을 위해 잔인한 폭력을 저지르는 인물이다.",
        "오랜 기간 집단 생황을 해서 오징어 게임 내에서도 뛰어난 적응력을 보여준다.",
        "누구 보다 뛰어난 상황 판단과 잔머리가 뛰어나다.",
        "자기 팀원이 이득이 안된다고 판단하면 배신하듯이, 현실적인 기준에 벗어나면 쉽게 돌아선다.",
        "한미녀를 배신할 때도 자신의 생존을 우선시하는 모습을 보였다",
      ],
      firstTest: null,
      bloodImg: false,
      easterSkull: false,
      easterHell: false,
    };
  },
  head() {
    return {
      title: "당신은 오징어게임에서 장덕수 ESTP",
      meta: [
        {
          hid: "title",
          name: "og:title",
          content: "당신은 오징어게임에서 장덕수 ESTP",
        },
        {
          hid: "description",
          name: "og:description",
          content: "내가 오징어게임 주인공이라면?",
        },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ESTP.png`,
        },
        // Twitter Open Graph
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "당신은 오징어게임에서 장덕수 ESTP",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "내가 오징어게임 주인공이라면?",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta/metaimg_ESTP.png`,
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
    }, 5000);
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
@import "~/assets/css/Final_MBTI.css";
</style>

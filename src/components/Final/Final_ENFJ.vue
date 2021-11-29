<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">당신은 오징어게임에서</p>
      <img src="/image/final/알리_ENFJ_200.png" alt="알리압둘 이미지" class="mbtiIMG" />
      <p class="mbti">ENFJ</p>
      <p class="charName">알리압둘</p>
      <p class="mbtiSummary">주변을 행복하게 만드는 <br />친절한 인물</p>
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
          <section class="typeGood" @click="typeLink('ISTP')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/프런트맨_ISTP_100.png" alt="ENFJ와 잘맞는 유형" />
            <p class="typeCharName">프런트맨</p>
            <p class="typeCharInfo">논리적이고 객관적인 <br />백과사전형 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ISTJ')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/황준호_ISTJ_100.png" alt="ENFJ와 잘맞는 유형" />
            <p class="typeCharName">황준호</p>
            <p class="typeCharInfo">시작한 일은 끝까지 하는 <br />완벽주의자 인물</p>
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
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import LinkShare from "../LinkShare.vue";

export default defineComponent({
  name: "Final_ENFJ",
  props: {
    firstTest: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const siteData = reactive({
      title: "My website",
      description: "My beautiful website",
      image: "/image/meta/metaimg_결과공유_알리압둘.png",
    });
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          property: "og:image",
          content: computed(() => siteData.image),
        },
      ],
    });
  },
  data() {
    return {
      showModal: false,
      resultLink: window.location.href,
      homeLink: window.location.origin,
      blurClass: true,
      mbti: "ENFJ",
      mbtiInfo2_text: [
        "인생을 따듯하게 바라보며, 동정심과 동료애가 많고 친절하다.",
        "참을성이 많고 성실하다.",
        "언변이 능숙하고 사람을 좋아해서 함께 추구해야 할 목표를 설정해 사람들을 이끈다.",
        "인관 관계에서 진실성 온전함에 높은 가치를 부여하고 주변사람들을 행복하게 만들고 싶어한다.",
        "가끔씩 다급한 성격으로 인해 성급한 결정을 내린다.",
        "연민과 동정 이해심이 많다.",
        "자기 반성은 잘하지만 남을 비판하는 데 능숙하지는 않다. ",
      ],
      mbtiInfo_text: [
        "파키스탄에서 온 외국인 노동자로 게임 중에도 남을 구하기 위해 위험을 무릎 쓰는 모습을 보여준다.",
        "마음이 착하고 동료애가 많아서 주변 사람들과 갈등이 생길 때 항상 말리며 싸움을 싫어하는 모습을 보여준다.",
        "한국인이 아니어도 한국어 구사능력이 좋고 게임 규칙에도 금방 적응하며 학습 속도가 빠르다.",
        "게임이 진행되는 동안 팀원들을 배려하고 도와주는 모습을 계속 보여준다.",
        "힘든 상황에서 다른 팀원들을 다독이며 이끄는 모습을 보여준다.",
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
});
</script>

<style scoped>
@import "../../css/Final_MBTI.css";
</style>

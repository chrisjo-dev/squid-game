<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">ENFJ</p>
      <p class="charName">알리압둘</p>
      <img src="/image/final/알리_ENFJ_200.png" alt="알리압둘 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">주변을 행복하게 만드는 <br />친절한 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">현실세계에서 당신은</p>
        <p class="mbtiInfo_text">
          인생을 따듯하게 바라보며, 동정심과 동료애가 많고 친절하다. 참을성이 많고 성실하다. 언변이
          능숙하고 사람을 좋아해서 함께 추구해야 할 목표를 설정해 사람들을 이끈다. 인관 관계에서
          진실성 온전함에 높은 가치를 부여하고 주변사람들을 행복하게 만들고 싶어한다. 가끔씩 다급한
          성격으로 인해 성급한 결정을 내린다. 연민과 동정 이해심이 많다. 자기 반성은 잘하지만 남을
          비판하는 데 능숙하지는 않다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">오징어 게임에서 당신은</p>
        <p class="mbtiInfo2_text">
          파키스탄에서 온 외국인 노동자로 게임 중에도 남을 구하기 위해 위험을 무릎 쓰는 모습을
          보여준다. 마음이 착하고 동료애가 많아서 주변 사람들과 갈등이 생길 때 항상 말리며 싸움을
          싫어하는 모습을 보여준다. 한국인이 아니어도 한국어 구사능력이 좋고 게임 규칙에도 금방
          적응하며 학습 속도가 빠르다 게임이 진행되는 동안 팀원들을 배려하고 도와주는 모습을 계속
          보여준다. 힘든 상황에서 다른 팀원들을 다독이며 이끄는 모습을 보여준다.
        </p>
      </section>
      <section class="typeMatch">
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
      <p class="share_box">공유하기</p>
      <div class="share_btn">
        <img src="/image/share_btn.svg" />
        <img src="/image/kakao.svg" />
        <img src="/image/facebook.svg" />
        <img src="/image/twitter.svg" />
      </div>
      <div class="footerBTN">
        <button class="allResultBTN" @click="showResult">결과 전체보기</button>
        <button class="testRestart" @click="testRestart">테스트 다시하기</button>
      </div>
    </footer>
    <Final_Modal v-if="showModal" @close="showModal = false" v-on:closeModal="closeModal">
    </Final_Modal>
  </div>
</template>

<script>
import Final_Modal from "./Final_Modal.vue";
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";

export default defineComponent({
  name: "Final_ENFJ",
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
    };
  },
  components: {
    Final_Modal,
  },
  methods: {
    showResult() {
      this.showModal = !this.showModal;
    },
    closeModal(show) {
      this.showModal = show;
    },
    typeLink(type) {
      this.$router.push({ name: `Final_${type}` });
    },
    testRestart() {
      this.$router.push({ name: "Main" });
    },
  },
});
</script>

<style scoped>
@import "../../css/Final_MBTI.css";
</style>

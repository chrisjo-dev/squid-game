<template>
  <div class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <p class="modal_title">전체 유형 보기</p>
        <button class="modal_close" @click="$emit('close')">닫기</button>
      </div>
      <div class="modal_body">
        <article class="mbtiType" @click="typeLink('ENFJ')">
            <img src="~/assets/image/illust/result_ENFJ.png" alt="따뜻한 동료" />
            <p class="charName">따뜻한 동료</p>
            <p class="charMbti">ENFJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ENFP')">
            <img src="~/assets/image/illust/result_ENFP.png" alt="자유로운 영혼" />
            <p class="charName">자유로운 영혼</p>
            <p class="charMbti">ENFP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ENTJ')">
            <img src="~/assets/image/illust/result_ENTJ.png" alt="냉철한 전략가" />
            <p class="charName">냉철한 전략가</p>
            <p class="charMbti">ENTJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ENTP')">
            <img src="~/assets/image/illust/result_ENTP.png" alt="도발적 혁신가" />
            <p class="charName">도발적 혁신가</p>
            <p class="charMbti">ENTP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ESFJ')">
            <img src="~/assets/image/illust/result_ESFJ.png" alt="헌신적인 보호자" />
            <p class="charName">헌신적인 보호자</p>
            <p class="charMbti">ESFJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ESFP')">
            <img src="~/assets/image/illust/result_ESFP.png" alt="대담한 생존자" />
            <p class="charName">대담한 생존자</p>
            <p class="charMbti">ESFP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ESTJ')">
            <img src="~/assets/image/illust/result_ESTJ.png" alt="냉혹한 권력자" />
            <p class="charName">냉혹한 권력자</p>
            <p class="charMbti">ESTJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ESTP')">
            <img src="~/assets/image/illust/result_ESTP.png" alt="위험한 도박사" />
            <p class="charName">위험한 도박사</p>
            <p class="charMbti">ESTP</p>
          </article>
          <article class="mbtiType" @click="typeLink('INFJ')">
            <img src="~/assets/image/illust/result_INFJ.png" alt="신비로운 관찰자" />
            <p class="charName">신비로운 관찰자</p>
            <p class="charMbti">INFJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('INFP')">
            <img src="~/assets/image/illust/result_INFP.png" alt="강인한 이방인" />
            <p class="charName">강인한 이방인</p>
            <p class="charMbti">INFP</p>
          </article>
          <article class="mbtiType" @click="typeLink('INTJ')">
            <img src="~/assets/image/illust/result_INTJ.png" alt="냉혹한 조종자" />
            <p class="charName">냉혹한 조종자</p>
            <p class="charMbti">INTJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('INTP')">
            <img src="~/assets/image/illust/result_INTP.png" alt="충직한 실행자" />
            <p class="charName">충직한 실행자</p>
            <p class="charMbti">INTP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ISFJ')">
            <img src="~/assets/image/illust/result_ISFJ.png" alt="희생적인 후원자" />
            <p class="charName">희생적인 후원자</p>
            <p class="charMbti">ISFJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ISFP')">
            <img src="~/assets/image/illust/result_ISFP.png" alt="조용한 목격자" />
            <p class="charName">조용한 목격자</p>
            <p class="charMbti">ISFP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ISTJ')">
            <img src="~/assets/image/illust/result_ISTJ.png" alt="집념의 추적자" />
            <p class="charName">집념의 추적자</p>
            <p class="charMbti">ISTJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ISTP')">
            <img src="~/assets/image/illust/result_ISTP.png" alt="그림자 지배자" />
            <p class="charName">그림자 지배자</p>
            <p class="charMbti">ISTP</p>
          </article>
      </div>
      <div class="modal_footer">
        <button class="testRestart" @click="testRestart">테스트 다시하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinalModal",
  emits: ["close", "closeModal"],
  methods: {
    typeLink(type) {
      this.$emit("closeModal", false);
      this.$router.push({ path: `/ko/result/${type}?firstTest=true` });
    },
    testRestart() {
      this.$emit("closeModal", false);
      this.$router.push({ path: "/ko" });
    },
  },
};
</script>

<style scoped>
@import "~/assets/css/Final_MBTI.css";
</style>

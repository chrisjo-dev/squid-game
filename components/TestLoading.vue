<template>
  <main class="loadingMain">
    <p class="loadingTitle">{{ lang_en ? "Loading" : "결과 로딩중" }}</p>
    <img src="~/assets/image/lodingLogo.png" alt="결과로딩 이미지" />
    <p class="loadingText">
      {{ lang_en ? "You Are..." : "당신의 유형은..." }}
    </p>
  </main>
</template>

<script>
export default {
  name: "TestLoading",
  props: {
    lang_en: Boolean,
  },
};
</script>

<style scoped>
.loadingMain {
  margin-top: 120px;
  letter-spacing: -0.02em;
}
.loadingTitle {
  font-weight: 700;
  font-size: 18px;
  line-height: 26.64px;
}
.loadingMain img {
  margin-top: 40px;
  margin-bottom: 40px;
}
.loadingText {
  font-weight: 400;
  font-size: 14px;
  line-height: 20.72px;
}
</style>

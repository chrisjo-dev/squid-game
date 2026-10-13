// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // 호환성 날짜 설정
  compatibilityDate: '2025-06-13',

  // 정적 생성 (GitHub Pages)
  nitro: {
    preset: "static",
  },

  // 런타임 환경 변수
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://test.wspace.ai.kr",
      dev: process.env.NODE_ENV !== "production",
      kakaoKey: process.env.KAKAO_KEY,
    },
  },

  // Global CSS
  css: ["@/assets/css/reset.css", "@/assets/css/styles.css"],

  // Modules
  modules: ["@vueuse/nuxt", "@nuxtjs/google-fonts"],

  // Google Fonts 설정
  googleFonts: {
    families: {
      "Nanum Myeongjo": true,
      "Noto Sans KR": [400, 500, 700],
    },
  },

  // App Head 설정
  app: {
    baseURL: '/',
    head: {
      title: "서바이벌 선택 MBTI 테스트",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        {
          name: "description",
          content: "나는 생존 게임에서 어떤 유형일까? 서바이벌 선택 MBTI 테스트",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "og:image",
          content: `https://test.wspace.ai.kr/image/meta_eng/metaimg_main.png`,
        },
        { name: "og:image:width", content: "1200" },
        { name: "og:image:height", content: "630" },
        { name: "og:url", content: "https://test.wspace.ai.kr" },
        {
          name: "og:title",
          content: "Survival Choices MBTI Test",
        },
        {
          name: "og:description",
          content: "What type are you in a survival game?",
        },
        { name: "og:site_name", content: "Survival Choices MBTI Test" },
        { name: "og:locale", content: "ko_KR" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Survival Choices MBTI Test",
        },
        {
          name: "twitter:description",
          content: "What type are you in a survival game?",
        },
        { name: "twitter:url", content: "https://test.wspace.ai.kr" },
        {
          name: "twitter:image",
          content: `https://test.wspace.ai.kr/image/meta_eng/metaimg_main.png`,
        },
      ],
      link: [
        { rel: "canonical", href: "https://test.wspace.ai.kr" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
          integrity:
            "sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm",
          crossorigin: "anonymous",
        },
      ],
      script: [
        { src: "https://developers.kakao.com/sdk/js/kakao.js" },
        {
          crossorigin: "anonymous",
          src: "https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v12.0",
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=UA-214707755-1",
          async: true,
        },
      ],
    },
  },

  // 컴포넌트 자동 import
  components: true,
});

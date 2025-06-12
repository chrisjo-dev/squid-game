// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // 호환성 날짜 설정
  compatibilityDate: '2025-06-13',

  // 서버 설정
  nitro: {
    preset: "node-server",
  },

  // 런타임 환경 변수
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://squid-games.site",
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
    head: {
      title: "Squid-Game Test",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        {
          name: "description",
          content: "Which squid game character are you?",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "og:image",
          content: `https://squid-games.site/image/meta_eng/metaimg_main.png`,
        },
        { name: "og:image:width", content: "1200" },
        { name: "og:image:height", content: "630" },
        { name: "og:url", content: "https://squid-games.site" },
        {
          name: "og:title",
          content: "Squid Game Test",
        },
        {
          name: "og:description",
          content: "Which squid game character are you?",
        },
        { name: "og:site_name", content: "Squid game MBTI test" },
        { name: "og:locale", content: "ko_KR" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Squid Game Test",
        },
        {
          name: "twitter:description",
          content: "Which squid game character are you?",
        },
        { name: "twitter:url", content: "https://squid-games.site" },
        {
          name: "twitter:image",
          content: `https://squid-games.site/image/meta_eng/metaimg_main.png`,
        },
      ],
      link: [
        { rel: "canonical", href: "squid-games.site" },
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

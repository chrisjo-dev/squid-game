export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    baseURL: process.env.BASE_URL || "https://www.squid-games.site",
    dev: process.env.NODE_ENV !== "production",
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
    },
  },
  head() {
    return {
      title: "squid-game",
      htmlAttrs: {
        lang: "ko",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "나는 오징어게임에서 어떤 인물일까?",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta/metaimg_main.png`,
        },
        { name: "og:image:width", content: "1200" },
        { name: "og:image:height", content: "630" },
        { name: "og:url", content: "https://squid-games.site" },
        {
          hid: "title",
          name: "og:title",
          content: "오징어게임 MBTI 테스트",
        },
        {
          name: "og:description",
          content: "나는 오징어게임에서 어떤 인물일까?",
        },
        { name: "og:site_name", content: "Squid game MBTI test" },
        { name: "og:locale", content: "ko_KR" },

        // Twitter Open Graph
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "오징어게임 MBTI 테스트" },
        {
          name: "twitter:description",
          content: "나는 오징어게임에서 어떤 인물일까?",
        },
        { name: "twitter:url", content: "https://squid-games.site" },
        {
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta/metaimg_main.png`,
        },
      ],
      link: [
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
          nonce: "e16MXXou",
        },
      ],
    };
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/reset.css", "@/assets/css/styles.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // simple usage
    "nuxt-clipboard",
    // with options
    ["nuxt-clipboard", { autoSetContainer: true }],
  ],

  clipboard: {
    autoSetContainer: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
};

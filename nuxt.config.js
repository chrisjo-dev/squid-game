export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "server",
  server: {
    host: "0.0.0.0",
  },
  env: {
    baseURL: process.env.BASE_URL || "https://squid-games.site",
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
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        {
          hid: "description",
          name: "description",
          content: "Which squid game character are you?",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta_eng/metaimg_main.png`,
        },
        { name: "og:image:width", content: "1200" },
        { name: "og:image:height", content: "630" },
        { name: "og:url", content: "https://squid-games.site" },
        {
          hid: "title",
          name: "og:title",
          content: "Squid Game Test",
        },
        {
          hid: "description",
          name: "og:description",
          content: "Which squid game character are you?",
        },
        { name: "og:site_name", content: "Squid game MBTI test" },
        { name: "og:locale", content: "ko_KR" },

        // Twitter Open Graph
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Squid Game Test",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Which squid game character are you?",
        },
        { name: "twitter:url", content: "https://squid-games.site" },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta_eng/metaimg_main.png`,
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
          type: "text/javascript",
          innerHTML: `window.Kakao.init("${process.env.KAKAO_KEY}")`,
        },
        {
          crossorigin: "anonymous",
          src: "https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v12.0",
          nonce: "e16MXXou",
        },
        {
          type: "text/javascript",
          innerHTML: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-214707755-1');`,
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=UA-214707755-1",
          async: true,
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
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
    "@nuxtjs/dotenv",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // simple usage
    // with options
    ["nuxt-clipboard", { autoSetContainer: true }],
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  sitemap: {
    hostname: "https://squid-games.site",
    lastmod: "2021-12-19",
    gzip: true,
    exclude: ["/result/Final_Modal"],
  },
  clipboard: {
    autoSetContainer: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  robots: {
    UserAgent: "*",
    Allow: "/",
    sitemap: "https://squid-games.site/sitemap.xml",
  },
};

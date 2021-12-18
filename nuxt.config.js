export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "gov-e-service",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~/assets/styles/font.css",
    "~/assets/styles/index.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["nuxt-mq"]],
  // "@nuxtjs/firebase"

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  styleResources: {
    scss: ["~/assets/styles/variables.scss"],
  },

  mq: {
    defaultBreakpoint: "desktop",
    breakpoints: {
      mobile: 768,
      tablet: 1280,
      desktop: 1400,
      desktopWide: 2000,
      desktopUltraWide: Infinity,
    },
  },

  // firebase: {
  //   config: {
  //     apiKey: "AIzaSyCmQqrn5sbWc5wpym8qo7cW77Sn-qebNdE",
  //     authDomain: "undp-youth.firebaseapp.com",
  //     databaseURL:
  //       "https://undp-youth-default-rtdb.asia-southeast1.firebasedatabase.app",
  //     projectId: "undp-youth",
  //     storageBucket: "undp-youth.appspot.com",
  //     messagingSenderId: "1072255283587",
  //     appId: "1:1072255283587:web:ca5b5beacec5ab0cb006b6",
  //   },
  //   services: {
  //     database: true,
  //   },
  // },
};

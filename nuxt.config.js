// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  components: true,

  css: [],

  modules: ["@pinia/nuxt"],

  build: {},

  plugins: [],

  router: {},

  ssr: false,

  app: {
    head: {
      title: "",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Paytone+One&family=Readex+Pro:wght@160..700&display=swap'}
      ],
      script: [
        {
          src: "https://dev.solcode.net/libraries/js/safari_smooth_scroll.js",
          defer: false,
        },
      ],
    },
  },
});
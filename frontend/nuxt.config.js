export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MH info",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Bienvenue sur MH info ! MH info est un site internet où vous pouvez trouver des articles sur divers thèmes, essentiellement scientifiques. Bonne lecture !",
      },
      { name: "og:image", content: "/logo" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "https://kit.fontawesome.com/048c7a73f1.js/" },
      { src: "/script/create-script.js", defer: true },
      { src: "/script/desktop-menu.js", defer: true },
      { src: "/script/mobile-menu.js", defer: true },
      { src: "/script/actual-page.js", defer: true },
      { src: "/script/dark-mode.js", defer: true },
      { src: "/script/footer.js", defer: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./scss/general.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/apollo",
    "@nuxtjs/markdownit",
    "@nuxtjs/i18n",
    "@nuxtjs/redirect-module",
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URL || "http://localhost:1337/graphql",
      },
    },
  },

  markdownit: {
    preset: "default",
    html: true,
    linkify: true,
    breaks: true,
    injected: true,
    use: ["markdown-it-ins", "markdown-it-ignore"],
  },

  i18n: {
    // Must define "iso"
    locales: [
      { code: "fr", iso: "fr-FR" },
      { code: "en", iso: "en" },
    ],
    defaultLocale: "fr",
    trailingSlash: true,
    // Non-fonctionnel
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "en",
    },

    parsePages: false, // Disable babel parsing
    pages: {
      "all-articles": {
        fr: "/tous-les-articles/",
        en: "/all-articles/",
      },
      sciences: {
        fr: "/sciences/",
        en: "/sciences/",
      },
      news: {
        fr: "/actualites/",
        en: false,
      },
      history: {
        fr: "/histoire/",
        en: false,
      },
      books: {
        fr: "/livres/",
        en: false,
      },
      "did-you-know": {
        fr: "/le-saviez-vous/",
        en: false,
      },
      archives: {
        fr: "/archives/",
        en: false,
      },
      _slug: {
        fr: "/articles/:slug",
        en: "/articles/:slug",
      },
    },
  },

  redirect: [
    {
      from: "^.*(?<!/)$",
      to: (from, req) => req.url + "/",
    },
  ],

  router: { trailingSlash: true },

  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 4000,
  },
};

export default {
  // Disable server-side rendering
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bangladesh Tax Digitization",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content:"",
      },
      {
        name: "keywords",content:
          "",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Sajib Sutradhar" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/img/logo.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/static/assets/css/icofont.min.css",
    "@/static/assets/css/responsive-style.css",
    "@/static/assets/css/style.css",
    // "@/static/assets/css/bootstrap.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate",
    { src: "~/plugins/bootstrap.js", mode: "client" },
    { src: "~/plugins/vue-datepicker", ssr: false },
    // { src: "~/plugins/highcharts.js", mode: "client" },

    // {
    //   src: "~/plugins/tawk-messenger.client.js",
    //   mode: "client",
    // },
    { src: "~/plugins/materialize-table.js", mode: "client" },
    // { src: "~/plugins/vuex-persist.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/composition-api/module"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "@nuxtjs/auth-next",
    // "nuxt-lazy-load",
  ],

  toast: {
    position: "top-center",
    duration: 5000,
    action: [
      {
        text: "X",
        onClick: (e, toastObject) => {
          toastObject.goAway(0);
        },
      },
    ],
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error",
        },
      },
    ],
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/auth/login", method: "post", propertyName: "token" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/user/", method: "get", propertyName: "user" },
          // user: false
        },
        tokenType: "bearer",
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://localhost:8000/',
    baseURL: 'https://admin.bdhousingtax.com/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
  loading: "~/components/LoadingBar.vue",

  publicRuntimeConfig: {
    // apibaseURL: 'http://localhost:8000',
    baseURL: 'https://admin.bdhousingtax.com/',

  },
};

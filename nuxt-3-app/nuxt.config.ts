// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "vuetify-nuxt-module", "@nuxt/content"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
        themes: {
          dark: {
            dark: true,
            colors: {
              background: "#121212",
              surface: "#1E1E1E",
              primary: "#BB86FC",
              secondary: "#03DAC6",
              error: "#CF6679",
            },
          },
        },
      },
      /* vuetify options */
    },
  },
});

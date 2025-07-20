// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    ,
    "@nuxt/content",
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});

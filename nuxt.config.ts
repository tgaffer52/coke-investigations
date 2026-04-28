// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      link: [
        // Standard SVG favicon
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        // Fallback for older browsers (optional but recommended)
        { rel: "alternate icon", href: "/favicon.ico" },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css", // For MDI icons
    "@/assets/styles/blog.scss",
    "@/assets/styles/main.scss",
  ],
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
    "@pinia/nuxt",
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});

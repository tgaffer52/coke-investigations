import { aliases, mdi } from "vuetify/iconsets/mdi";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: "dark",
    },
  });
  app.vueApp.use(vuetify);
});

<template>
  <v-app>
    <v-app-bar elevation="0">
      <Banner v-model="mobileMenu" />
    </v-app-bar>
    <MobileSidebar v-if="smAndDown" v-model="mobileMenu" />
    <Sidebar v-else />

    <v-main class="flex flex-col">
      <div class="flex-grow">
        <NuxtPage />
      </div>
      <div class="flex-shrink">
        <Footer />
      </div>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { useDisplay } from "vuetify";

const mobileMenu = ref(false);
const { smAndDown } = useDisplay();
const open = ref(true);

const { mdAndDown } = useDisplay();

onMounted(() => {
  if (mdAndDown.value) {
    open.value = false;
  }
});
</script>

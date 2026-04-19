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
      <Footer />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { useDisplay } from "vuetify";

const mobileMenu = ref(false);
const { smAndDown } = useDisplay();
</script>

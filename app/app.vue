<template>
  <v-app>
    <v-app-bar elevation="0">
      <Banner v-model="mobileMenu" />
    </v-app-bar>

    <MobileSidebar v-if="isMobile" v-model="mobileMenu" />
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
const mobileMenu = ref(false);
const isMobile = computed(() => {
  if (!window) return;
  return window.innerWidth < 768;
});
</script>

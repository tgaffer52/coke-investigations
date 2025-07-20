<template>
  <NuxtLayout>
    <v-app>
      <div class="flex flex-col h-screen">
        <Banner />
        <div class="flex flex-grow">
          <Sidebar />
          <NuxtPage class="overflow-y-auto" />
        </div>
      </div>
    </v-app>
  </NuxtLayout>
</template>
<script setup lang="ts">
import "@/styles/blog.scss";
</script>

<template>
  <v-navigation-drawer
    :width="200"
    v-model="open"
    class="mt-16"
    :temporary="false"
    :scrim="false"
    :absolute="false"
    :app="true"
  >
    <!-- image="@/assets/images/parchment.png" -->
    <div class="border-r h-full w-full">
      <v-btn @click="open = false" variant="text" icon="mdi-chevron-left">
      </v-btn>
      <v-list-item title="Getting Started"></v-list-item>
      <v-divider></v-divider>
      <NuxtLink to="/intro">
        <v-list-item link title="Who am I?"></v-list-item>
      </NuxtLink>
      <NuxtLink to="/about-ghosts">
        <v-list-item link title="What Are Ghosts?" class="mb-4"></v-list-item>
      </NuxtLink>
      <v-divider></v-divider>
      <v-list-item title="Blogs"></v-list-item>
      <v-divider></v-divider>
      <NuxtLink to="/blogs/2021-01-23">
        <v-list-item link title="2021/01/23"></v-list-item>
      </NuxtLink>
    </div>
  </v-navigation-drawer>
  <div v-if="!open" class="absolute top-20 left-4 z-20">
    <v-btn color="white" variant="text" @click="open = true" icon="mdi-menu">
    </v-btn>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const open = ref(true);
</script>

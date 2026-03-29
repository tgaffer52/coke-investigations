<template>
  <v-navigation-drawer
    :width="200"
    v-model="open"
    class="mt-16"
    :temporary="false"
    :scrim="false"
    :app="true"
  >
    <!-- image="@/assets/images/parchment.png" -->
    <div class="border-r h-full w-full">
      <div class="absolute right-[-39px]">
        <button @click="open = !open">
          <div
            class="p-2 rounded-br-lg bg-[#880808] hover:text-[#171717] transition-colors duration-300"
          >
            <div v-if="!open">
              <v-icon>mdi-chevron-right</v-icon>
            </div>
            <div v-else>
              <v-icon>mdi-chevron-left</v-icon>
            </div>
          </div>
        </button>
      </div>
      <v-list-item
        style="background-color: #880808"
        title="Getting Started"
      ></v-list-item>
      <v-divider></v-divider>
      <NuxtLink to="/intro">
        <v-list-item link title="Who am I?"></v-list-item>
      </NuxtLink>
      <NuxtLink to="/about-ghosts">
        <v-list-item link title="What Are Ghosts?" class="mb-4"></v-list-item>
      </NuxtLink>
      <v-divider></v-divider>
      <v-list-item
        style="background-color: #880808"
        title="Blogs"
      ></v-list-item>
      <v-divider></v-divider>
      <NuxtLink to="/blogs/2021-01-23">
        <v-list-item link title="2021/01/23"></v-list-item>
      </NuxtLink>
    </div>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";

const open = ref(true);
</script>

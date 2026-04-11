<template>
  <v-navigation-drawer
    v-model="open"
    :width="180"
    class="antialiased flex-shrink-0 border-none"
    location="right"
  >
    <div class="h-full w-full bg-[#171717] overflow-hidden">
      <div class="w-[180px]">
        <ul class="text-neutral-400">
          <li class="relative z-20 p-3 bg-stone-800 text-neutral-100">
            Getting Started
          </li>

          <SidebarLink title="Who am I?" link="/intro" />
          <SidebarLink
            title="What Are Ghosts?"
            link="/about-ghosts"
            class="mb-4"
          />

          <li class="relative z-20 bg-stone-800 p-3 text-neutral-100">
            Case Logs
          </li>

          <SidebarLink
            v-for="fileName in logFiles"
            :key="fileName"
            :title="getFormattedDate(fileName || '')"
            :link="`/logs/${fileName}`"
          />
        </ul>
      </div>
    </div>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useLogFileStore } from "~/stores/logFilesStore";

const open = defineModel<boolean>();
const emit = defineEmits(["update:model-value"]);

const { logFiles } = useLogFileStore();
</script>

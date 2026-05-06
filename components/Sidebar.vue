<template>
  <v-navigation-drawer
    v-model="open"
    :width="180"
    class="antialiased flex-shrink-0 border-none"
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
            :link="`/case-logs/${fileName}`"
          />
        </ul>
      </div>
    </div>

    <div class="absolute right-[-35px] top-0 bg-stone-800 rounded-br-lg">
      <button @click="open = !open" class="ghost-btn px-3 h-12">
        <div class="butcherman text-2xl flex items-center blood-text-arrow">
          {{ open ? "<" : ">" }}
        </div>
      </button>
    </div>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import { useLogFileStore } from "~/stores/logFilesStore";

const open = ref(true);
const { logFiles } = useLogFileStore();
const { mdAndDown } = useDisplay();

onMounted(() => {
  if (mdAndDown.value) {
    open.value = false;
  }
});
</script>

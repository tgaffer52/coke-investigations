<template>
  <!-- The Flashlight Layer -->
  <div
    v-if="!isTouchDevice"
    v-show="isFlashlightEnabled && open"
    class="fixed pointer-events-none h-screen w-[180px] z-9"
    :style="{
      background: `radial-gradient(circle 250px at ${x}px ${y}px, rgba(255, 255, 255, 0.5) 0%, transparent 80%)`,
    }"
  ></div>
  <div
    class="fixed md:relative bg-[#171717] h-screen mt-16 antialiased flex-shrink-0 transition-[width] duration-300 ease-in-out"
    :class="open ? 'w-[180px]' : 'w-0'"
  >
    <div class="h-full w-full overflow-hidden border-r border-[#880808]">
      <div class="w-[180px]">
        <ul :class="isFlashlightEnabled ? 'text-neutral-800' : ''">
          <li class="p-3 bg-stone-800 text-neutral-100">
            <span>Getting Started</span>
          </li>

          <SidebarLink title="Who am I?" link="/intro" />
          <SidebarLink
            title="What Are Ghosts?"
            link="/about-ghosts"
            class="mb-4"
          />

          <li class="bg-stone-800 p-3 text-neutral-100">Case Logs</li>

          <SidebarLink
            v-for="fileName in logFiles"
            :key="fileName"
            :title="getFormattedDate(fileName || '')"
            :link="`/logs/${fileName}`"
          />
          <img src="@/assets/images/ghost-sidebar.png" alt="" />
        </ul>
      </div>
    </div>

    <div class="absolute right-[-39px] top-0 z-10">
      <button @click="open = !open">
        <div
          class="p-3 rounded-br-lg bg-stone-800 hover:text-neutral-500 transition-colors duration-300"
        >
          <v-icon>{{ open ? "mdi-chevron-left" : "mdi-chevron-right" }}</v-icon>
        </div>
      </button>
    </div>
    <div
      class="absolute bottom-0 right-0 flex items-center scale-75"
      v-show="open && !isTouchDevice"
    >
      <v-switch
        v-model="isFlashlightEnabled"
        hide-details
        color="grey-darken-3"
        base-color="grey-darken-2"
      >
        <template v-slot:label>
          <v-icon>{{
            isFlashlightEnabled ? "mdi-flashlight" : "mdi-flashlight-off"
          }}</v-icon>
        </template>
      </v-switch>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { useMouse } from "@vueuse/core";
import { useLogFileStore } from "~/stores/logFilesStore";

const isFlashlightEnabled = ref(true);
const open = ref(true);
const { x, y } = useMouse();
const { logFiles } = useLogFileStore();

const isTouchDevice = computed(() => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
});

onMounted(() => {
  if (isTouchDevice.value) {
    open.value = false;
  }
});
</script>

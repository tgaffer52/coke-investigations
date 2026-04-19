<template>
  <v-navigation-drawer
    v-model="open"
    :width="180"
    class="antialiased flex-shrink-0 border-none"
  >
    <!-- The Flashlight Layer -->
    <div
      v-if="!isTouchDevice"
      v-show="isFlashlightEnabled && open"
      class="fixed pointer-events-none h-screen w-[180px] z-10"
      :style="{
        background: `radial-gradient(circle 250px at ${x}px ${y - 64}px, rgba(255, 255, 255, 0.5) 0%, transparent 80%)`,
      }"
    ></div>
    <div class="h-full w-full bg-[#171717] overflow-hidden">
      <div class="w-[180px]">
        <ul
          :class="
            isFlashlightEnabled && !isTouchDevice
              ? 'text-neutral-800'
              : 'text-neutral-400'
          "
        >
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
          <img
            class="relative z-20"
            src="@/assets/images/ghost-sidebar.png"
            alt=""
          />
        </ul>
      </div>
    </div>

    <div class="absolute right-[-35px] top-0">
      <button @click="open = !open">
        <div
          class="h-12 butcherman px-3 text-2xl flex items-center rounded-br-lg bg-stone-800 hover:text-[#880808] transition-colors duration-300"
        >
          {{ open ? "<" : ">" }}
        </div>
      </button>
    </div>
    <div
      class="absolute right-0 bottom-0 flex items-center scale-75"
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
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { useLogFileStore } from "~/stores/logFilesStore";

const isFlashlightEnabled = ref(true);
const open = ref(true);
const x = ref(-1000);
const y = ref(-1000);
const { logFiles } = useLogFileStore();

onMounted(() => {
  if (!window) return;
  window.addEventListener("mousemove", (e) => {
    // pageX and pageY automatically add window.scrollY for you
    x.value = e.pageX;
    y.value = e.pageY;
  });
});

const isTouchDevice = computed(() => {
  if (!window) return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
});

onMounted(() => {
  if (isTouchDevice.value) {
    open.value = false;
    isFlashlightEnabled.value = false;
  }
});
</script>

<template>
  <NuxtLink :to="link" :active="active">
    <li
      :style="active ? { backgroundColor: '#880808' } : undefined"
      class="p-3 hover:text-neutral-100 transition-colors duration-300"
      :class="active ? 'text-neutral-100' : ''"
    >
      {{ title }}
    </li>
  </NuxtLink>
</template>
<script setup lang="ts">
import { useRoute } from "#imports";

const { title, link } = defineProps<{
  title?: string;
  link?: string;
}>();
const route = useRoute();
const active = computed(() => {
  if (!link) return false;
  return route.path === link;
});
</script>

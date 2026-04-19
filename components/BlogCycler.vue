<template>
  <div class="flex justify-between mt-10">
    <NuxtLink
      :to="`/logs/${previous}`"
      class="cursor-pointer hover:text-[#880808] transition-colors duration-300"
      :disabled="!previous"
    >
      <span class="text-5xl butcherman" :class="previous ? '' : 'hidden'"
        ><</span
      >
    </NuxtLink>
    <NuxtLink
      :to="`/logs/${next}`"
      class="cursor-pointer hover:text-[#880808] transition-colors duration-300"
      :disabled="!next"
    >
      <span class="text-5xl butcherman" :class="next ? '' : 'hidden'">></span>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const { currentBlog } = defineProps<{
  currentBlog: string;
}>();
const { logFiles } = useLogFileStore();
const { previous, next } = getAdjacentPosts(currentBlog, logFiles);
</script>

<template>
  <div class="flex justify-between mt-10">
    <NuxtLink
      :to="previous ? `/case-logs/${previous}` : ''"
      class="cursor-pointer ghost-btn"
      :disabled="!previous"
    >
      <span
        class="blood-text-arrow text-5xl butcherman"
        :class="previous ? '' : 'hidden'"
        ><</span
      >
    </NuxtLink>
    <NuxtLink
      :to="next ? `/case-logs/${next}` : ''"
      class="cursor-pointer ghost-btn"
      :disabled="!next"
    >
      <span
        class="blood-text-arrow text-5xl butcherman"
        :class="next ? '' : 'hidden'"
        >></span
      >
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

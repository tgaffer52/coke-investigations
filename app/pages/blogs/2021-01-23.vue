<template>
  <div class="py-4 px-[5vw]">
    <ContentRenderer v-if="aboutGhosts" :value="aboutGhosts" />
    <div v-else>Content not found</div>
  </div>
</template>
<script setup lang="ts">
const { data: aboutGhosts } = await useAsyncData(() =>
  queryCollection("content").path("/blogs/2021-01-23").first(),
);

useSeoMeta({
  title: aboutGhosts.value?.title,
  description: aboutGhosts.value?.description,
});
</script>
<style lang="scss" scoped></style>

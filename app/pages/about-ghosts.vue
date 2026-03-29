<template>
  <div class="blog-content py-4 px-[5vw]">
    <ContentRenderer v-if="aboutGhosts" :value="aboutGhosts" />
    <div v-else>Content not found</div>
  </div>
</template>
<script setup lang="ts">
const { data: aboutGhosts } = await useAsyncData(() =>
  queryCollection("content").path("/about-ghosts").first(),
);

useSeoMeta({
  title: aboutGhosts.value?.title,
  description: aboutGhosts.value?.description,
});
</script>
<style lang="scss" scoped></style>

<template>
  <div class="py-4 px-[5vw] blog-content">
    <div class="md:flex w-full justify-between mb-10">
      <div class="title" v-if="date">
        <h2 class="mb-0">{{ date.getFullYear() }}</h2>
        <h1>
          {{
            date.toLocaleDateString("en-US", { month: "long", day: "numeric" })
          }}
        </h1>
      </div>
      <PostIt
        :name="name"
        :classification="classification"
        :evaluation="evaluation"
        :riskLevel="riskLevel"
      />
    </div>
    <ContentRenderer v-if="blog" :value="blog" />
    <div v-else>Content not found</div>
    <BlogCycler :current-blog="dateString" />
  </div>
</template>

<script setup lang="ts">
// 1. defineProps should always be at the very top of <script setup>
const { name, classification, evaluation, riskLevel } = defineProps<{
  name: string;
  classification: string;
  evaluation: string;
  riskLevel: string;
}>();

const route = useRoute();

// 2. Use `computed` instead of manual watchers.
// These will automatically recalculate anytime `route.path` changes.
const dateString = computed(() => route.path.replace("/case-logs/", ""));
const date = computed(() => new Date(dateString.value));

// 3. Let Nuxt handle the reactivity!
// By adding the `watch` array, Nuxt automatically re-runs this fetch
// anytime the route changes. We also alias `data` directly to `blog`.
const { data: blog } = await useAsyncData(
  `blog-${route.path}`, // A unique key ensures Nuxt doesn't cache the wrong route
  () => queryCollection("content").path(route.path).first(),
  {
    watch: [() => route.path],
  },
);

// 4. Use getter functions `() => ...` to make SEO meta reactive.
// This ensures the title updates successfully when the async data arrives.
useSeoMeta({
  title: () => blog.value?.title,
  description: () => blog.value?.description,
});
</script>

<style lang="scss" scoped>
.post-it {
  background: url("@/assets/images/parchment.png") no-repeat center center;
  color: #121212;
}
</style>

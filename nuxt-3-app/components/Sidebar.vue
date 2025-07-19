<template>
  <div class="bg-zinc-900 min-w-[200px] border-r w-[200px]">
    <v-list-item title="Getting Started"></v-list-item>
    <v-divider></v-divider>
    <NuxtLink to="/intro">
      <v-list-item link title="Who am I?"></v-list-item>
    </NuxtLink>
    <NuxtLink to="/about-ghosts">
      <v-list-item link title="What Are Ghosts?" class="mb-4"></v-list-item>
    </NuxtLink>
    <v-divider></v-divider>
    <v-list-item title="Blogs"></v-list-item>
    <v-divider></v-divider>
    <NuxtLink to="/blogs/2021-01-23">
      <v-list-item link title="2021/01/23"></v-list-item>
    </NuxtLink>
  </div>
</template>

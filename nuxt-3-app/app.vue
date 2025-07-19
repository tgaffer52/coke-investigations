<template>
  <v-app>
    <div class="flex flex-col h-screen">
      <Banner />
      <div class="flex flex-grow">
        <Sidebar />
        <NuxtPage class="overflow-y-auto" />
      </div>
    </div>
  </v-app>
</template>

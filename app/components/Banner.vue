<template>
  <nav class="fixed top-0 z-10 w-full">
    <v-toolbar color="#880808">
      <NuxtLink to="/">
        <v-toolbar-title class="barriecito">
          <span class="mx-2">
            <v-icon class="ghost-icon">mdi-ghost</v-icon>
          </span>
          Koke Investigations
        </v-toolbar-title>
      </NuxtLink>
    </v-toolbar>
  </nav>
</template>
<style scoped>
/* The wiggle animation timeline stays exactly the same */
@keyframes wiggle {
  0% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-15deg);
  }
}

/* NEW: When the user hovers over the 'barriecito' title container,
  apply the infinite wiggle animation to the 'ghost-icon' inside it.
*/
.barriecito:hover .ghost-icon {
  animation: wiggle 0.3s infinite;
}
</style>

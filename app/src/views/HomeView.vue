<script setup lang="ts">
import VideoTranscript from '@/components/VideoTranscript.vue'
</script>

<template>
  <main>
    <div class="d-flex justify-center py-8">
      <video controls width="1000">
        <source src="../assets/example.mov" type="video/webm" />
      </video>
    </div>
    <v-expansion-panels>
      <v-expansion-panel>
        <template #title>
          <h3><em>Audio Description and Transcript</em></h3>
        </template>
        <template #text>
          <VideoTranscript />
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </main>
</template>
<script setup lang="ts"></script>
<style lang="scss">
p,
h3 {
  padding-bottom: 10px;
}
</style>

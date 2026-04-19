<template>
  <div class="post-it caveat relative pt-4 px-4 md:max-w-[50%]">
    <!-- Small black triangle that appears on hover in the bottom right.
      Commenting Out because I don't want users to think it is interactive. -->
    <!-- <div class="triangle rounded-br-3xl transition-opacity duration-300"></div> -->

    <div
      class="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 z-10 border border-white/50"
    ></div>
    <p>
      Name: {{ name }} <br />

      Classification: {{ classification }} <br />

      Evaluation: {{ evaluation }}
      <br />

      Risk level: {{ riskLevel }}
    </p>
  </div>
</template>
<script setup lang="ts">
const { name, classification, evaluation, riskLevel } = defineProps<{
  name: string;
  classification: string;
  evaluation: string;
  riskLevel: string;
}>();
</script>
<style scoped lang="scss">
.post-it {
  background: url("@/assets/images/parchment.webp") no-repeat center center;
  color: #121212;

  &:hover .triangle {
    opacity: 1;
  }

  .triangle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    background-color: #fff49e;
    opacity: 0;
  }
}
</style>

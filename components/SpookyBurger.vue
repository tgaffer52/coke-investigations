<template>
  <button
    class="spooky-burger"
    :class="{ 'is-open': open }"
    @click="toggleMenu"
    aria-label="Toggle Menu"
  >
    <span class="line line-1"></span>
    <span class="line line-2"></span>
    <span class="line line-3"></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = defineModel();

const toggleMenu = () => {
  open.value = !open.value;
  // Optional: Emit an event to your parent layout to actually open the drawer
  // emit('toggle-drawer', open.value)
};
</script>

<style scoped>
.spooky-burger {
  /* Size of the clickable area */
  width: 40px;
  height: 30px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  z-index: 50; /* Ensure it stays above your drawer */
}

.line {
  width: 100%;
  height: 4px;
  background-color: #cbd5e1; /* Default slate color */
  border-radius: 4px;
  /* This cubic-bezier is the secret!
    It quickly snaps back, shoots past its target, and settles.
  */
  transition:
    transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6),
    opacity 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  transform-origin: center;
}

/* --- THE SPOOKY 'X' STATE --- */

/* Ghostly green glow when opened */
.spooky-burger.is-open .line {
  background-color: #bebebe;
  box-shadow:
    0 0 8px rgba(176, 174, 174, 0.8),
    0 0 16px rgba(163, 162, 162, 0.4);
}

/* Top line drops down and rotates 45 degrees */
.spooky-burger.is-open .line-1 {
  transform: translateY(13px) rotate(45deg);
  animation: static-flicker 0.4s ease-in-out;
}

/* Middle line gets violently squished to nothing */
.spooky-burger.is-open .line-2 {
  opacity: 0;
  transform: scaleX(0);
}

/* Bottom line jumps up and rotates -45 degrees */
.spooky-burger.is-open .line-3 {
  transform: translateY(-13px) rotate(-45deg);
  animation: static-flicker 0.4s ease-in-out 0.1s; /* Slight delay on bottom line */
}

/* --- THE FLICKER ANIMATION --- */
@keyframes static-flicker {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>

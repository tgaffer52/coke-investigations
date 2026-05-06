<template>
  <!-- Navbar Container -->
  <!-- We use ref="navbarRef" so Vue can access this element in the script -->
  <nav
    ref="navbarRef"
    class="w-screen h-16 bg-neutral-900 flex items-center justify-between px-2 md:px-6 z-20 border-"
  >
    <!-- CANVAS BACKGROUND -->
    <canvas
      ref="canvasRef"
      class="hidden desktop:block absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    ></canvas>

    <!-- Navbar Content (Foreground) -->
    <div class="relative z-10 flex justify-between w-full">
      <!-- Logo / Title -->
      <NuxtLink
        to="/"
        class="barriecito brand-title font-bold text-2xl flex items-center gap-3 tracking-wide no-select group"
      >
        <span class="p-2">
          <v-icon class="ghost-icon">mdi-ghost</v-icon>
        </span>
        Koke Investigations
      </NuxtLink>

      <!-- Navigation Links -->
      <div
        class="hidden desktop:flex gap-6 text-neutral-300 text-lg font-medium px-3"
      >
        <NuxtLink to="/intro" class="nav-link">Who am I?</NuxtLink>
        <NuxtLink to="/about-ghosts" class="nav-link"
          >What Are Ghosts?</NuxtLink
        >
        <div class="nav-link">
          Case Logs

          <v-menu
            activator="parent"
            open-on-hover
            open-on-click
            transition="slide-y-transition"
          >
            <ul class="bg-[#171717] text-neutral-400 overflow-hidden rounded">
              <SidebarLink
                v-for="fileName in logFiles"
                :key="fileName"
                :title="getFormattedDate(fileName || '')"
                :link="`/case-logs/${fileName}`"
              />
            </ul>
          </v-menu>
        </div>
      </div>

      <!-- Mobile Menu Icon -->
      <div class="flex desktop:hidden items-center">
        <SpookyBurger v-model="mobileMenu" class="scale-[0.7]" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useLogFileStore } from "~/stores/logFilesStore";

// 1. Vue Template Refs instead of document.getElementById
const canvasRef = ref<HTMLCanvasElement | null>(null);
const navbarRef = ref<HTMLElement | null>(null);
const { logFiles } = useLogFileStore();

const mobileMenu = defineModel();

// Variables for animation state
let animationFrameId: number;
let width = 0;
let height = 0;
let time = 0;

interface MouseState {
  x: number;
  active: boolean;
}

const mouse: MouseState = { x: -1000, active: false };
const targetMouse = { x: -1000 };

// 2. Resize Handler
const resize = () => {
  if (!navbarRef.value || !canvasRef.value) return;
  width = navbarRef.value.offsetWidth;
  height = navbarRef.value.offsetHeight;
  canvasRef.value.width = width;
  canvasRef.value.height = height;
};

// 3. Mouse Event Handlers
const handleMouseMove = (e: MouseEvent) => {
  if (!navbarRef.value) return;
  const rect = navbarRef.value.getBoundingClientRect();
  targetMouse.x = e.clientX - rect.left;
  mouse.active = true;
};

const handleMouseLeave = () => {
  mouse.active = false;
};

// 4. The Animation Engine
const animate = () => {
  const canvas = canvasRef.value;
  const ctx = canvas?.getContext("2d");

  if (!ctx || !canvas) return; // Guard clause

  time += 0.05;

  // Smooth easing toward target
  if (mouse.active) {
    mouse.x += (targetMouse.x - mouse.x) * 0.15;
  } else {
    mouse.x += (-1000 - mouse.x) * 0.05;
  }

  // Clear frame
  ctx.clearRect(0, 0, width, height);

  const barWidth = 3;
  const gap = 4;
  const totalWidth = barWidth + gap;
  const numBars = Math.floor(width / totalWidth);

  for (let i = 0; i < numBars; i++) {
    const x = i * totalWidth;
    let barHeight = 8 + Math.sin(time + i * 0.15) * 4;

    const distX = Math.abs(mouse.x - x);
    const influenceRadius = 180;

    if (distX < influenceRadius) {
      const normalizedDist = distX / influenceRadius;
      const influence = Math.cos((normalizedDist * Math.PI) / 2);
      barHeight += influence * 45;
    }

    const y = (height - barHeight) / 2;
    const baseOpacity = 0.3;
    const dynamicOpacity =
      distX < influenceRadius
        ? baseOpacity +
          0.5 * Math.cos(((distX / influenceRadius) * Math.PI) / 2)
        : baseOpacity;

    ctx.fillStyle = `rgba(200, 20, 20, ${dynamicOpacity})`;
    ctx.beginPath();

    // Typecast workaround for older TS setups missing roundRect
    if (typeof (ctx as any).roundRect === "function") {
      (ctx as any).roundRect(x, y, barWidth, barHeight, 2);
    } else {
      ctx.rect(x, y, barWidth, barHeight);
    }

    ctx.fill();
  }

  // Request next frame and save ID for cleanup
  animationFrameId = requestAnimationFrame(animate);
};

// 5. Lifecycle Hooks
onMounted(() => {
  // Setup logic runs exactly once after the component attaches to the DOM
  resize();
  window.addEventListener("resize", resize);

  if (navbarRef.value) {
    navbarRef.value.addEventListener("mousemove", handleMouseMove);
    navbarRef.value.addEventListener("mouseleave", handleMouseLeave);
  }

  // Kick off the loop
  animate();
});

onBeforeUnmount(() => {
  // CRITICAL: Clean up listeners and animation to prevent memory leaks!
  window.removeEventListener("resize", resize);

  if (navbarRef.value) {
    navbarRef.value.removeEventListener("mousemove", handleMouseMove);
    navbarRef.value.removeEventListener("mouseleave", handleMouseLeave);
  }

  cancelAnimationFrame(animationFrameId);
});
</script>
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

/* Prevent text selection when playing with the waves */
.no-select {
  user-select: none;
}

.nav-link {
  @apply h-20 flex items-center text-neutral-400 hover:text-neutral-100 transition-all;
}
</style>

<template>
  <canvas
    ref="canvasRef"
    class="tv-static"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvasRef = ref(null);
let ctx = null;
let animationId = null;
let imageData = null;
let frameCount = 0;

// Configuration variables
const config = {
  resolution: 0.5, // 0.5 means half-size for performance/retro feel
  distortionRadius: 200, // Size of the warping bubble
  distortionStrength: 0.4, // How strong the magnifying "bulge" is (try 0.5 to 1.5)
  baseNoise: 220, // Max brightness of the static (0-255)
};

const mouse = { x: -10000, y: -10000 };

const handleMouseMove = (e) => {
  if (!canvasRef.value) return;
  const rect = canvasRef.value.getBoundingClientRect();

  // Calculate the exact ratio between the internal pixels and the CSS size
  const scaleX = canvasRef.value.width / rect.width;
  const scaleY = canvasRef.value.height / rect.height;

  // Multiply the relative mouse position by the exact scale ratio
  mouse.x = (e.clientX - rect.left) * scaleX;
  mouse.y = (e.clientY - rect.top) * scaleY;
};

const handleMouseLeave = () => {
  mouse.x = -10000;
  mouse.y = -10000;
};

const resizeCanvas = () => {
  if (!canvasRef.value || !ctx) return;

  // Read the actual physical dimensions of the element, ignoring scrollbars
  const rect = canvasRef.value.getBoundingClientRect();

  // Apply our resolution scaling
  const width = rect.width * config.resolution;
  const height = rect.height * config.resolution;

  canvasRef.value.width = width;
  canvasRef.value.height = height;

  imageData = ctx.createImageData(width, height);
};

const drawStatic = () => {
  // If the canvas was removed by HMR, stop the loop immediately!
  if (!canvasRef.value || !document.body.contains(canvasRef.value)) {
    if (animationId) cancelAnimationFrame(animationId);
    return;
  }

  if (!canvasRef.value || !ctx || !imageData) return;

  const width = canvasRef.value.width;
  const height = canvasRef.value.height;
  const data = imageData.data;

  // Calculate radius limits once per frame
  const scaledRadius = config.distortionRadius * config.resolution;
  const finalRadiusSq = scaledRadius * scaledRadius;

  // Advance the frame so the noise animates, and create a unique seed
  frameCount++;
  const currentSeed = Math.imul(frameCount, 2654435761);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (y * width + x) * 4;

      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const distSq = dx * dx + dy * dy;

      let warpX = x;
      let warpY = y;

      // If within the cursor radius, apply the structural warp!
      if (distSq < finalRadiusSq) {
        // Calculate intensity (1 at the center, 0 at the edge)
        const intensity = 1 - distSq / finalRadiusSq;
        // Square the intensity to create a smooth, glass-like lens curve
        const curve = intensity * intensity;

        // Pull the coordinates toward the cursor to "magnify" and stretch them
        warpX -= dx * curve * config.distortionStrength;
        warpY -= dy * curve * config.distortionStrength;
      }

      // Convert the warped float coordinates into integers
      const ix = Math.floor(warpX);
      const iy = Math.floor(warpY);

      // Very fast mathematical hash (MurmurHash3 style) to generate coordinate-based noise
      // This is what allows the pixels to physically stretch when warped!
      let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ currentSeed;
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h ^= h >>> 16;

      // Convert the hash back to a visual brightness value
      const noise = ((h >>> 0) / 4294967296) * config.baseNoise;

      // Apply the exact same noise to Red, Green, and Blue for pure grayscale
      data[index] = noise;
      data[index + 1] = noise;
      data[index + 2] = noise;
      data[index + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
  animationId = requestAnimationFrame(drawStatic);
};

onMounted(() => {
  ctx = canvasRef.value.getContext("2d", { willReadFrequently: true });
  resizeCanvas();
  drawStatic();
});

watch(
  () => canvasRef.value,
  () => {
    if (!canvasRef.value.height || !canvasRef.value.width) return;
    resizeCanvas();
  },
  { deep: true },
);

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId);
});
</script>

<style scoped>
.tv-static {
  display: block;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  background-color: black;
  border-radius: 36px;
}
</style>

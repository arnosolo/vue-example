<script setup lang="ts">
import { ref } from 'vue'

const hasPulse = ref(false)
const isInfinite = ref(true)

function handleClick() {
  hasPulse.value = true
  setTimeout(() => {
    hasPulse.value = false
  }, 2000)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex justify-center items-center w-18 h-18 rounded-1 bg-primary">
      <div
        class="w-12 h-12 rounded-full bg-white"
        :class="{
          'pulse-animation': hasPulse,
          'pulse-animation-infinite': isInfinite,
        }"
        @click="handleClick"
      />
    </div>
    <div class="flex gap-1">
      <input v-model="isInfinite" type="checkbox">
      <p>Infinite</p>
    </div>
  </div>
</template>

<style scoped>
.pulse-animation {
  animation: pulse 2s;
}

.pulse-animation-infinite {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 2rem rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
</style>

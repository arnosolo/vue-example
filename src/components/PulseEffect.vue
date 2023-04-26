<script setup lang="ts">
import { ref } from 'vue'

const hasPulse = ref(false)

function handleClick() {
  hasPulse.value = true
  setTimeout(() => {
    hasPulse.value = false
  }, 2000)
}
</script>

<template>
  <div
    class="blob" :class="{ 'blob-pulse': hasPulse }"
    @click="handleClick"
  />
</template>

<style scoped>
.blob {
  background: white; border-radius: 50%;
  height: 5rem;
  width: 5rem;
}

.blob-pulse {
  animation: pulse 2s;
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

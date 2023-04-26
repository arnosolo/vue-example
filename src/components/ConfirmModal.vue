<script setup lang="ts">
defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <transition name="modal">
    <div
      v-if="show" fixed z-998 top-0 left-0 w-full h-full bg-black class="bg-transparent-black"
      flex flex-col justify-center items-center
    >
      <div flex flex-col px-6 py-6 gap-4 rounded-md bg-white>
        <slot />
        <button @click="emit('close')">
          Close
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.bg-transparent-black {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-enter-active {
  transition: all 0.3s ease-out;
}
.modal-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>

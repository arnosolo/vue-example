<script setup lang="ts">
const props = defineProps<{
  content: string
}>()

const emit = defineEmits(['input'])
</script>

<template>
  <div border-1>
    <input type="text" :value="content" @input="(e) => emit('input', e.target.value)">
  </div>
</template>

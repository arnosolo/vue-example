<script lang="ts" setup>
interface Props {
  modelValue: number
}
defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
</script>

<template>
  <input
    type="number" :value="modelValue"
    @input="e => emit('update:modelValue', Number((e.target as any).value))"
  >
</template>

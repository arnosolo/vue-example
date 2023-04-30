<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <h1 text-center>
      {{ msg }}
    </h1>
  </div>
</template>

<style scoped>

</style>

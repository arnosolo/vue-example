<script setup lang="ts">
import HelloWorld from '@src/components/HelloWorld.vue'
</script>

<template>
  <div flex flex-col>
    <hello-world />
    <div flex justify-center gap-2>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" w-20 alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" w-20 alt="Vue logo">
      </a>
      <a href="https://uno.antfu.me/" target="_blank">
        <img src="../assets/unocss.svg" w-20 alt="Vue logo">
      </a>
    </div>
    <div flex justify-center items-center gap-2>
      <span i-ic-baseline-add-circle text-primary />
      <p text-center>
        Left icon should be <span text-primary>blue</span>
      </p>
    </div>
    <div flex gap-2 justify-center>
      <p font-mono>
        font-mono
      </p>
      <p font-sans>
        font-sans
      </p>
      <p font-serif>
        font-serif
      </p>
      <p font-helvetica>
        font-helvetica
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>

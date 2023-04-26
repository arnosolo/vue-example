<!-- ImageViewer.vue -->
<script setup lang="ts">
// https://github.com/fengyuanchen/viewerjs
import { onMounted, ref, watch, watchEffect } from 'vue'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

interface Props {
  src: string
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
})

const image_viewer_el = ref<HTMLImageElement | null>(null)
const viewer = ref<Viewer | undefined>(undefined)
const isShow = ref(false)

onMounted(() => {
  viewer.value = createViewer()
})

watch(props, (_newVal) => {
  viewer.value = createViewer()
})

function createViewer() {
  if (image_viewer_el.value === null) {
    return undefined
  }
  return new Viewer(image_viewer_el.value, {
    navbar: false,
    title: () => props.alt,
    button: false,
    toolbar: {
    },
    shown() {
      isShow.value = true
    },
    hidden() {
      isShow.value = false
    },
  })
}
</script>

<template>
  <img ref="image_viewer_el" :src="src" :alt="alt">
  <p>{{ isShow }}</p>
</template>

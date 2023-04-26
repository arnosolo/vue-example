<script setup lang="ts">
import * as monaco from 'monaco-editor'
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  content: string
}>()

const emit = defineEmits(['update:content'])

const monaco_editor_el = ref<HTMLDivElement>()

let monacoEditor: monaco.editor.IStandaloneCodeEditor

onMounted(() => {
  if (monaco_editor_el.value) {
    monacoEditor = monaco.editor.create(monaco_editor_el.value, {
      value: '',
      language: 'sql',
      automaticLayout: true,
    })

    monacoEditor?.setValue(props.content)
    monacoEditor.onDidChangeModelContent(() => {
      if (monacoEditor) {
        emit('update:content', monacoEditor.getValue())
      }
    })
  }
})

// watch(props, (_newVal) => {
//   monacoEditor?.setValue(props.content)
// })
</script>

<template>
  <div border-1 border-gray-200 py-4 pr-4>
    <div ref="monaco_editor_el" class="h-200px" />
  </div>
</template>

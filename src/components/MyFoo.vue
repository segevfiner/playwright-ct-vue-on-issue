<script setup lang="ts">
import { useAttrs } from 'vue'
import MyBar from './MyBar.vue'

const attrs = useAttrs()
console.log('%o', { ...attrs })
</script>

<template>
  <MyBar v-bind="($attrs as any)" />
</template>

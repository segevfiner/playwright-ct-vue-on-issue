<script setup lang="ts">
defineProps<{
  msg: string
}>()
defineEmits(['foo'])
</script>

<template>
  {{ msg }}
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { lowlight } from 'lowlight/lib/all'

const props = defineProps<{
    code: string;
}>();

const code = computed(() => {
    return lowlight.highlightAuto(props.code);
})
</script>

<template>
    <pre><code>
{{ code }}
</code></pre>
</template>

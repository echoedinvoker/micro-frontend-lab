<template>
  <div ref="mdiRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const mdiRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  if (mdiRef.value) {
    try {
      const mdiModule = await import('mdi/MdiApp');
      mdiModule.default.mount(mdiRef.value);
    } catch (error) {
      console.error('Failed to mount dashboard:\n', error);
    }
  }
});
</script>

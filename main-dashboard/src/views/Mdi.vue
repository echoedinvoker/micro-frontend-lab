<template>
  <div ref="mdiRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { vuetify } from '../plugins/vuetify';

const mdiRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  if (mdiRef.value) {
    try {
      const mdiModule = await import('mdi/MdiApp');
      mdiModule.default.mount(mdiRef.value, { vuetify });
    } catch (error) {
      console.error('Failed to mount dashboard:\n', error);
    }
  }
});
</script>

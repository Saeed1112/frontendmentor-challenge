<template>
  <div
      class="fixed select-none bottom-10 right-10 flex items-center justify-center gap-2 font-medium text-neutral-900 dark:text-gray-100">
    {{ dark ? 'Light' : 'Dark' }}
    <div
        @click="dark = !dark"
        class="flex items-center p-0.5  h-6 w-10 dark:bg-white rounded-full bg-neutral-900">
      <div class="aspect-square h-full bg-white dark:bg-neutral-800 rounded-full" :class="{'ml-auto':dark}"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref, useHead, watch} from "#imports";

const dark = ref(false)
watch(dark, () => {
  useHead({
    htmlAttrs: {
      class: {
        dark: dark.value
      }
    }
  })
})

</script>

<style scoped>

</style>

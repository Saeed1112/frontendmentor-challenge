<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 z-[60] bg-black bg-opacity-80 flex items-center justify-center select-none py-10"
       v-if="modelValue"
  >
    <div class="w-[34rem] flex flex-col gap-4 md:gap-10 my-auto">
      <div class="relative px-3 md:px-0">
        <div class="absolute right-5 md:right-0 scale-[1.5] -top-10 group cursor-pointer"
             @click="$emit('update:modelValue', false)">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
                class="group-hover:fill-c-orange"
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff" fill-rule="evenodd"/>
          </svg>
        </div>
        <div
            v-if="index + 1 < images.length"
            @click="index++"
            class="h-10 md:h-14 aspect-square absolute top-1/2 rounded-full bg-white flex items-center justify-center  right-4 md:-right-7 group cursor-pointer"
            style="transform: translate(0,-50%)">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" class="group-hover:stroke-c-orange" stroke="#1D2026" stroke-width="3" fill="none"
                  fill-rule="evenodd"/>
          </svg>
        </div>
        <img :src="images[index].url" class="w-full aspect-square object-cover rounded-2xl" alt="">
        <div
            v-if="index > 0"
            @click="index--"
            class="h-10 md:h-14 aspect-square absolute top-1/2 rounded-full bg-white flex items-center justify-center left-4 md:-left-7 group pr-1 cursor-pointer"
            style="transform: translate(0,-50%)">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8" class="group-hover:stroke-c-orange" stroke="#1D2026" stroke-width="3" fill="none"
                  fill-rule="evenodd"/>
          </svg>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-3 md:gap-8 px-3 md:px-10">
        <div v-for="(image,key) in images"
             class="rounded-xl border-2 border-transparent overflow-hidden cursor-pointer dark:hover:bg-neutral-900 dark:bg-neutral-900 hover:bg-white"
             :class="{'border-c-orange bg-white':index === key}"
             :key="key" @click="index = key">
          <img :src="image.thumbnail"
               class="object-cover aspect-square hover:opacity-50"
               :class="{'opacity-50':index === key}"
               alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {Image} from "~/type/interfaces";

defineProps({
  modelValue: Boolean,
  images: Array as PropType<Image[]>,
  index: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>

</style>

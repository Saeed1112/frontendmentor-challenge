<template>
  <div
      class="bg-white rounded-lg py-6 flex px-8 shadow-xl gap-5 lg:items-center border-l-4 flex-col lg:flex-row relative"
      :class="{'border-desaturated-dark-cyan': data.featured,'border-transparent': !data.featured}">

    <div class="flex gap-5 items-center">
      <img :src="data?.logo" class="absolute lg:h-auto h-16 lg:relative lg:top-0 -top-10" alt="">
      <div class="flex flex-col gap-1 mt-5 lg:mt-0">
        <div class="flex gap-3 items-center">
          <h2 class="text-desaturated-dark-cyan font-bold text-lg">{{ data?.company }}</h2>
          <span v-if="data?.new"
                class="flex items-center uppercase bg-desaturated-dark-cyan px-3 text-white font-medium h-6 pt-1 rounded-full">New!</span>
          <span v-if="data?.featured"
                class="flex items-center uppercase bg-black px-3 text-white font-medium h-6 pt-1 rounded-full">featured</span>
        </div>
        <h1 class="text-lg font-semibold text-xl cursor-pointer hover:text-desaturated-dark-cyan"
            v-text="data.position"></h1>
        <div class="flex items-center gap-4 text-dark-grayish-cyan font-medium">
          <span>{{ data?.postedAt }}</span>
          <div class="h-1 w-1 rounded-full bg-dark-grayish-cyan"/>
          <span>{{ data?.contract }}</span>
          <div class="h-1 w-1 rounded-full bg-dark-grayish-cyan"/>
          <span>{{ data?.location }}</span>
        </div>
      </div>
    </div>

    <div class="h-0.5 bg-light-grayish-cyan-table block lg:hidden"/>

    <div class="flex gap-2 ml-auto flex-wrap w-full lg:w-auto lg:justify-end">
      <span class="chip" @click="$emit('filter', data?.role)">{{ data?.role }}</span>
      <span class="chip" @click="$emit('filter', data?.level)">{{ data?.level }}</span>
      <span v-for="(item,key) in data?.tools"
            @click="$emit('filter', item)"
            :key="key"
            class="chip">
        {{ item }}
      </span>
      <span v-for="(item,key) in data?.languages"
            @click="$emit('filter', item)"
            :key="key"
            class="chip">
        {{ item }}
      </span>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
  }
})
</script>

<style scoped>
.chip {
  @apply cursor-pointer;
  @apply hover:bg-desaturated-dark-cyan hover:text-white transition-colors h-7 text-desaturated-dark-cyan bg-desaturated-dark-cyan bg-opacity-20 flex items-center px-2 font-semibold pt-1 rounded-md;
}
</style>

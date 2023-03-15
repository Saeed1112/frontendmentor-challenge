<template>
  <main class="min-h-screen bg-light-grayish-cyan font-league-spartan flex items-center flex-col">
    <header class="bg-center bg-cover bg-local h-48 w-full bg-desaturated-dark-cyan"
            style="background-image: url('/images/bg-header-desktop.svg')">
    </header>
    <div class="md:w-full lg:w-10/12 xl:w-9/12 2xl:w-8/12 -mt-8 flex flex-col mb-20 lg:px-0 px-10">

      <div class="w-full bg-white py-5 rounded-lg shadow-2xl flex items-center px-10 gap-3" v-if="filtered">
        <div class="flex-wrap flex gap-3">
          <div v-for="(filter,key) in filters" class="closable-chip">
            {{ filter }}
            <div @click="filters.splice(key,1)">
              <img src="/images/icon-remove.svg" alt="">
            </div>
          </div>
        </div>

        <div class="ml-auto">
          <button class="underline font-semibold text-desaturated-dark-cyan" @click="filters = []">Clear</button>
        </div>
      </div>

      <section class="w-full flex flex-col gap-16 lg:gap-5" :class="{'mt-24': !filtered,'mt-16': filtered}">
        <AppCard v-for="(item,key) in filteredData" :key="key" :data="item" @filter="onSelectFilter"/>
      </section>


    </div>


  </main>
</template>

<script setup lang="ts">
import data from '~/data.json'
import AppCard from "~/components/app-card.vue";
import {computed, ref} from "#imports";

const filters = ref<string[]>([])
const filtered = computed(() => filters.value.length > 0)
const filteredData = computed(() => {
  const {value} = filters;
  if (value.length > 0) {
    return data.filter((item) => [...item.tools, ...item.languages, item.role, item.level].filter((v) => value.includes(v)).length === value.length)
  }
  return data;
})

function onSelectFilter(filter: string) {
  if (filters.value.includes(filter)) return;
  filters.value.push(filter)
}


</script>

<style scoped>
.closable-chip {
  @apply cursor-pointer overflow-hidden;
  @apply transition-colors h-7 text-desaturated-dark-cyan bg-desaturated-dark-cyan bg-opacity-20 flex items-center pl-2 gap-2 font-semibold pt-1 rounded-md;
}

.closable-chip div {
  @apply transition flex items-center bg-desaturated-dark-cyan justify-center hover:bg-black h-7 aspect-square -mt-1;
}
</style>

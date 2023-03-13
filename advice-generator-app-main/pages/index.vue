<template>
  <main class="min-h-screen bg-dark-blue font-manrope flex flex-col justify-center items-center px-3">

    <div
        class="shadow-2xl bg-dark-grayish-blue mt-auto rounded-xl px-5 sm:px-12 py-10 w-full sm:w-[32rem] relative flex flex-col gap-5">
      <h1 class="text-neon-green uppercase tracking-[4px] text-center font-bold text-sm">Advice #{{ data?.id }}</h1>
      <p class="text-light-cyan font-black text-[1.75rem]">“{{ data?.advice }}”</p>
      <img src="/images/pattern-divider-desktop.svg" class="mb-8 hidden sm:inline" alt="image">
      <img src="/images/pattern-divider-mobile.svg" class="mb-8 sm:hidden" alt="image">
      <div class="absolute left-0 right-0 flex items-center -bottom-8 justify-center">
        <div class="h-16 w-16 bg-neon-green rounded-full flex items-center justify-center" @click="refresh">
          <img :class="{loading:pending}" src="/images/icon-dice.svg" alt="">
        </div>
      </div>
    </div>

    <div class="mt-auto mb-5 text-light-cyan font-medium text-sm">
      Challenge by <a class="text-neon-green underline" href="https://www.frontendmentor.io?ref=challenge"
                      target="_blank">Frontend Mentor</a>.
      Coded by <a class="text-neon-green underline" href="mailto:sakhshijan@gmail.com">NullEe</a>.
    </div>
  </main>
</template>

<script setup lang="ts">
import {useAsyncData} from "#imports";
import {$fetch} from "ofetch";

const {data, pending, refresh, error} = await useAsyncData(() => $fetch('https://api.adviceslip.com/advice'), {
  transform: input => JSON.parse(input).slip
})
</script>

<style scoped>
.loading {
  animation: loading 1s infinite;
}


@keyframes loading {
  0% {
    transform: rotate3d(0, 0, 0, 0);
  }
  50% {
    transform: rotate3d(100, 0, 100, 360deg);
  }
  100% {
    transform: rotate3d(0, 0, 0, 0);
  }
}
</style>

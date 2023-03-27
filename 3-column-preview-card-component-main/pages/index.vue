<template>
  <main class="min-h-screen bg-white font-league-spartan flex flex-col items-center justify-center px-5 py-10">
    <div
        class="w-full sm:w-[20rem] md:w-[30rem] lg:w-[57.5rem] bg-gray-50 flex flex-col lg:flex-row overflow-hidden rounded-xl my-auto">
      <div v-for="(item,key) in items" :key="key"
           :class="`${item.color}`"
           class="flex-1 p-12 text-white flex flex-col gap-10"
      >
        <div>
          <img :src="item.image" alt="">
        </div>
        <h1 class="font-big-shoulders-display uppercase text-4xl">{{ item.title }}</h1>
        <p class="text-15 text-white text-opacity-75 font-lexend-deca">{{ item.content }}</p>
        <div class="mt-0 md:mt-12">
          <a href="#"
             class="capitalize learn-more hover:bg-white font-lexend-deca font-light text-white text-opacity-75 px-6 py-3 border-2 border-white rounded-full">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Sedans',
    content: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    color: 'sedans',
    image: '/images/icon-sedans.svg'
  },
  {
    title: 'SUVs',
    content: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    color: 'suvs',
    image: '/images/icon-suvs.svg'
  },
  {
    title: 'Luxury',
    content: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    color: 'luxury',
    image: '/images/icon-luxury.svg'
  }
]
</script>

<style scoped>
.init {
  @apply hover:text-very-dark-cyan hover:text-bright-orange hover:text-dark-cyan;
}

.suvs {
  @apply bg-dark-cyan;
}

.suvs .learn-more {
  @apply hover:text-very-dark-cyan;
}

.luxury {
  @apply bg-very-dark-cyan;
}

.luxury .learn-more {
  @apply hover:text-very-dark-cyan;
}

.sedans {
  @apply bg-bright-orange;
}

.sedans .learn-more {
  @apply hover:text-bright-orange;
}
</style>

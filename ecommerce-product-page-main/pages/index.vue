<template>
  <main
      class="min-h-screen bg-white dark:bg-neutral-900 font-kumbh-sans flex flex-col md:px-3 xl:w-[74rem] mx-auto md:gap-24">
    <nav class="h-20 md:h-28 flex border-b dark:border-neutral-800 items-center select-none">
      <img src="/images/icon-menu.svg" alt="" class="mx-5 block md:hidden cursor-pointer" @click="showSidebar = true">
      <img src="/images/logo.svg" alt="" class="mb-1 dark:invert">

      <div :class="{'hidden-sidebar': !showSidebar}"
           class="md:ml-4 lg:ml-12 h-full md:relative fixed top-0 bottom-0 left-0 md:z-0 z-40 right-0 bg-black bg-opacity-70 z-[60]">
        <ul class="flex h-full md:flex-row flex-col dark:bg-neutral-900 gap-3 md:gap-8 bg-white px-5 w-72 md:w-auto">
          <li class="mt-10 mb-10 md:hidden block cursor-pointer" @click="showSidebar = false">
            <img src="/images/icon-close.svg" alt="">
          </li>
          <li class="hover:text-very-dark-blue dark:hover:text-gray-400 cursor-pointer flex text-very-dark-blue text-lg md:text-base dark:text-gray-100 md:text-dark-grayish-blue items-center border-b-4 border-transparent md:hover:border-c-orange transition font-bold md:font-normal"
              v-for="(item,key) in navItems" :key="key">{{ item }}
          </li>
        </ul>
      </div>

      <div class="ml-auto flex items-center gap-5 md:gap-10 mr-6 md:mr-0">
        <div class="relative">
          <span
              v-if="totalOrders > 0"
              class="absolute bg-c-orange rounded-lg px-1.5 -top-1 -right-2 text-[0.6rem] text-white font-medium z-10">
            {{ totalOrders }}
          </span>
          <img src="/images/icon-cart.svg" @click="showCart = !showCart"
               class="hover:brightness-0 cursor-pointer dark:invert"
               alt="">
          <transition>
            <Cart v-if="showCart"/>
          </transition>
        </div>
        <img @click="showCart = !showCart"
             class="h-8 md:h-14 border-2 hover:border-c-orange rounded-full border-transparent cursor-pointer transition"
             src="/images/image-avatar.png" alt="">
      </div>
    </nav>
    <section class="px-0 lg:px-12 flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 xl:gap-32 pb-10">
      <div class="w-full md:w-1/2 flex flex-col gap-5 lg:gap-10 select-none">
        <div class="relative">
          <div @click="product.images.length - 1 > selectedImage && selectedImage++"
               v-if="product.images.length - 1 > selectedImage"
               class="absolute right-3 h-10 w-10 top-1/2 -translate-y-5 bg-white flex items-center justify-center rounded-full cursor-pointer md:hidden">
            <img src="/images/icon-next.svg" class="scale-75" alt="">
          </div>
          <img @click="fullScreenMode = true" :src="product.images[selectedImage].url"
               class="w-full aspect-square object-cover md:rounded-2xl cursor-pointer" alt="">
          <div
              v-if="selectedImage > 0"
              @click="selectedImage > 0 && selectedImage--"
              class="absolute left-3 h-10 w-10 top-1/2 -translate-y-5 bg-white flex items-center justify-center rounded-full cursor-pointer md:hidden">
            <img src="/images/icon-previous.svg" class="scale-75 mr-1" alt="">
          </div>
        </div>
        <div class="grid-cols-4 gap-3 lg:gap-8 hidden md:grid">
          <div v-for="(image,key) in product.images"
               class="rounded-xl border-2 border-transparent overflow-hidden cursor-pointer"
               :class="{'border-c-orange':selectedImage === key}"
               :key="key" @click="selectedImage = key">
            <img :src="image.thumbnail"
                 class="object-cover hover:opacity-50 aspect-square"
                 :class="{'opacity-50':selectedImage === key}"
                 alt="">
          </div>

        </div>
      </div>
      <div class="w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-6 px-6 md:px-0">
        <span class="uppercase text-c-orange font-bold text-xs md:text-sm tracking-[0.1rem]">{{
            product.company
          }}</span>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl dark:text-gray-300 text-very-dark-blue">{{
            product.title
          }}</h1>
        <p class="text-body text-dark-grayish-blue md:mt-5">{{ product.content }}</p>
        <div class="flex flex-row sm:flex-col sm:items-start items-center md:items-start md:flex-col gap-2">
          <div class="flex items-center gap-5">
            <span class="text-3xl font-bold text-very-dark-blue dark:text-gray-300">
              ${{ (product.price * product.discountPercentage / 100).toFixed(2) }}
            </span>
            <span class="text-lg font-bold bg-c-orange bg-opacity-10 text-c-orange px-2 rounded-md">
            {{ product.discountPercentage }}%
          </span>
          </div>
          <span class="font-bold text-grayish-blue text-lg line-through ml-auto sm:ml-0 md:ml-0 dark:text-neutral-600">
            ${{ product.price.toFixed(2) }}
          </span>
        </div>
        <div class="flex gap-5 mt-4 select-none lg:flex-row flex-col sm:flex-row md:flex-col">
          <div>
            <div
                class="h-14 sm:w-40 md:w-full lg:w-40 w-full bg-light-grayish-blue rounded-lg flex items-center justify-between px-5 dark:bg-neutral-800 dark:text-gray-100">
              <img src="/images/icon-minus.svg" alt="-" class="cursor-pointer"
                   @click="preOrder.qty > 0 && preOrder.qty--">
              <span class="font-bold">{{ preOrder.qty }}</span>
              <img src="/images/icon-plus.svg" alt="+" class="cursor-pointer"
                   @click="preOrder.qty < 100 && preOrder.qty++">
            </div>
          </div>
          <div class="w-full">
            <button
                :disabled="preOrder.qty <= 0"
                @click="addOrder(preOrder.product,preOrder.qty)"
                class="h-14 w-full flex items-center justify-center bg-c-orange rounded-lg font-bold gap-4 px-5 text-white flex-1 shadow-c-orange shadow-2xl hover:opacity-50">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#fff" fill-rule="nonzero"/>
              </svg>
              Add to card
            </button>
          </div>
        </div>
      </div>
    </section>
    <ImageViewer :images="product.images" :index="selectedImage" v-model="fullScreenMode"/>
  </main>
</template>

<script setup lang="ts">
import {ref, useCart} from "#imports";
import {Product} from "~/type/interfaces";
import ImageViewer from "~/components/ImageViewer.vue";
import Cart from "~/components/Cart.vue";

const {addOrder, totalOrders} = useCart()
const navItems = ['Collections', 'Men', 'Woman', 'About', 'Contact']
const product: Product = {
  id: 1,
  title: 'Fall Limited Edition Sneakers',
  company: 'Sneaker Company',
  content: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 250,
  discountPercentage: 50,
  images: [
    {
      url: '/images/image-product-1.jpg',
      thumbnail: '/images/image-product-1-thumbnail.jpg'
    },
    {
      url: '/images/image-product-2.jpg',
      thumbnail: '/images/image-product-2-thumbnail.jpg'
    },
    {
      url: '/images/image-product-3.jpg',
      thumbnail: '/images/image-product-3-thumbnail.jpg'
    },
    {
      url: '/images/image-product-4.jpg',
      thumbnail: '/images/image-product-4-thumbnail.jpg'
    }
  ]
}

const selectedImage = ref(0)
const fullScreenMode = ref(false)
const showCart = ref(false)
const showSidebar = ref(false)
const preOrder = ref({
  product,
  qty: 0,
})


</script>

<style>

body {
  @apply bg-white dark:bg-neutral-900;
}

.v-enter-active, .v-leave-active {
  transition: all 0.1s ease-out;
}


.v-enter-from, .v-leave-to {
  transform: translateY(-20px) scale(0.8);
  opacity: 0;
  @apply origin-top-right xl:origin-top;
}

.hidden-sidebar {
  @apply hidden md:flex;
}
</style>

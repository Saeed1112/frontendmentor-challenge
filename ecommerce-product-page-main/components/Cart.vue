<template>
  <div
      class="absolute z-50 transition dark:bg-neutral-800 duration-100 top-full bg-white shadow-xl rounded-lg w-[23rem] min-h-[15rem] max-h-[24rem] overflow-auto right-[-4.6rem] xl:-right-44 2xl:-right-44 top-12 flex flex-col">
    <h2 class="px-5 font-bold py-5 sticky top-0 bg-white dark:bg-neutral-800 dark:text-gray-100">
      Cart
    </h2>
    <hr class="sticky top-16 dark:border-neutral-700">
    <div v-if="totalOrders <= 0" class="flex-1 flex items-center justify-center">
      <h2 class="font-bold text-body text-dark-grayish-blue">Your cart is empty.</h2>
    </div>
    <div class="px-6 flex flex-col py-6 gap-5 flex-1" v-else>
      <div v-for="item in cart.orders" class="flex gap-4">
        <img class="bg-gray-50 h-12 w-12 object-cover rounded-md" :src="item.product.images[0].thumbnail"
             :alt="item.product.title">
        <div class="flex flex-col text-dark-grayish-blue overflow-hidden">
          <h3 class="truncate">{{ item.product.title }}</h3>
          <div class="flex gap-2">
            <span>
              ${{ (item.product.price * item.product.discountPercentage / 100).toFixed(2) }} × {{ item.qty }}
            </span>
            <span class="font-bold text-black dark:text-gray-50">
              ${{ ((item.product.price * item.product.discountPercentage / 100) * item.qty).toFixed(2) }}
            </span>
          </div>
        </div>
        <div class="flex items-center justify-center cursor-pointer" @click="deleteOrder(item.product.id)">
          <img src="/images/icon-delete.svg" alt="Delete icon">
        </div>
      </div>

      <div class="mt-5">
        <button
            class="w-full h-14 flex items-center justify-center bg-c-orange rounded-lg font-bold gap-4 px-5 text-white flex-1  hover:opacity-50">
          Check out
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {useCart} from "~/composables/useCart";

const {cart, totalOrders, deleteOrder} = useCart()

</script>

<style scoped>

</style>

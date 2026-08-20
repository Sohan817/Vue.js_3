<template>
  <RoundedCart>
    <div
      v-if="$slots.header"
      class="p-4 text-xl font-medium border-b border-gray-200"
    >
      <slot name="header"></slot>
    </div>
    <div :class="{ 'p-4': true, 'border-b border-gray-200': true }">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="p-4">
      <slot name="footer"> </slot>
    </div>
  </RoundedCart>
</template>

<script setup>
import RoundedCart from "@/components/RoundedCart.vue";
</script>

<style></style>

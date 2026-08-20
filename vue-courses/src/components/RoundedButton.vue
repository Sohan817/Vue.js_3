<template>
  <div>
    <button
      @click="$emit('click')"
      class="border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-300"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
defineEmits(["click"]);
</script>

<style></style>

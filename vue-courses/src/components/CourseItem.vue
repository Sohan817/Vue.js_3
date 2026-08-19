<template>
  <div class="bg-white border border-gray-200 rounded-md">
    <h1 class="p-4 text-xl font-medium border-b border-gray-200">
      {{ Title }}
    </h1>
    <p class="p-4 border-b border-gray-200">{{ Price }}</p>
    <p class="p-4">{{ Description }}</p>
    <div class="flex justify-end p-4">
      <button
        @click="$emit('purchase')"
        class="border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-300"
      >
        Purchase
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  Title: String,
  Price: Number,
  Description: String,
});
defineEmits(["purchase"]);
</script>

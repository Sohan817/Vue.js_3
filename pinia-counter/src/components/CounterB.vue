<template>
  <div>
    <h1>Counter B</h1>
    <p>{{ count }}</p>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

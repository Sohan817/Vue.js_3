<template>
  <div>
    <h1>Counter A</h1>
    <p>{{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/useCounterStore";
const counterStore = useCounterStore();
</script>

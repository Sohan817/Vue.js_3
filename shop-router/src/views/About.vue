<template>
  <h1>About our shop with Vue Router</h1>
  <p>{{ name }}</p>
</template>

<script setup>
defineProps({
  name: String,
});
</script>

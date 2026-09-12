<template>
  <h1>Product Details</h1>
  <p>Product ID: {{ route.params.id }}</p>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

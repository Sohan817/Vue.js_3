<template>
  <h1>Welcome to Your shop with Vue Router</h1>
  <hr />
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }}
      <button @click="viewDetails(product.id)">View Details</button>
    </li>
  </ul>
</template>

<script setup>
import { useRouter } from "vue-router";
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Tablet" },
];
const router = useRouter();
function viewDetails(id) {
  router.push({ name: "ProductDetails", params: { id } });
}
</script>

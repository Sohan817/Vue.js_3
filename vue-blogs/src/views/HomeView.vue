<template>
  <h1>Computed Properties</h1>
  <input v-model="search" placeholder="Search names..." />
  <p>{{ search }}</p>
  <div v-for="name in searchedName" :key="name">{{ name }}</div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const names = ref(["John", "Doe", "Sohan", "Rohit", "Ramesh", "Suresh"]);

    const searchedName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { search, names, searchedName };
  },
};
</script>

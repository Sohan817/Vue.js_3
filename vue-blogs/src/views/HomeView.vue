<template>
  <h1>Computed Properties</h1>
  <input v-model="search" placeholder="Search names..." />
  <p>{{ search }}</p>
  <div v-for="name in searchedName" :key="name">{{ name }}</div>
  <button @click="handleWatchStop">Stop Watch</button>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const names = ref(["John", "Doe", "Sohan", "Rohit", "Ramesh", "Suresh"]);

    const stopWatch = watch(search, () => {
      console.log("Search value changed to:");
    });

    const stopWatchEffect = watchEffect(() => {
      console.log("Search value changed to:", search.value);
    });

    const searchedName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleWatchStop = () => {
      stopWatch();
      stopWatchEffect();
    };
    return { search, names, searchedName, handleWatchStop };
  },
};
</script>

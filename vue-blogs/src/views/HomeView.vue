<template>
  <h1>Refs</h1>
  <div>My name is {{ bio1.name }} and I am {{ bio1.age }} years old.</div>
  <button @click="handleClickRef">Click Me</button> <br />
  <h1>Reactive</h1>
  <div>My name is {{ bio2.name }} and I am {{ bio2.age }} years old.</div>
  <button @click="handleClickReactive">Click Me</button> <br />
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "HomeView",
  setup() {
    const bio1 = ref({
      name: "Shohan",
      age: 27,
    });

    const bio2 = reactive({
      name: "Suborna",
      age: 26,
    });
    const handleClickRef = () => {
      bio1.value.age = 30;
    };
    const handleClickReactive = () => {
      bio2.age = 28;
    };
    return {
      bio1,
      bio2,
      handleClickRef,
      handleClickReactive,
    };
  },
};
</script>

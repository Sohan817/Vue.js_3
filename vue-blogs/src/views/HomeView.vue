<template>
  <div ref="divRef" class="home">
    My name is {{ name }} and I am {{ age }} years old.
  </div>
  <button @click="handleClick">Click Me</button> <br />
  <input type="text" v-model="name" /> <br />
  <button @click="age++">Add Age</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    const name = ref("Shohan");
    const age = ref(27);

    const handleClick = () => {
      name.value = "Nadim";
      age.value = 30;
    };
    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>

<template>
  <div ref="divRef" class="home">
    My name is {{ name }} and I am {{ age }} years old.
  </div>
  <button @click="handleClick">Click Me</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    let name = "Shohan";
    let age = 20;
    const divRef = ref(null);
    console.log(divRef, divRef.value); // This will log the DOM element after the component is mounted

    const handleClick = () => {
      console.log(divRef, divRef.value); // This will log the DOM element when the button is clicked
      divRef.value.classList.add("clicked");
      divRef.value.textContent = "Hello Refs"; // This will add a class to the div when the button is clicked
    };
    return {
      name,
      age,
      divRef,
      handleClick,
    };
  },
};
</script>

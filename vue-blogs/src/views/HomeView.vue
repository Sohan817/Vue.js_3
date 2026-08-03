<template>
  <div class="home">My name is {{ name }} and I am {{ age }} years old.</div>
  <button @click="handleClick">Click Me</button>
</template>

<script>
export default {
  name: "HomeView",
  setup() {
    let name = "Shohan";
    let age = 20;
    const handleClick = () => {
      console.log("Button clicked!");
    };
    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>

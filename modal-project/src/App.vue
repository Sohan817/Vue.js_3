<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button v-on:click="HandleClick">Button</button>
  <Modal :header="header" v-bind:text="text" theme="sale" />
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  data() {
    return {
      title: "My First Vue App ):",
      header: "Sign up for giveaways",
      text: "Modal Content",
    };
  },
  components: {
    Modal,
  },
  methods: {
    HandleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ccc;
  display: inline-block;
  padding-bottom: 10px;
}
</style>

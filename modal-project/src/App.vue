<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button v-on:click="HandleClick">Button</button>
  <p>Welcome...</p>
  <button @click.alt="toggleModal">Open Modal(Alt)</button>
  <div v-if="showModal">
    <Modal
      :header="header"
      v-bind:text="text"
      theme="sale"
      @close="toggleModal"
    />
  </div>
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
      showModal: false,
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
    toggleModal() {
      this.showModal = !this.showModal;
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

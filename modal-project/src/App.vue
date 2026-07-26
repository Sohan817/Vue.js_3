<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button v-on:click="HandleClick">Button</button>
  <p>First modal...</p>
  <button @click="toggleModal">Open Modal</button>
  <p>Second modal...</p>
  <button @click.alt="toggleModalTwo">Open Modal(Alt)</button>
  <div to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h1>Sign up for giveaways!</h1>
      <p>Modal Content</p>
      <template v-slot:links>
        <a href="#">Sing Up</a>
        <a href="#">Login</a>
      </template>
    </Modal>
  </div>

  <!-- Second Modal -->

  <teleport to=".modals" v-if="showModalTwo">
    <Modal theme="" @close="toggleModalTwo">
      <h1>Sign up for Newsletters!</h1>
      <p>For the latest updates and offers</p>
      <template v-slot:links>
        <a href="#">Sing Up</a>
        <a href="#">Login</a>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  data() {
    return {
      title: "My First Vue App ):",
      showModal: false,
      showModalTwo: false,
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
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app,
.modals {
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

<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot> Default Links</slot>
      <div class="action">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
.modal h1 {
  color: #03cfb4;
  padding: 0;
  border: none;
}
.modal p {
  font-style: normal;
}
.modal.sale {
  background-color: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}

.modal .action {
  text-align: center;
  margin: 30px 10px 0;
}
.modal .action a {
  color: #333;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  margin: 20px;
}
</style>

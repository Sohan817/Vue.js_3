<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span @click="closeModal" class="close">&times;</span>
      <input type="text" v-model="editAbleTodoText" />
      <button @click="updateTodo(editAbleId)">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["editAbleId", "tasks", "showModal"],
  data() {
    return {
      editAbleTodoText: "",
      editCompleted: null,
      editFavourite: null,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    updateTodo(id) {
      const updatedTask = this.tasks.map((t) =>
        t.id === id
          ? {
              id: id,
              todo: this.editAbleTodoText,
              completed: this.editCompleted,
              favourite: this.editFavourite,
            }
          : t,
      );
      this.$emit("updated-task", updatedTask);
      this.$emit("close");
    },
  },
  watch: {
    editAbleId: {
      immediate: true,

      handler(id) {
        const todoTask = this.tasks.find((t) => t.id === id);

        this.editAbleTodoText = todoTask ? todoTask.todo : "";
        this.editCompleted = todoTask ? todoTask.completed : "";
        this.editFavourite = todoTask ? todoTask.favourite : "";
      },
    },
  },
};
</script>

<style>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>

<template>
  <div id="id01" class="modal">
    <form class="modal-content" action="/action_page.php">
      <div class="container">
        <h1>Delete Todo</h1>
        <p>Are you sure you want to delete this todo?</p>

        <div class="clearfix">
          <button type="button" class="cancelbtn" @click="$emit('close')">
            Cancel
          </button>
          <button
            type="button"
            class="deletebtn"
            @click="deleteTodo(deleteTodoId)"
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["todiId", "showDeleteModal"],
  setup(props, { emit }) {
    const deleteTodoId = ref(null);
    deleteTodoId.value = props.todiId;
    const deleteTodo = async (id) => {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });
      emit("close");
    };
    return { deleteTodo, deleteTodoId };
  },
};
</script>

<style>
.modal {
  justify-content: center;
}
</style>

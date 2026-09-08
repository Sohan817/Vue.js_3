<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <div class="material-icons">delete</div>
      <div class="material-icons">favorite</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
};
</script>

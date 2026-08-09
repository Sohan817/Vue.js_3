<template>
  <div v-if="error">{{ error }}</div>
  <div class="blog">
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.description }}</p>
  </div>
</template>

<script>
import getBlog from "../composables/getBlog.js";
export default {
  props: ["id"],
  setup(props) {
    const { blog, error, load } = getBlog(props.id);
    load();
    return { blog, error };
  },
};
</script>

<style>
.blog {
  padding: 1rem;
  border: 1px solid #ccc;
  margin: 1rem 0;
}
</style>

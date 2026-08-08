<template>
  <div class="single-blog">
    <h3>{{ blog.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["blog"],
  setup(props) {
    const snippet = computed(() => {
      return props.blog.description.substring(0, 20) + "...";
    });
    return { snippet };
  },
};
</script>

<style scoped>
.single-blog {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>

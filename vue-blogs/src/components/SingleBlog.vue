<template>
  <div class="single-blog">
    <router-link :to="{ name: 'Details', params: { id: blog.id } }">
      <h3>{{ blog.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span class="tags" v-for="tag in blog.tags" :key="tag"> #{{ tag }} </span>
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

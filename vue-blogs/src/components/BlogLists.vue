<template>
  <h2>Blog Lists</h2>
  <div class="blogs" v-for="blog in blogs" :key="blog.id">
    <SingleBlog :blog="blog" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SingleBlog from "./SingleBlog.vue";
export default {
  props: ["blogs"],
  components: {
    SingleBlog,
  },
  setup(props) {
    onMounted(() => console.log("Mounted BlogLists.vue"));
    onUnmounted(() => console.log("Unmounted BlogLists.vue"));
    onUpdated(() => console.log("Updated BlogLists.vue"));
  },
};
</script>

<style></style>

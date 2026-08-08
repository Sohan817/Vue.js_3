<template>
  <h2>Blog Lists</h2>
  <div class="blogs" v-for="blog in blogs" :key="blog.id">
    <SingleBlog :blog="blog" />
  </div>
</template>

<script>
import SingleBlog from "./SingleBlog.vue";
export default {
  props: ["blogs"],
  components: {
    SingleBlog,
  },
  setup(props) {
    console.log(props.blogs);
  },
};
</script>

<style></style>

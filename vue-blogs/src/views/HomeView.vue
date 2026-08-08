<template>
  <div class="home">
    <h1>Home</h1>
    <BlogLists v-if="showBlogs" :blogs="blogs" />
    <button @click="showBlogs = !showBlogs">
      {{ showBlogs ? "Hide Blogs" : "Show Blogs" }}
    </button>
    <button @click="blogs.pop()">Remove Last Blog</button>
  </div>
</template>

<script>
import BlogLists from "../components/BlogLists.vue";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    BlogLists,
  },
  setup() {
    const blogs = ref([
      {
        title: "Blog 1",
        content:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: 1,
      },
      {
        title: "Blog 2",
        content:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: 2,
      },
      {
        title: "Blog 3",
        content:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: 3,
      },
    ]);
    const showBlogs = ref(true);
    return { blogs, showBlogs };
  },
};
</script>

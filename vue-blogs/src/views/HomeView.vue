<template>
  <BlogLists :blogs="blogs" />
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
    return { blogs };
  },
};
</script>

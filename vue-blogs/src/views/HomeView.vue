<template>
  <div class="home">
    <h1>Home</h1>
    <div class="error">
      {{ error }}
    </div>
    <div class="loading" v-if="blogs.length === 0 && !error">Loading...</div>
    <div class="blogs" v-else>
      <BlogLists v-if="showBlogs" :blogs="blogs" />
    </div>
    <button @click="showBlogs = !showBlogs">
      {{ showBlogs ? "Hide Blogs" : "Show Blogs" }}
    </button>
    <button @click="blogs.pop()">Remove Last Blog</button>
  </div>
</template>

<script>
import BlogLists from "../components/BlogLists.vue";
import getBlogs from "../composables/getBlogs";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    BlogLists,
  },
  setup() {
    const { blogs, error, load } = getBlogs();
    load();
    const showBlogs = ref(true);

    return { blogs, showBlogs, error };
  },
};
</script>

<style>
.loading {
  color: #666;
  font-style: italic;
}
.error {
  color: #d32f2f;
}
.home {
  padding: 1rem;
}
.blogs {
  display: flex;
  flex-direction: column;
  background-color: rgb(184, 184, 196);
}
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>

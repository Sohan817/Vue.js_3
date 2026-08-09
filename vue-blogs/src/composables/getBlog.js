import { ref } from "vue";
const getBlog = (id) => {
  const blog = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      const data = await fetch(`http://localhost:3000/blogs/${id}`);
      if (!data.ok) {
        throw Error("No blog available");
      }
      blog.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { blog, error, load };
};

export default getBlog;

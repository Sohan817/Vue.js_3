import { ref } from "vue";
const getPost = () => {
  const blogs = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/blogs");
      if (!data.ok) {
        throw Error("No data available");
      }
      blogs.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { blogs, error, load };
};

export default getPost;

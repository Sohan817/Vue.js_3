const app = Vue.createApp({
  //Data,function
  //template: "<h1>I am the vue template</h1>",
  data() {
    return {
      showBooks: true,
      bookName: "The Alchemist",
      author: "Paulo Coelho",
      age: 1988,
    };
  },
  methods: {
    changeTitle(title) {
      this.bookName = title;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});
app.mount("#app");

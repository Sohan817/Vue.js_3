const app = Vue.createApp({
  //Data,function
  //template: "<h1>I am the vue template</h1>",
  data() {
    return {
      showBooks: true,
      // bookName: "The Alchemist",
      // author: "Paulo Coelho",
      // age: 1988,
      // x: 0,
      // y: 0,
      books: [
        { name: "The Alchemist", author: "Paulo Coelho" },
        { name: "1984", author: "George Orwell" },
        { name: "To Kill a Mockingbird", author: "Harper Lee" },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.bookName = title;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    // handleMouseEvent(e, data) {
    //   console.log(e);
    //   if (data) {
    //     console.log(data);
    //   }
    // },
    // handleMouseMove(e) {
    //   this.x = e.offsetX;
    //   this.y = e.offsetY;
    // },
  },
});
app.mount("#app");

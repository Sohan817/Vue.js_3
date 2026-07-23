const app = Vue.createApp({
  //Data,function
  //template: "<h1>I am the vue template</h1>",
  data() {
    return {
      url: "https://www.youtube.com",
      showBooks: true,
      // bookName: "The Alchemist",
      // author: "Paulo Coelho",
      // age: 1988,
      // x: 0,
      // y: 0,
      books: [
        {
          name: "The Alchemist",
          author: "Paulo Coelho",
          image: "assets/The Alchemist.jpg",
          isFavorite: true,
        },
        {
          name: "1984",
          author: "George Orwell",
          image: "assets/1984.jpg",
          isFavorite: false,
        },
        {
          name: "To Kill a Mockingbird",
          author: "Harper Lee",
          image: "assets/To kill a mockingbird.jpg",
          isFavorite: true,
        },
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

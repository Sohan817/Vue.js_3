const app = Vue.createApp({
  data() {
    return {
      increment: 0,
    };
  },
  methods: {
    increaseValue() {
      this.increment += 1;
    },
    DecreaseValue() {
      this.increment -= 1;
    },
  },
});

app.mount("#app");

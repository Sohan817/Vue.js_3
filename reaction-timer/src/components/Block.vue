<template>
  <div class="block" v-if="isShowing" @click="stopTimer">Click me!</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      isShowing: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShowing = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      console.log(`Reaction time: ${this.reactionTime} ms`);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 10px;
  background-color: #27ae60;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>

<template>
  <p>Your reaction time is {{ score }} ms</p>
  <h4 class="rank-block">{{ rank }}</h4>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Excellent!";
    } else if (this.score < 400) {
      this.rank = "Good!";
    } else if (this.score < 600) {
      this.rank = "Average!";
    } else {
      this.rank = "Needs Improvement!";
    }
  },
};
</script>

<style>
.rank-block {
  font-size: 1.4em;
  color: #21e7e7;
  font-weight: bold;
}
</style>

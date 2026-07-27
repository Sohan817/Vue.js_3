<template>
  <div class="block" v-if="isShowing">Click me!</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      isShowing: false,
    };
  },
  mounted() {
    console.log("mounted");
    setTimeout(() => {
      this.isShowing = true;
    }, this.delay);
  },
  updated() {
    console.log("updated");
  },
  unmounted() {
    console.log("unmounted");
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

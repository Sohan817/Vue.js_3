<template>
  <div class="block">Click me!</div>
</template>

<script>
export default {
  props: ["delay"],
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

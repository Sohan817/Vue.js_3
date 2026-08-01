<template>
  <h1>Job Details</h1>
  <p>Jobs detail id: {{ jobId }}</p>
</template>

<script>
export default {
  data() {
    return {
      jobId: this.$route.params.id,
    };
  },
};
</script>

<style></style>

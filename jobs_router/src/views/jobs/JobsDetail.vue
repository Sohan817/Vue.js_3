<template>
  <h1>{{ job.title }}</h1>
  <p>{{ job.company }}</p>
  <p>{{ job.location }}</p>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  // data() {
  //   return {
  //     jobId: this.$route.params.id,
  //   };
  // },
  mouunted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style></style>

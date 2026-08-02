<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.company }}</p>
    <p>{{ job.location }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
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
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style></style>

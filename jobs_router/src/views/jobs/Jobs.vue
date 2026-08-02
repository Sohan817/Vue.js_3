<template>
  <h1>Job Listings</h1>
  <div v-for="job in jobs" :key="job.id" class="jobs">
    <router-link :to="{ name: 'jobsdetail', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch(" http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => (this.jobs = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style>
.jobs h2 {
  color: #f4f4f4;
  margin: 10px auto;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  cursor: pointer;
  color: #2c3e50;
}
.jobs h2:hover {
  background-color: #ddd;
}
.job a {
  text-decoration: none;
}
</style>

<template>
  <h1>Job Listings</h1>
  <div v-for="job in jobs" :key="job.id" class="jobs">
    <router-link :to="{ name: 'jobsdetail', params: { id: job.id } }">
      <h2>{{ job.company }} - {{ job.title }} ({{ job.location }})</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Frontend Developer",
          company: "Tech Corp",
          location: "New York",
        },
        {
          id: 2,
          title: "Backend Developer",
          company: "Web Solutions",
          location: "San Francisco",
        },
        {
          id: 3,
          title: "Full Stack Developer",
          company: "Innovatech",
          location: "Austin",
        },
      ],
    };
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

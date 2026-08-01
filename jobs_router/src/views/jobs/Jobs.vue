<template>
  <h1>Job Listings</h1>
  <div v-for="job in jobs" :key="job.id">
    {{ job.company }} - {{ job.title }} ({{ job.location }})
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

<style></style>

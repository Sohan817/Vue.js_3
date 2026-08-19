<template>
  <div class="p-4 space-y-8">
    <h1 class="text-4xl font-medium">Course Hub</h1>
    <h2 class="text-2xl font-medium">All Courses</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <CourseItem
        v-for="i in 3"
        :key="i"
        Title="Vue Courses"
        Price="9.9"
        Description="0 to Hero vue course"
      ></CourseItem>
    </div>
    <h2 class="text-2xl font-medium">Your Courses</h2>
  </div>
</template>

<script setup>
import CourseItem from "./components/CourseItem.vue";
</script>

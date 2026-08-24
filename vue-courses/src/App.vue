<template>
  <div class="p-4 space-y-8">
    <h1 class="text-4xl font-medium">Course Hub</h1>
    <h2 class="text-2xl font-medium">All Courses</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <CourseItem
        v-for="course in courses"
        :key="course.id"
        :Title="course.title"
        :Price="course.price"
        :Description="course.description"
        @click="console.log('button clicked')"
      ></CourseItem>
    </div>
    <h2 class="text-2xl font-medium">Your Courses</h2>
    <BookingItem v-for="i in 2" :key="i"></BookingItem>
  </div>
</template>

<script setup>
import CourseItem from "./components/CourseItem.vue";
import { ref } from "vue";
import BookingItem from "./components/BookingItem.vue";
const error = ref("");
const courses = ref([]);
const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/courses");
    courses.value = await response.json();
    if (!response.ok) {
      throw new Error("Faild to load data");
    }
    console.log(datas);
  } catch (e) {
    error.value = e.message;
  }
};
fetchData();
</script>

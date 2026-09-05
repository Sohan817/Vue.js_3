<template>
  <div v-if="error">Failed to load data</div>
  <div v-else-if="loading"><SkeletonCourses v-for="i in 4" :key="i" /></div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <CourseItem
      v-for="course in courses"
      :key="course.id"
      :Title="course.title"
      :Price="course.price"
      :Description="course.description"
      @click="bookCourses(course)"
    ></CourseItem>
  </div>
</template>

<script setup>
import CourseItem from "./CourseItem.vue";
import { onMounted, ref } from "vue";
import SkeletonCourses from "./SkeletonCourses.vue";

import useBooking from "@/Composibles/useBooking.js";
const { bookCourses } = useBooking();

const courses = ref([]);
const loading = ref(false);
const error = ref("");

//Fetch data from database
const fetchData = async () => {
  loading.value = true;
  try {
    const response = await fetch("http://localhost:3000/courses");
    courses.value = await response.json();
    if (!response.ok) {
      throw new Error("Faild to load data");
    }
    loading.value = false;
  } catch (e) {
    error.value = e.message;
  }
};

onMounted(() => {
  fetchData();
});
</script>

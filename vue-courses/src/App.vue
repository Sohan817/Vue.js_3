<template>
  <div class="p-4 space-y-8">
    <h1 class="text-4xl font-medium">Course Hub</h1>
    <h2 class="text-2xl font-medium">All Courses</h2>
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
    <h2 class="text-2xl font-medium">Your Courses</h2>
    <BookingItem v-for="i in 2" :key="i"></BookingItem>
  </div>
</template>

<script setup>
import CourseItem from "./components/CourseItem.vue";
import { onMounted, ref } from "vue";
import BookingItem from "./components/BookingItem.vue";
import SkeletonCourses from "./components/SkeletonCourses.vue";
const error = ref("");
const courses = ref([]);
const loading = ref(false);

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

//Booking courses
const bookCourses = async (course) => {
  const bookedCourses = {
    id: Date.now().toString(),
    title: course.title,
    price: course.price,
    description: course.description,
    status: "pending",
  };
  try {
    const response = await fetch(" http://localhost:3000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookedCourses),
    });
    if (!response.ok) {
      throw new Error("Faild to load data");
    }
  } catch (e) {
    error.value = e.message;
  }
};
onMounted(() => {
  fetchData();
});
</script>

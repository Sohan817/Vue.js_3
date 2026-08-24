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
    <div v-if="loading"><SceletonBookingCourses /></div>
    <BookingItem
      v-else
      v-for="booking in bookings"
      :key="booking.id"
      :bookings="booking"
      @removeBooking="removeBooking(booking.id)"
    ></BookingItem>
  </div>
</template>

<script setup>
import CourseItem from "./components/CourseItem.vue";
import { onMounted, ref } from "vue";
import BookingItem from "./components/BookingItem.vue";
import SkeletonCourses from "./components/SkeletonCourses.vue";
import SceletonBookingCourses from "./components/SceletonBookingCourses.vue";
const error = ref("");
const courses = ref([]);
const loading = ref(false);
const bookings = ref([]);

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
    id: course.id,
    title: course.title,
    price: course.price,
    description: course.description,
    status: "pending",
  };
  if (bookings.value.some((b) => b.id === course.id)) {
    alert("This course already purchased");
    return;
  }
  bookings.value.push(bookedCourses);
  try {
    const response = await fetch(" http://localhost:3000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...bookedCourses, status: "confirmed" }),
    });
    if (response.ok) {
      const index = bookings.value.findIndex((b) => b.id === bookedCourses.id);
      bookings.value[index] = await response.json();
    } else {
      bookings.value = bookings.value.filter((b) => b.id != bookedCourses.id);
      return;
    }
  } catch (e) {
    console.log(e);
    bookings.value = bookings.value.filter((b) => b.id != bookedCourses.id);
  }
};
//Fetch data from database
const fetchBookingData = async () => {
  loading.value = true;
  try {
    const response = await fetch("http://localhost:3000/bookings");
    bookings.value = await response.json();
    if (!response.ok) {
      throw new Error("Faild to load data");
    }
    loading.value = false;
  } catch (e) {
    error.value = e.message;
  }
};

//Remove booking items
const removeBooking = async (courseId) => {
  const index = bookings.value.findIndex((b) => b.id === courseId);
  const toBeDeleted = bookings.value[index];
  bookings.value.splice(index, 1);
  try {
    const response = await fetch(`http://localhost:3000/bookings/${courseId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Couldn't delete");
    }
  } catch (e) {
    console.error(e);
    bookings.value.splice(index, 0, toBeDeleted);
  }
};
onMounted(() => {
  fetchData();
  fetchBookingData();
});
</script>

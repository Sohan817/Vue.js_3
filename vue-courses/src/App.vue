<template>
  <div class="p-4 space-y-8">
    <h1 class="text-4xl font-medium">Course Hub</h1>
    <h2 class="text-2xl font-medium">All Courses</h2>
    <CourseSection @register="bookCourses($event)"></CourseSection>
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
import { onMounted, ref } from "vue";
import BookingItem from "./components/BookingItem.vue";
import SceletonBookingCourses from "./components/SceletonBookingCourses.vue";
import CourseSection from "./components/CourseSection.vue";
import useBooking from "./Composibles/useBooking.js";
const { bookings, loading, error, fetchBookingData } = useBooking();

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
  fetchBookingData();
});
</script>

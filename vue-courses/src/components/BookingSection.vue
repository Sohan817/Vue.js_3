<template>
  <div v-if="loading"><SceletonBookingCourses /></div>
  <BookingItem
    v-else
    v-for="booking in bookings"
    :key="booking.id"
    :bookings="booking"
    @removeBooking="removeBooking(booking.id)"
  ></BookingItem>
</template>

<script setup>
import { onMounted } from "vue";
import BookingItem from "./BookingItem.vue";
import SceletonBookingCourses from "./SceletonBookingCourses.vue";
import useBooking from "@/Composibles/useBooking.js";
const { bookings, loading, fetchBookingData, removeBooking } = useBooking();
onMounted(() => {
  fetchBookingData();
});
</script>

<style></style>

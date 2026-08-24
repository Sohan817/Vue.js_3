<template>
  <CardSection class="p-4">
    <div class="flex justify-between items-center">
      <div>{{ bookings.title }}</div>
      <div>{{ bookings.status }}</div>
      <RoundedButton @click="$emit('removeBooking')" variant="danger"
        >Remove</RoundedButton
      >
    </div>
  </CardSection>
</template>

<script setup>
import CardSection from "./CardSection.vue";
import RoundedButton from "./RoundedButton.vue";
defineProps({
  bookings: {
    type: Object,
  },
});
defineEmits(["removeBooking"]);
</script>

<style></style>

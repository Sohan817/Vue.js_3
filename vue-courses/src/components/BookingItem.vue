<template>
  <CardSection class="p-4">
    <div class="flex justify-between items-center">
      <div>{{ bookings.title }}</div>
      <div>
        <component :is="statusIcon" />
      </div>
      <RoundedButton @click="$emit('removeBooking')" variant="danger"
        >Remove</RoundedButton
      >
    </div>
  </CardSection>
</template>

<script setup>
import { computed } from "vue";
import CardSection from "./CardSection.vue";
import RoundedButton from "./RoundedButton.vue";
import { RefreshCcw, Check } from "@lucide/vue";
const { bookings } = defineProps({
  bookings: {
    type: Object,
  },
});
defineEmits(["removeBooking"]);
const pending = computed(() => bookings.status === "pending");
const statusIcon = computed(() => (pending.value ? RefreshCcw : Check));
</script>

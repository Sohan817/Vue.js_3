<template>
  <CardSection class="p-4">
    <div class="flex justify-between items-center">
      <div>Vue Courses</div>
      <RoundedButton @click="console.log('reported')">Report</RoundedButton>
    </div>
  </CardSection>
</template>

<script setup>
import CardSection from "./CardSection.vue";
import RoundedButton from "./RoundedButton.vue";
</script>

<style></style>

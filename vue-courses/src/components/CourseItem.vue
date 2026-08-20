<template>
  <CardSection>
    <template #header>
      {{ Title }}
    </template>
    <template #default>{{ Price }}</template>
    <template #footer>
      <p class="p-4">{{ Description }}</p>
      <div class="flex justify-end p-4">
        <RoundedButton>Purchase</RoundedButton>
      </div>
    </template>
  </CardSection>
</template>

<script setup>
import CardSection from "@/components/CardSection.vue";
import RoundedButton from "./RoundedButton.vue";
defineProps({
  Title: String,
  Price: Number,
  Description: String,
});
</script>

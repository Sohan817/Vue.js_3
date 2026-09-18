<template>
  <button
    @click="$emit('click')"
    :class="{
      'p-4 border-b-2': true,
      'border-transparent': !isActive,
      'border-b-blue-500 text-blue-500': isActive,
    }"
  >
    {{ tab.label }}
  </button>
</template>
<script setup>
import { Tab } from "@/types";
import { computed } from "vue";

const isActive = computed(() => props.currentTab === props.tab.key);
const props = defineProps({
  currentTab: String,
  tab: Tab,
});
defineEmits(["click"]);
</script>

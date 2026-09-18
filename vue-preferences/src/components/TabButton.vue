<template>{{ tab.label }}</template>
<script setup>
import { Tab } from "@/types";

defineProps({
  currentTab: String,
  tab: Tab,
});
defineEmits(["click"]);
</script>

<template>
  <div class="mx-w-2xl mx-auto px-4">
    <nav
      class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4"
    >
      <ul class="flex flex-warp -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabButton
            @click="currentTab = tab.key"
            :tab="tab"
            :current-tab="currentTab"
          ></TabButton>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TabButton from "@/components/TabButton.vue";
const currentTab = ref("General");
const tabs = [
  {
    key: "General",
    label: "General",
  },
  {
    key: "Notification",
    label: "Notification",
  },
  {
    key: "Privacy",
    label: "Privacy",
  },
];
</script>

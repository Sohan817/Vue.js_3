<template>
  <div class="mx-w-2xl mx-auto px-4">
    <nav
      class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4"
    >
      <ul class="flex justify-center flex-warp -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabButton
            @click="currentTab = tab.key"
            :tab="tab"
            :current-tab="currentTab"
          ></TabButton>
        </li>
      </ul>
    </nav>
    <component :is="currentActiveComponent"></component>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import TabButton from "@/components/TabButton.vue";
import GeneralSetting from "@/components/GeneralSetting.vue";
import NotificationSetting from "@/components/NotificationSetting.vue";
import PrivacySetting from "@/components/PrivacySetting.vue";
const currentTab = ref("General");
const tabs = [
  {
    key: "General",
    label: "General",
    component: GeneralSetting,
  },
  {
    key: "Notification",
    label: "Notification",
    component: NotificationSetting,
  },
  {
    key: "Privacy",
    label: "Privacy",
    component: PrivacySetting,
  },
];
const currentActiveComponent = computed(() => {
  return tabs.find((tab) => tab.key === currentTab.value).component;
});
</script>

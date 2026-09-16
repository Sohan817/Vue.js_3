<template>
  <h1>Login</h1>
  <input type="text" placeholder="Username" v-model="username" />
  <button @click="login">Login</button>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { checkLogin } from "../router/index.js";
const router = useRouter();
const username = ref("");
function login() {
  if (username.value.toLocaleLowerCase() === "admin") {
    checkLogin();
    router.push({ name: "Admin" });
  } else {
    alert("Wrong credentials");
    router.push({ name: "Login" });
  }
}
</script>

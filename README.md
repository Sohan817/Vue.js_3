# Vue.js 3 Learning

> A practical roadmap to mastering Vue.js 3 from beginner to advanced.

---

# Table of Contents

- Introduction
- Prerequisites
- Development Environment
- Vue Fundamentals
- Components
- Reactivity
- Composition API
- Routing
- State Management
- API Integration
- Forms & Validation
- Performance Optimization
- Testing
- Deployment
- Recommended Project Roadmap
- Learning Resources

---

# Introduction

Vue.js is a progressive JavaScript framework used to build interactive user interfaces and Single Page Applications (SPAs).

Vue 3 introduces:

- ⚡ Better performance
- 🎯 Composition API
- 📦 Smaller bundle size
- 🛠 Improved TypeScript support
- 📱 Better developer experience

Official Website:

https://vuejs.org/

---

# Prerequisites

Before learning Vue, you should know:

- HTML5
- CSS3
- JavaScript (ES6+)

Recommended JavaScript topics:

- Variables
- Functions
- Objects
- Arrays
- Destructuring
- Arrow functions
- Promises
- Async/Await
- Modules
- DOM Manipulation

---

# Development Environment

## Install Node.js

Download:

https://nodejs.org/

Verify installation

```bash
node -v
npm -v
```

---

## Install VS Code

Recommended Extensions:

- Vue - Official (Volar)
- ESLint
- Prettier
- GitLens

---

## Create a Vue Project

Using Vite

```bash
npm create vue@latest
```

or

```bash
npm create vite@latest
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Build production

```bash
npm run build
```

---

# Vue Fundamentals

Learn these topics first.

## Templates

```vue
<template>
  <h1>Hello Vue</h1>
</template>
```

---

## Data Binding

```vue
<p>{{ message }}</p>
```

---

## Attribute Binding

```vue
<img :src="imageUrl" />
```

---

## Event Handling

```vue
<button @click="increment">
  Click
</button>
```

---

## Conditional Rendering

```vue
<p v-if="loggedIn">Welcome</p>

<p v-else>Please login</p>
```

---

## List Rendering

```vue
<li v-for="user in users" :key="user.id">
  {{ user.name }}
</li>
```

---

## Computed Properties

```javascript
const fullName = computed(() => {
  return firstName.value + " " + lastName.value
})
```

---

## Watchers

```javascript
watch(search, () => {
  console.log(search.value)
})
```

---

# Components

Topics:

- Creating components
- Registering components
- Props
- Emits
- Slots
- Dynamic Components
- Teleport
- Suspense

Example

```vue
<script setup>
defineProps({
  title: String
})
</script>

<template>
  <h2>{{ title }}</h2>
</template>
```

---

# Reactivity

Learn:

- ref()
- reactive()
- readonly()
- computed()
- watch()
- watchEffect()

Example

```javascript
const count = ref(0)

count.value++
```

---

# Composition API

Core APIs

```javascript
import {
    ref,
    reactive,
    computed,
    watch,
    onMounted
} from "vue"
```

Lifecycle Hooks

- onMounted
- onUnmounted
- onUpdated
- onBeforeMount
- onBeforeUnmount

Example

```javascript
onMounted(() => {
    console.log("Mounted")
})
```

---

# Routing

Install Vue Router

```bash
npm install vue-router
```

Topics

- Routes
- Nested Routes
- Dynamic Routes
- Navigation Guards
- Route Params
- Query Params

---

# State Management

## Pinia

Install

```bash
npm install pinia
```

Create Store

```javascript
export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0
    })
})
```

Topics

- State
- Actions
- Getters
- Persisted State

---

# API Integration

Use Fetch

```javascript
const response = await fetch(url)
const data = await response.json()
```

Or Axios

```bash
npm install axios
```

```javascript
const { data } = await axios.get("/users")
```

Topics

- GET
- POST
- PUT
- DELETE
- Error Handling
- Loading States

---

# Forms & Validation

Topics

- v-model
- Form Validation
- Custom Validation
- vee-validate
- yup

Example

```vue
<input v-model="username">
```

---

# Performance Optimization

Learn

- Lazy Loading
- Code Splitting
- Async Components
- Memoization
- Virtual Lists
- KeepAlive
- Suspense

---

# Testing

Install Vitest

```bash
npm install -D vitest
```

Component Testing

- Vitest
- Vue Test Utils

E2E Testing

- Cypress
- Playwright

---

# Deployment

Popular Platforms

- Vercel
- Netlify
- Cloudflare Pages
- Firebase Hosting

Build

```bash
npm run build
```

Preview

```bash
npm run preview
```

---

# Recommended Project Roadmap

## Beginner

- Counter App
- Todo App
- Notes App
- Calculator
- Weather App

---

## Intermediate

- Movie Search
- Blog
- Authentication
- Dashboard
- Expense Tracker

---

## Advanced

- E-Commerce
- Chat Application
- Kanban Board
- CMS Dashboard
- Admin Panel

---

# Suggested Folder Structure

```
src/
│
├── assets/
├── components/
├── composables/
├── layouts/
├── pages/
├── router/
├── stores/
├── services/
├── utils/
├── App.vue
└── main.js
```

---

# Best Practices

- Keep components small
- Use Composition API
- Reuse composables
- Use Pinia instead of prop drilling
- Prefer computed over watchers when possible
- Keep business logic outside components
- Use TypeScript for large projects
- Follow Vue Style Guide

---

# Learning Checklist

## Beginner

- [ ] Install Vue
- [ ] Templates
- [ ] Directives
- [ ] Components
- [ ] Props
- [ ] Events
- [ ] Lists
- [ ] Forms
- [ ] Computed
- [ ] Watch

## Intermediate

- [ ] Composition API
- [ ] Router
- [ ] Pinia
- [ ] REST API
- [ ] Authentication
- [ ] Reusable Components
- [ ] Composables

## Advanced

- [ ] SSR
- [ ] Nuxt 3
- [ ] Performance
- [ ] Testing
- [ ] TypeScript
- [ ] CI/CD
- [ ] Deployment

---

# Recommended Ecosystem

| Tool | Purpose |
|-------|----------|
| Vue Router | Routing |
| Pinia | State Management |
| Axios | HTTP Requests |
| Vite | Build Tool |
| Vitest | Unit Testing |
| Playwright | E2E Testing |
| Vue Devtools | Debugging |
| ESLint | Code Quality |
| Prettier | Formatting |

---

# Learning Resources

## Official

- https://vuejs.org/
- https://router.vuejs.org/
- https://pinia.vuejs.org/
- https://vitejs.dev/

## YouTube
- Net Ninja


## Practice

- Frontend Mentor
- Codewars
- LeetCode
- DevChallenges

---

# Final Goal

After completing this roadmap, you should be able to:

- ✅ Build modern Vue.js 3 applications
- ✅ Create reusable components
- ✅ Manage application state with Pinia
- ✅ Consume REST APIs
- ✅ Build scalable projects
- ✅ Write clean Composition API code
- ✅ Test Vue applications
- ✅ Deploy production-ready applications

---

Happy Coding! 🚀

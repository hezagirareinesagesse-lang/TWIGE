<template>
  <NavBar />
  <router-view />
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
const isActive = ref(false)
</script>

<style scoped>

</style>
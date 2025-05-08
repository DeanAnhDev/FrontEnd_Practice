<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="pt-30">
      <router-view />
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
</script>

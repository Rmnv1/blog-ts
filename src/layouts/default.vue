<script setup lang="ts">
  import { Header, Footer } from '@/components'
</script>

<template>
  <div class="layout-default">
    <Header />
    <div class="layout-wrapper">
      <main class="main">
        <RouterView />
      </main>
    </div>
    <Footer />
  </div>
</template>

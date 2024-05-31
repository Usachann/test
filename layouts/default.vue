<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/app/Header.vue";
</script>

<style scoped>
body {
  position: relative;
  overflow-x: hidden;
  @media screen and (min-width: 768px) {
    overflow-x: auto;
  }
}
.main {
  padding: 20px;
  min-height: calc(100vh - 80px);
}
</style>

<template>
  <div class="content">
    <TopNav />
    <RouterView />
    <BottomNav />
  </div>
</template>

<script setup>
import TopNav from './components/TopNav.vue';
import BottomNav from './components/BottomNav.vue';

</script>

<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 0.5rem;
}
</style>

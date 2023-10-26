<template>
  <div class="content">
    <NavMenu />
    <RouterView />
    <!-- <BottomNav /> -->
  </div>
</template>

<script setup>
import NavMenu from './components/NavMenu.vue';

</script>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: var(--xs) var(--xs) 0 var(--xs);
}
</style>

<template>
  <div class="content">
    <NavMenu />
    <RouterView />
  </div>
</template>

<script setup>
import NavMenu from './components/NavMenu.vue';

</script>

<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: $s $s 0 $s;
}
</style>

<script setup>
</script>

<template>
  <main>
    Home
    <br>
    <h1 class="rob">This is a font test</h1>
    <h1 class="rob-ser">This is a font test</h1>
    <h1 class="tang">This is a font test</h1>
    <button class="btn">normal</button>
    <button class="special">scoped</button>
  </main>
</template>

<style lang="scss" scoped>
.rob {
  font-family: $roboto;
}

.special {
  background-color: $light-blue;
}
</style>
<template>
    <nav class="top-nav">
        <RouterLink to="/about">
            <img class="icon" src="@/assets/icons/icon-about.svg" alt="menu-icon-about">
        </RouterLink>
        <RouterLink to="/settings">
            <img class="icon" src="@/assets/icons/icon-settings.svg" alt="menu-icon-settings">
        </RouterLink>
    </nav>
</template>

<script setup>
// IMPORTS:
import { RouterLink } from 'vue-router'

// STATE:

// FUNCTIONS:

</script>

<style lang="scss" scoped>
.top-nav {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    padding: 16px;
    display: flex;
    justify-content: space-between;

    a {
        display: contents;

        img {
            width: 15vw;
            max-width: 3rem;
        }
    }
}
</style>
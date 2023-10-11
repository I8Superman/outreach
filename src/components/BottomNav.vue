<template>
    <nav class="bottom-nav">
        <RouterLink to="/statistics">
            <img class="icon" src="@/assets/icons/icon-statistics.svg" alt="menu-icon-statistics">
        </RouterLink>
        <RouterLink to="/contacts">
            <img class="icon" src="@/assets/icons/icon-contacts.svg" alt="menu-icon-constacts">
        </RouterLink>
        <RouterLink to="/add-contact">
            <img class="icon" src="@/assets/icons/icon-add-contact.svg" alt="menu-icon-add-contact">
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
.bottom-nav {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: $s16;
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
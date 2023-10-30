<template>
    <nav class="nav top-nav">
        <RouterLink class="link" to="/about">
            <img class="icon" :class="{ dark: !isCallView }" src="@/assets/icons/icon-about.svg" alt="menu-icon-about">
        </RouterLink>
        <RouterLink class="link" to="/settings">
            <img class="icon" :class="{ dark: !isCallView }" src="@/assets/icons/icon-settings.svg"
                alt="menu-icon-settings">
        </RouterLink>
    </nav>
    <nav class="nav bottom-nav">
        <RouterLink class="link" to="/statistics">
            <img class="icon" :class="{ dark: !isCallView }" src="@/assets/icons/icon-statistics.svg"
                alt="menu-icon-statistics">
        </RouterLink>
        <RouterLink class="link" to="/contacts">
            <img class="icon" :class="{ dark: !isCallView }" src="@/assets/icons/icon-contacts.svg"
                alt="menu-icon-constacts">
        </RouterLink>
        <RouterLink class="link" to="/add-contact">
            <img class="icon" :class="{ dark: !isCallView }" src="@/assets/icons/icon-add-contact.svg"
                alt="menu-icon-add-contact">
        </RouterLink>
    </nav>
</template>

<script setup>
// IMPORTS:
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

// STATE:
const isCallView = ref(true)

// FUNCTIONS:
watch(() => route.path, (getPath) => { // Watch the route to change color on nav icons
    getPath === '/' ? isCallView.value = true : isCallView.value = false
})
</script>

<style scoped>
.nav {
    position: absolute;
    width: 100%;
    pointer-events: none;
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    /* Using the semantic a tag stopped working with nesting all of a sudden!?? */
    .link {
        display: contents;
        pointer-events: auto;

        .icon {
            width: 12vw;
            max-width: 3rem;
            transition: all 0.3s;
        }

        /* .dark applied to icons when not on home path: */
        .dark {
            filter: invert(55%) sepia(0%) saturate(0%) hue-rotate(24deg) brightness(96%) contrast(88%);
        }
    }
}

.top-nav {
    left: 0;
    top: 0;
}

.bottom-nav {
    left: 0;
    bottom: 0;
}
</style>
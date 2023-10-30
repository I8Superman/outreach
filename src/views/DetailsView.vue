<template>
    <div class="contact-details view">
        <div class="details-container">
            <div class="subpage-icons">
                <RouterLink class="link" to="/contacts">
                    <img class="icon" src="@/assets/icons/icon-back-arrow.svg" alt="menu-icon-back-arrow">
                </RouterLink>
                <RouterLink class="link" to="/edit-contact">
                    <img class="icon" src="@/assets/icons/icon-edit.svg" alt="menu-icon-edit">
                </RouterLink>
            </div>
            <h2 class="name">Bubba D</h2>
            <h3 class="phone">+4560803312</h3>
            <p class="notes">Long hair and beard. Deep voice. Plays in a rock band.</p>
            <h3 class="newcomer">Newcomer</h3>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    id: String
})

onMounted(() => {
    console.log(props.id)
})
</script>

<style lang="scss" scoped>
.details-container {
    padding: 0 $ml 0 $ml;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $xl;

    .subpage-icons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .link {
            display: contents;

            .icon {
                height: 8vw;
            }
        }
    }

    .newcomer {
        color: rgb(56, 241, 56);
        font-weight: 700;
    }

    .phone {
        color: $grey;
    }
}
</style>
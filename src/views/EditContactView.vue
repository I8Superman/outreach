<template>
    <div class="edit-contact view">
        <div class="subpage-icons">
            <!-- First link is not a router link, but a div which programmatically goes back to the previous page. Not sure how to do that in a RouterLink? -->
            <div class="link" @click="$router.go(-1)">
                <img class="icon" src="@/assets/icons/icon-back-arrow.svg" alt="menu-icon-back-arrow">
            </div>
            <div class="link" @click="submitForm">
                <img class="icon" :class="isReady ? 'ready' : 'not-ready'" src="@/assets/icons/icon-check.svg"
                    alt="menu-icon-check">
            </div>
        </div>
        <h2>Edit contact</h2>
        <form class="edit-contact-form" @sumbit.prevent="addContact">
            <div class="contact-info">
                <input type="text" name="name" v-model="name" placeholder="Name" required autocomplete="off">
                <input type="text" name="serLetter" v-model="serLetter" placeholder="First letter in lastname"
                    autocomplete="off">
                <input type="text" name="phone" v-model="phone" placeholder="Phone number" required autocomplete="off">
            </div>
            <div class="tags">
                <p class="bold">Tags:</p>
                <label><input type="checkbox" name="newcomer" id="newcomer">Newcomer</label>
                <label><input type="checkbox" name="trusted" id="trusted">Trusted</label>
            </div>
        </form>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const name = ref('')
const serLetter = ref('')
const phone = ref('')

const isReady = computed(() => {
    if (name.value !== '' && phone.value !== '') {
        return true
    } else {
        return false
    }
})
const submitForm = () => {
    const newContact = {
        name: name.value,
        serLetter: serLetter.value,
        phone: phone.value
    }
    console.log(newContact)
}
</script>

<style lang="scss" scoped>
.edit-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $xl;

    .subpage-icons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 $ml 0 $ml;
    }

    a,
    .link {
        display: contents;

        .icon {
            height: 8vw;
            max-height: 2rem;
        }

        .ready {
            filter: invert(55%) sepia(59%) saturate(1932%) hue-rotate(79deg) brightness(108%) contrast(114%);
        }

        .not-ready {
            filter: invert(94%) sepia(4%) saturate(160%) hue-rotate(191deg) brightness(90%) contrast(86%);
        }
    }

    .edit-contact-form {
        .contact-info {
            display: block;
            margin-bottom: $xl;
        }

        .tags {
            p {
                margin-bottom: $m;
            }
        }
    }
}
</style>
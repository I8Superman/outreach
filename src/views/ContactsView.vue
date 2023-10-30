<template>
    <div class="contacts view">
        <input type="search" class="search-field" v-model="searchInput" placeholder="Search">
        <div class="contacts-container">
            <ContactList :contacts="contacts" :searchInput="searchInput" />
        </div>
    </div>
</template>

<script setup>
// IMPORTS:
import ContactList from '@/components/ContactList.vue'
import { ref } from 'vue';

// STATE:
const contacts = ref([
    {
        id: '4nfj4339',
        name: 'Bubba',
        serLetter: 'D',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'n44d99ej',
        name: 'Adrian',
        serLetter: 'L',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: 'mwm39f9',
        name: 'Abdullah',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'sad0993',
        name: 'Cecil',
        serLetter: 'W',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '04oflll',
        name: 'Ethan',
        serLetter: 'H',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '3494343h',
        name: 'Kabbu',
        serLetter: 'O',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: '48wjcewooo',
        name: 'Sandy',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '4nfj439',
        name: 'Bubba',
        serLetter: 'D',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'n44d9ej',
        name: 'Adrian',
        serLetter: 'L',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: 'mwm3f9',
        name: 'Abdullah',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'sad093',
        name: 'Cecil',
        serLetter: 'W',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '04olll',
        name: 'Ethan',
        serLetter: 'H',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '349443h',
        name: 'Kabbu',
        serLetter: 'O',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: '48wjewooo',
        name: 'Sandy',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'fj4339',
        name: 'Bubba',
        serLetter: 'D',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'n44d9j',
        name: 'Adrian',
        serLetter: 'L',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: 'mwm39',
        name: 'Abdullah',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'sad93',
        name: 'Cecil',
        serLetter: 'W',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '04ofl',
        name: 'Ethan',
        serLetter: 'H',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '34343h',
        name: 'Kabbu',
        serLetter: 'O',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: '48wjcooo',
        name: 'Sandy',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
])

const searchInput = ref('')
// FUNCTIONS:

</script>

<style lang="scss" scoped>
.contacts {
    .search-field {
        border: none;
        font-size: $m;
        color: $dark-grey;
        background-color: $light-grey;
        background: url('@/assets/icons/icon-search.svg') no-repeat $light-grey;
        background-position: 0.5rem center;
        background-size: 1.2rem;
        box-shadow: 2px 2px 3px 0px rgba(24, 24, 25, 0.31) inset;
        padding: 0.5rem 0.75rem 0.5rem 2rem;
        margin-bottom: 2rem;
        border-radius: 0.5rem;
        width: 100%;

        &:focus {
            outline: none;
        }
    }

    .contacts-container {
        height: calc(100% - 8.5rem);
        overflow-y: scroll;
        border-top: $light-grey 1px solid;
        border-bottom: $light-grey 1px solid;
        padding: $xs 0 $xs 0;
    }
}
</style>
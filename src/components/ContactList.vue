<template>
    <div class="contact-list">
        <div class="contact" v-for="contact in sortedContacts" :key="contact.id">
            <router-link class="contact-link" :to="{ name: 'details', params: { id: contact.id } }">
                <p class="name">{{ contact.name }} {{ contact.serLetter }}</p>
                <p class="phone">{{ contact.phone }}</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    contacts: Array,
    searchInput: String
})

// Perform search filtering and sorting:
const sortedContacts = computed(() => {
    let tempContacts = props.contacts // temp = temporary - until we use methods on it. Var to store the mutated arr
    let search = props.searchInput.toLowerCase()

    // Check if search input is used and apply filtering:
    if (props.searchInput != '' && props.searchInput) {
        tempContacts = tempContacts.filter(contact => {
            const fullName = `${contact.name.toLowerCase()} ${contact.serLetter.toLowerCase()}` // If searching for name and serletter at the same time for some reason
            return contact.name.toLowerCase().includes(search) || contact.serLetter.toLowerCase().includes(search) || fullName.includes(search)
        })
    }

    // Sort alphabetically by name property:
    tempContacts = tempContacts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)

    return tempContacts
})
</script>

<style scoped>
.contact-list {

    .contact {
        border-bottom: 1px var(--light-grey) solid;
        padding: 0.5rem 0rem 0.5rem 0rem;

        .contact-link {
            display: flex;
            justify-content: space-between;
        }

        .phone {
            color: var(--grey);
        }
    }
}
</style>
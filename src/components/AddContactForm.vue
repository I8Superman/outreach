<!-- This component is for adding nice-to-have add multiple contacts functionality -->
<template>
    <form class="add-contact-form" @sumbit.prevent="addContact">
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
</template>

<script setup>

</script>

<style scoped></style>
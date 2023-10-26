<template>
    <div class="parent">
        <div class="contact">
            <p class="name">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto vero aut ea maxime ut
                doloremque, <span class="bold">distinctio explicabo alias culpa vitae</span>distinctio explicabo alias culpa
                vitae. Ad quas obcaecati eaque sapiente odio officia molestias
                aut.</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.contact {
    border: 2px var(--dark-grey) solid;
    transition: all 1s;

    &:first-child {
        border: 5px green dashed;
    }

    &:hover {
        border: 2px red solid;
    }

    .name {
        color: var(--white);

        span {}
    }
}
</style>
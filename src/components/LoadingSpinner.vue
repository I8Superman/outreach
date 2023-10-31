<template>
    <div class="loading-spinner">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// Ok, so this could have been done a lot smarter I think. Do it over with some fancy SASS calculations and functions sometime!
.loading-spinner {
    $spinner-width: 60%;
    $dots: 7;
    $radius: 200%;
    $anim-time: 0.6s;

    width: $spinner-width;
    height: $spinner-width;
    position: relative;
    border-radius: 50%;
    /* border: 1px white solid; */

    @keyframes dot-keyframes {
        0% {
            opacity: 0;
        }

        20% {
            opacity: 1;
        }

        60% {
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }

    .dot {
        position: absolute;
        transform-origin: center center;
        /* transform: translate(50%, 50%); */
        left: 40%;
        top: 40%;
        width: 20%;
        height: 20%;
        border-radius: 50%;
        background-color: $sick-green;
        opacity: 0;
        animation: dot-keyframes $anim-time infinite ease-in-out;

        &:nth-child(1) {
            $posX: calc(cos(2 * pi / $dots * 1) * $radius);
            $posY: calc(sin(2 * pi / $dots * 1) * $radius);
            transform: translate($posX, $posY);
        }

        &:nth-child(2) {
            $posX: calc(cos(2 * pi / $dots * 2) * $radius);
            $posY: calc(sin(2 * pi / $dots * 2) * $radius);
            transform: translate($posX, $posY);
            animation-delay: calc(($anim-time / $dots) * 1);
        }

        &:nth-child(3) {
            $posX: calc(cos(2 * pi / $dots * 3) * $radius);
            $posY: calc(sin(2 * pi / $dots * 3) * $radius);
            transform: translate($posX, $posY);
            animation-delay: calc(($anim-time / $dots) * 2);
        }

        &:nth-child(4) {
            $posX: calc(cos(2 * pi / $dots * 4) * $radius);
            $posY: calc(sin(2 * pi / $dots * 4) * $radius);
            transform: translate($posX, $posY);
            animation-delay: calc(($anim-time / $dots) * 3);
        }

        &:nth-child(5) {
            $posX: calc(cos(2 * pi / $dots * 5) * $radius);
            $posY: calc(sin(2 * pi / $dots * 5) * $radius);
            transform: translate($posX, $posY);
            animation-delay: calc(($anim-time / $dots) * 4);
        }

        &:nth-child(6) {
            $posX: calc(cos(2 * pi / $dots * 6) * $radius);
            $posY: calc(sin(2 * pi / $dots * 6) * $radius);
            transform: translate($posX, $posY);
            animation-delay: calc(($anim-time / $dots) * 5);
        }

        &:nth-child(7) {
            $posX: calc(cos(2 * pi / $dots * 7) * $radius);
            $posY: calc(sin(2 * pi / $dots * 7) * $radius);
            transform: translate($posX, $posY);
            animation-delay: calc(($anim-time / $dots) * 6);
        }
    }
}
</style>
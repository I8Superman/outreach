
<template>
  <div class="call view">
    <h1 class="app-name">Outreach</h1>
    <button class="call__btn" :class="{ clicked: isActive }" @click="makeCall">
      <img class="phone-icon" src="@/assets/icons/icon-phone-fill.svg" alt="">
    </button>
    <h2 class="call__prompt">Make a call</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const isActive = ref(false)

const makeCall = () => {
  isActive.value = !isActive.value;
}
</script>

<style scoped>
.call {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .app-name {
    color: white;
    /* font-family: $tangerine; */
    font-weight: 700;
    font-size: 6rem;
    margin-bottom: 1rem;
  }

  &__btn {
    width: 50vw;
    max-width: 15rem;
    height: 50vw;
    max-height: 15rem;
    border-radius: 50%;
    background-color: blue;
    /* background: linear-gradient(0deg, $dark-blue 0%, #5555dd 100%); //box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.2); */
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3), inset 0px 2px 3px light-blue;

    &:hover {
      background-color: brown;
    }

    .phone-icon {
      width: 50%;
    }
  }

  &__prompt {
    color: var(--white);
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    &:hover {
      color: brown;
    }
  }
}

.clicked {
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.8) inset;

}
</style>

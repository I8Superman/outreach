
<template>
  <div class="call">
    <h1 class="app-name">Outreach</h1>
    <button class="call__btn" :class="isActive ? 'clicked' : 'ready'" @click="makeCall">
      <img class="phone-icon" src="@/assets/icons/icon-phone-fill.svg" v-if="!isActive">
      <LoadingSpinner v-if="isActive" />
    </button>
    <h2 class="prompt">Make a call</h2>
  </div>
</template>

<script setup>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { ref } from 'vue';

const isActive = ref(false)

const makeCall = () => {
  isActive.value = !isActive.value;
  window.location.href = 'tel:+4560803312'
}
</script>

<style lang="scss" scoped>
.call {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .app-name {
    font-family: $tangerine;
    color: $white;
    font-weight: 700;
    font-size: 6rem;
    margin-bottom: $xxl;
  }

  .call__btn {
    width: 50vw;
    max-width: 15rem;
    height: 50vw;
    max-height: 15rem;
    border-radius: 50%;
    background: linear-gradient(0deg, $dark-blue 0%, $light-blue 100%);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;


    .phone-icon {
      width: 50%;
    }
  }

  /* Different shadows for different call btn states: */
  .ready {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3), inset 0px 2px 3px $light-blue;
  }

  .clicked {
    box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.8) inset;
  }

  .prompt {
    color: $white;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
}
</style>

<template>
  <component
      :is="to ? 'NuxtLink' : 'button'"
      :to="to"
      class="primary-button"
      @click="onClick"
  >
    <slot>Rezervovat</slot>
  </component>
</template>

<script setup>
defineProps({
  to: String, // pokud chci přesměrovat (NuxtLink)
  onClick: Function // pokud chci kliknutí
})
</script>

<style scoped>

.primary-button {
  display: inline-block;
  padding: 20px 48px;
  background-color: #E5595B;
  color: white;
  border: 2px solid #E5595B;
  border-radius: 32px;
  text-decoration: none;
  font-family: "Readex Pro", sans-serif;
}

.primary-button {
  clip-path: inset(100% 0 0 0);
  transform: translateY(100%);
  opacity: 0;
}

</style>
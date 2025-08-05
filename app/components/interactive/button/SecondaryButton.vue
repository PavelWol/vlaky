<template>
  <component
      :is="href ? 'a' : 'button'"
      :href="href"
      class="secondary-button"
      @click="onClick"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  href: String, // pokud chci přesměrovat (NuxtLink)
  onClick: Function // pokud chci kliknutí
})
</script>

<style scoped>

.secondary-button {
  display: inline-block;
  padding: 20px 48px;
  background-color: transparent;
  color: #FFF8ED;
  border: 2px solid #E5595B;
  border-radius: 32px;
  text-decoration: none;
  font-family: "Readex Pro", sans-serif;
  transition: 0.3s;
}

.secondary-button:hover {
  border: 2px solid #a64244;
  transition: 0.3s;
  transform: scale(1.05);
}



</style>
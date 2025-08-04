<template>
  <component
      :is="href ? 'a' : 'button'"
      :href="href"
      class="primary-button"
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

.primary-button {
  display: inline-block;
  padding: 20px 48px;
  background-color: #E5595B;
  color: white;
  border: 2px solid #E5595B;
  border-radius: 32px;
  text-decoration: none;
  font-family: "Readex Pro", sans-serif;
  transition: 0.3s;
}

.primary-button:hover {
  background-color: #a64244;
  transition: 0.3s;
  border: 2px solid #a64244;
  transform: scale(1.05);
}

</style>
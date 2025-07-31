<script setup>
import { useGalleryStore } from '~~/stores/gallery'
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

const gallery = useGalleryStore()
const fade = ref(false)

// Animace při změně obrázku
watch(() => gallery.selectedImage, () => {
  fade.value = false
  setTimeout(() => (fade.value = true), 100)
})

// Klávesové ovládání
const handleKey = (e) => {
  if (!gallery.selectedImage) return
  if (e.key === 'ArrowRight') gallery.next()
  if (e.key === 'ArrowLeft') gallery.prev()
  if (e.key === 'Escape') gallery.close()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKey))
</script>

<template>
  <!-- Galerie -->
  <div class="container">
    <h2>Jak to u nás vypadá?</h2>
    <div class="gallery">
      <img
          v-for="(img, i) in gallery.images"
          :key="i"
          :src="img.src"
          :alt="img.caption"
          class=""
          @click="gallery.open(i)"
      />
    </div>
  </div>

  <!-- Lightbox -->
  <div
      v-if="gallery.selectedImage"
      class="fullscreen"
      @click.self="gallery.close"
  >
    <div class="">
      <!-- Obrázek s fade-in animací -->
      <transition name="fade">
        <img
            v-if="fade"
            :src="gallery.selectedImage.src"
            class=""
            :alt="gallery.selectedImage.caption"
        />
      </transition>

      <!-- Popis obrázku -->
      <div class="">
        <p>{{ gallery.selectedImage.caption }}</p>
        <p>{{ gallery.selectedIndex + 1 }} / {{ gallery.images.length }}</p>
      </div>

      <!-- Zavřít -->
      <button
          @click="gallery.close"
          class=""
      >
        ×
      </button>

      <!-- Předchozí -->
      <button
          @click="gallery.prev"
          class=""
      >
        ‹
      </button>

      <!-- Další -->
      <button
          @click="gallery.next"
          class=""
      >
        ›
      </button>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 250ms ease-in-out
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

h2 {
  text-align: center;
  color: #AE4343;
}

.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  position: relative;
  margin-top: 72px;
}

.gallery img {
  cursor: pointer;
  max-width: 420px;
  width: 100%;
  border-radius: 16px;
}

.fullscreen {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

@media (max-width: 1024px) {
  .gallery img {
    max-width: 1024px;
  }

  .fullscreen img {
    padding: 0 24px;
  }
}
</style>
<template>

  <div class="container">
    <h2>Jak to u nás vypadá?</h2>
    <div class="gallery">
      <img
        v-for="(img, i) in images"
        :key="i"
        :src="img"
        class="w-full h-auto rounded shadow cursor-pointer hover:scale-105 transition"
        @click="gallery.open(img)"
      />
    </div>

    <!-- Lightbox -->
    <div
      v-if="gallery.selectedImage"
      class="fullscreen fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click.self="gallery.close"
    >
      <div class="relative max-w-3xl w-full">
        <img :src="gallery.selectedImage" alt="" class="w-full rounded shadow-lg" />
        <button
            @click="gallery.close"
            class="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-70 transition"
        >
          ×
        </button>
      </div>
    </div>
  </div>

</template>

<script setup lang="js">

  import { useGalleryStore} from "~~/stores/gallery.js";
  const gallery = useGalleryStore();

  const images = [
      '/images/gallery/1.png',
      '/images/gallery/2.png',
      '/images/gallery/3.png',
      '/images/gallery/4.png',
  ]

</script>

<style>

.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  position: relative;
  margin-top: 72px;
}

.gallery img {
  max-width: 420px;
  width: 100%;
  border-radius: 16px;
}

.fullscreen {
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
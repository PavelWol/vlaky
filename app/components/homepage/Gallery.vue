<template>
  <div class="container">
    <h2>Jak to u nás vypadá?</h2>
    <div class="gallery">
      <div
          v-for="(img, i) in images"
          :key="i"
          class="gallery-item"
          @click="e => handleOpen(i, e)"
          :ref="el => thumbnailRefs[i] = el"
      >
        <img :src="img.src" :alt="img.alt" loading="lazy" />
      </div>

      <div
          v-if="zoomIndex !== null"
          class="overlay"
          ref="overlayRef"
          @click.self="handleClose"
      >
        <img
            ref="zoomImage"
            :src="currentImg.src"
            :alt="currentImg.alt"
            class="zoomed"
            @click.stop
        />
        <div class="caption">
          <p>{{ currentImg.alt }}</p>
          <span>{{ zoomIndex + 1 }} / {{ images.length }}</span>
        </div>

        <button class="nav left" @click.stop="prev" v-if="zoomIndex > 0">‹</button>
        <button class="nav right" @click.stop="next" v-if="zoomIndex < images.length - 1">›</button>
        <button class="close-btn" @click="handleClose">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import gsap from 'gsap'

const images = ref([
  { src: '/images/gallery/1.png', alt: 'Obrázek 1' },
  { src: '/images/gallery/2.png', alt: 'Obrázek 2' },
  { src: '/images/gallery/3.png', alt: 'Obrázek 3' },
  { src: '/images/gallery/4.png', alt: 'Obrázek 4' },
  { src: '/images/gallery/1.png', alt: 'Obrázek 5' },
  { src: '/images/gallery/2.png', alt: 'Obrázek 6' }
])

const zoomIndex = ref(null)
const currentImg = computed(() => images.value[zoomIndex.value] || {})

const thumbnailRefs = ref([])
const zoomImage = ref(null)
const overlayRef = ref(null)
const isTransitioning = ref(false)
const direction = ref('left')

const handleOpen = async (index, event) => {
  zoomIndex.value = index
  await nextTick()
  gsap.fromTo(
      zoomImage.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
  )
}

const handleClose = () => {
  const zoomEl = zoomImage.value
  const overlayEl = overlayRef.value

  gsap.to(overlayEl, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in'
  })

  gsap.to(zoomEl, {
    opacity: 0,
    duration: 0.4,
    ease: 'power3.inOut',
    onComplete: () => {
      zoomIndex.value = null
    }
  })
}

const next = async () => {
  if (zoomIndex.value < images.value.length - 1 && !isTransitioning.value) {
    isTransitioning.value = true
    direction.value = 'left'
    await transitionTo(zoomIndex.value + 1)
    setTimeout(() => (isTransitioning.value = false), 500)
  }
}

const prev = async () => {
  if (zoomIndex.value > 0 && !isTransitioning.value) {
    isTransitioning.value = true
    direction.value = 'right'
    await transitionTo(zoomIndex.value - 1)
    setTimeout(() => (isTransitioning.value = false), 500)
  }
}

const transitionTo = async (newIndex) => {
  const outX = direction.value === 'left' ? '-10%' : '10%'
  const inX = direction.value === 'left' ? '10%' : '-10%'

  gsap.to(zoomImage.value, {
    x: outX,
    opacity: 0,
    scale: 0.95,
    duration: 0.25,
    ease: 'power1.in',
    onComplete: async () => {
      zoomIndex.value = newIndex
      await nextTick()
      gsap.fromTo(
          zoomImage.value,
          { x: inX, opacity: 0, scale: 0.95 },
          {
            x: '0%',
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
          }
      )
    }
  })
}
</script>

<style scoped>
h2 {
  text-align: center;
  color: #AE4343;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 72px;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.gallery-item img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.zoomed {
  max-width: 1300px;
  border-radius: 6px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}

.caption {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
}
.caption p {
  margin: 0;
  font-weight: bold;
}
.caption span {
  font-size: 0.9rem;
  opacity: 0.7;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
.nav.left {
  left: 2rem;
}
.nav.right {
  right: 2rem;
}
.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>
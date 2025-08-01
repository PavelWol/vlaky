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
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
      >
        <img
            ref="zoomImage"
            :src="currentImg.src"
            :alt="currentImg.alt"
            class="zoomed"
            @click.stop
            @load="animateZoomIn"
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
import { useGalleryStore } from '~~/stores/gallery'

const gallery = useGalleryStore()
const images = computed(() => gallery.images)
const zoomIndex = computed(() => gallery.currentZoomIndex)
const currentImg = computed(() => gallery.currentImage)

const zoomImage = ref(null)
const overlayRef = ref(null)
const thumbnailRefs = ref([])

const clickX = ref(0)
const clickY = ref(0)

const startX = ref(0)
const endX = ref(0)
const direction = ref('left')
const isTransitioning = ref(false)

const onTouchStart = (e) => {
  startX.value = e.touches[0].clientX
}
const onTouchMove = (e) => {
  endX.value = e.touches[0].clientX
}
const onTouchEnd = () => {
  const delta = endX.value - startX.value
  const threshold = 50
  if (delta < -threshold) {
    direction.value = 'left'
    next()
  } else if (delta > threshold) {
    direction.value = 'right'
    prev()
  }
  startX.value = 0
  endX.value = 0
}

const handleOpen = (index, event) => {
  const { clientX, clientY } = event
  clickX.value = clientX
  clickY.value = clientY
  gallery.openZoom(index)
}

const animateZoomIn = () => {
  const zoomEl = zoomImage.value
  const overlayEl = overlayRef.value
  const zoomRect = zoomEl.getBoundingClientRect()

  const dx = clickX.value - (zoomRect.left + zoomRect.width / 2)
  const dy = clickY.value - (zoomRect.top + zoomRect.height / 2)

  gsap.fromTo(
      overlayEl,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
  )

  gsap.fromTo(
      zoomEl,
      { x: dx, y: dy, scale: 0.3, opacity: 0 },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out'
      }
  )
}

const handleClose = () => {
  const thumbEl = thumbnailRefs.value[zoomIndex.value]
  const zoomEl = zoomImage.value
  const overlayEl = overlayRef.value

  const thumbRect = thumbEl.getBoundingClientRect()
  const zoomRect = zoomEl.getBoundingClientRect()
  const dx = thumbRect.left - zoomRect.left
  const dy = thumbRect.top - zoomRect.top
  const sx = thumbRect.width / zoomRect.width
  const sy = thumbRect.height / zoomRect.height

  gsap.to(overlayEl, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in'
  })

  gsap.to(zoomEl, {
    x: dx,
    y: dy,
    scaleX: sx,
    scaleY: sy,
    opacity: 0,
    duration: 0.4,
    ease: 'power3.inOut',
    onComplete: () => {
      gallery.closeZoom()
    }
  })
}

const next = async () => {
  if (zoomIndex.value < images.value.length - 1 && !isTransitioning.value) {
    isTransitioning.value = true
    direction.value = 'left'
    await transitionTo(zoomIndex.value + 1)
    setTimeout(() => {
      isTransitioning.value = false
    }, 500)
  }
}

const prev = async () => {
  if (zoomIndex.value > 0 && !isTransitioning.value) {
    isTransitioning.value = true
    direction.value = 'right'
    await transitionTo(zoomIndex.value - 1)
    setTimeout(() => {
      isTransitioning.value = false
    }, 500)
  }
}

const transitionTo = async (newIndex) => {
  const outX = direction.value === 'left' ? '-100%' : '100%'
  const inX = direction.value === 'left' ? '100%' : '-100%'

  gsap.to(zoomImage.value, {
    x: outX,
    opacity: 0,
    scale: 0.95,
    duration: 0.25,
    ease: 'power1.in',
    onStart: () => {
      // případně: zoomVisible.value = false
    },
    onComplete: async () => {
      gallery.currentZoomIndex = newIndex
      await nextTick()
      gsap.fromTo(
          zoomImage.value,
          { x: inX, opacity: 0, scale: 0.95 },
          {
            x: '0%', opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out'
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  position: relative;
  margin-top: 72px;
}
.gallery-item {
  cursor: zoom-in;
  overflow: hidden;
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
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.overlay:has(.zoomed) {
  opacity: 1;
}

.zoomed {
  max-width: 90%;
  max-height: 85%;
  border-radius: 6px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  cursor: zoom-out;
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
  .gallery img {
    max-width: 1024px;
  }

  .fullscreen img {
    padding: 0 24px;
  }
}
</style>
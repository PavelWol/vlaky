<template>
  <Navigation />
  <NuxtPage />
  <Footer />
  <div ref="overlay" class="transition-overlay"></div>
</template>

<script setup lang="js">

import Footer from '~/components/navigation/Footer.vue'
import Navigation from '~/components/navigation/Navigation.vue'

import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useRouter } from 'vue-router'

const overlay = ref(null)
const router = useRouter()

onMounted(() => {
  if (!process.client) return

  // Výchozí stav
  gsap.set(overlay.value, { x: '-100%' })

  router.beforeEach((to, from, next) => {
    // ✅ Detekce desktopu
    const isDesktop = window.innerWidth >= 1024

    if (!isDesktop) {
      next() // 👉 okamžité přepnutí na mobilu/tabletu
      return
    }

    // ✅ Animace pro desktop
    gsap.to(overlay.value, {
      x: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        next()
      }
    })
  })

  router.afterEach(() => {
    if (!process.client || window.innerWidth < 1024) return

    gsap.to(overlay.value, {
      x: '-100%',
      duration: 0.6,
      ease: 'power2.inOut'
    })
  })
})

</script>

<style>

.transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #FFF8ED;
  z-index: 9999;
  transform: translateX(-100%);
  pointer-events: none;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-color: #FFF8ED;
}

h1, h2, h3, h4, p {
  margin-top: 0;
  margin-bottom: 0;
}

h1, h2, h3, h4 {
  font-family: "Paytone One", sans-serif;
}

p, a {
  font-family: "Readex Pro", sans-serif;
}

p {
  font-size: 24px;
  line-height: 180%;
  color: #353535;
}

h1 {
  font-size: 80px;
}

h2 {
  font-size: 64px;
}

h3 {
  font-size: 32px;
}

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 160px 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  position: relative;
  margin-top: 72px;
}

.btn:hover {
  border-color: #FFC779;
  transition: 0.3s ease;
}

/*
section {
  justify-content: center;
  align-items: center;
  height: 100vh;
}
 */

@media (max-width: 1024px) {
  h1 {
    font-size: 56px !important;
  }

  h2 {
    font-size: 40px !important;
  }

  h3 {
    font-size: 24px !important;
  }

  p {
    font-size: 18px !important;
  }

  .grid, .gallery, .aktuality {
    grid-template-columns: 1fr !important;
  }

  .container {
    padding: 80px 24px !important;
  }
}


</style>


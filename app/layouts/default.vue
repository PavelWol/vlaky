<template>
  <Navigation />
  <NuxtPage />
  <Footer />

  <!-- Overlay wrapper (kvůli centru a stacking) -->
  <div class="paper-overlay" ref="overlay">
    <div class="paper-sheet"></div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useRouter } from 'vue-router'
import Footer from '~/components/navigation/Footer.vue'

const overlay = ref(null)
const router = useRouter()

const D_IN = 0.9   // pomalejší vjezd
const D_OUT = 1.1  // pomalejší výjezd
const EASE = 'power1.inOut'

function tween(target, vars) {
  return new Promise(resolve => {
    gsap.to(target, { ...vars, onComplete: resolve })
  })
}

onMounted(() => {
  if (!process.client) return

  // start: schovaný nad viewportem
  gsap.set(overlay.value, { yPercent: -110 })

  // 1) PŘED NAVIGACÍ – nejdřív zakryj, pak teprve přepni
  router.beforeEach(async (to, from, next) => {
    try {
      // jen desktop?
      if (window.innerWidth < 1024) return next()

      await tween(overlay.value, { yPercent: 0, duration: D_IN, ease: EASE })
      next() // teprve teď dovolíme přepnutí stránky
    } catch {
      next()
    }
  })

  // 2) PO NAVIGACI – odkryj (overlay odjede dolů a reset zpět nahoru)
  router.afterEach(() => {
    // jen desktop?
    if (window.innerWidth < 1024) return

    gsap.timeline()
        .to(overlay.value, { yPercent: 110, duration: D_OUT, ease: EASE })
        .set(overlay.value, { yPercent: -110 })
  })
})
</script>

<style>

/* wrapper přes celou plochu kvůli animaci listu papíru */
.paper-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  display: grid;
  place-items: center; /* aby „papír“ byl uprostřed (pro hezčí stín) */
  /* startovní transform je řízen GSAPem */
}
.paper-sheet {
  width: 102vw;            /* mírně širší než viewport, ať nepřečuhují okraje při subpixelech */
  height: 110vh;           /* lehce vyšší, ať spolehlivě překryje */
  background: #FFF8ED;
  border-radius: 14px;
  background-size: 4px 4px;
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


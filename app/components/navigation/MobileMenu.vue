<template>
  <div class="mobile-menu">
    <!-- Hamburger -->
    <button class="hamburger" @click="toggleMenu" :aria-expanded="isOpen">
      <span :class="{ open: isOpen }"></span>
    </button>

    <!-- Overlay + Menu -->
    <div
        ref="overlay"
        class="menu-overlay"
        v-if="isVisible"
        @click.self="closeMenu"
    >
      <nav ref="menuContent" class="menu-content">
        <a
            v-for="(item, i) in links"
            :key="i"
            href="#"
            @click.prevent="navigateAfterClose(item.to)"
        >
          <span :ref="setMenuLink">{{ item.label }}</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, watch, nextTick } from 'vue'
import gsap from 'gsap'
import { useRouter } from 'vue-router'

const router = useRouter()
const overlay = ref(null)
const menuContent = ref(null)
const menuLinks = shallowRef([])

const isVisible = ref(false) // ovládá skutečnou přítomnost v DOM
const isOpen = ref(false)    // ovládá animace/stav

import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navigateAfterClose = (to) => {
  // Spusťí zavírací animaci (to je jako kliknutí)
  isOpen.value = false

  // Počkat než skončí animace (délka v ms)
  setTimeout(() => {
    router.push(to)
  }, 800) // uprava animace (menu + overlay + delay)
}

const links = [
  { to: '/', label: 'Domů' },
  { to: '/aktuality', label: 'Aktuality' },
  { to: '/cenik', label: 'Ceník' },
  { to: '/atrakce', label: 'Atrakce' },
  { to: '/oslavy', label: 'Oslavy' },
  { to: '/skoly-skolky', label: 'Školy a školky' }
]

// Funkce pro sesbírání všech NuxtLink referencí
const setMenuLink = (el) => {
  if (el) {
    menuLinks.value.push(el)
  }
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

watch(isOpen, async (newVal) => {
  if (newVal) {
    menuLinks.value = []
    await nextTick()

    console.log('Menu links:', menuLinks.value)

    // Pokud to vypíše [undefined, undefined], animace selže!
    // Pokud to vypíše [a, a, a], je to správně.
  }
})

watch(isOpen, async (newVal) => {
  if (newVal) {
    isVisible.value = true // zobrazíme menu v DOM
    menuLinks.value = []
    await nextTick()

    // Animace otevření (overlay, menu, odkazy)
    gsap.fromTo(overlay.value, { opacity: 0 }, { opacity: 1, duration: 0.3 })
    gsap.fromTo(menuContent.value, { x: '100%' }, { x: '0%', duration: 0.4 })
    gsap.fromTo(
        menuLinks.value,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.2,
          stagger: 0.07,
          ease: 'power2.out'
        }
    )
  } else {
    // Zavření: odkazy → menu → overlay → pak hide
    gsap.to(menuLinks.value, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power1.in',
      onComplete: () => {
        gsap.to(menuContent.value, {
          x: '100%',
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
          onComplete: () => {
            gsap.to(overlay.value, {
              opacity: 0,
              duration: 0.3,
              ease: 'power1.in',
              onComplete: () => {
                isVisible.value = false // skryj DOM až po animaci
              }
            })
          }
        })
      }
    })
  }
})
</script>

<style scoped>

.hamburger {
  position: relative;
  width: 30px;
  height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger span,
.hamburger span::before,
.hamburger span::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background: #000;
  transition: 0.3s ease;
}

.hamburger span {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger span::before {
  top: -10px;
}

.hamburger span::after {
  top: 10px;
}

.hamburger span.open {
  background: transparent;
}

.hamburger span.open::before {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.open::after {
  transform: rotate(-45deg) translate(5px, -5px);
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

.menu-content {
  width: 250px;
  height: 100%;
  background: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.menu-content a {
  font-size: 1.2rem;
  color: #111;
  text-decoration: none;
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 1024px) {
  .mobile-menu {
    display: none;
  }
}
</style>
<template>
  <div class="mobile-menu">
    <!-- HAMBURGER BUTTON -->
    <button class="hamburger" @click="toggleMenu" :aria-expanded="isOpen">
      <span :class="{ open: isOpen }"></span>
    </button>

    <!-- MENU OVERLAY -->
    <div
        v-if="isVisible"
        ref="overlay"
        class="menu-overlay"
        @click.self="closeMenu"
    >
      <nav ref="menuContent" class="menu-content">
        <a
            v-for="(item, i) in links"
            :key="i"
            href="#"
            @click.prevent="navigateAfterClose(item.to)"
            class="menu-item"
        >
          <span class="menu-link" :ref="setMenuLink">{{ item.label }}</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const isOpen = ref(false)
const isVisible = ref(false)

const overlay = ref(null)
const menuContent = ref(null)
const menuLinks = shallowRef([])

const links = [
  { to: '/', label: 'Domů' },
  { to: '/cenik', label: 'Ceník' },
  { to: '/aktuality', label: 'Aktuality' },
  { to: '/kontakt', label: 'Kontakt' }
]

const setMenuLink = (el) => {
  if (el) menuLinks.value.push(el)
}

const router = useRouter()

const lockScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockScroll = () => {
  document.body.style.overflow = ''
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const navigateAfterClose = (to) => {
  isOpen.value = false
  setTimeout(() => {
    router.push(to)
  }, 900) // musí odpovídat době animace zavření
}

watch(isOpen, async (open) => {
  if (open) {
    isVisible.value = true
    lockScroll()
    menuLinks.value = []
    await nextTick()

    // Overlay animace – slide dolů
    gsap.fromTo(
        overlay.value,
        { y: '-100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.6, ease: 'power2.out' }
    )

    // Linky clip-path vyjetí
    gsap.fromTo(
        menuLinks.value,
        {
          y: '100%',
          clipPath: 'inset(100% 0 0 0)',
          opacity: 0
        },
        {
          y: '0%',
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          stagger: 0.08,
          ease: 'power3.out'
        }
    )
  } else {
    // Odkazy stáhnout dolů
    gsap.to(menuLinks.value, {
      y: '100%',
      clipPath: 'inset(100% 0 0 0)',
      opacity: 0,
      duration: 0.4,
      stagger: 0.06,
      ease: 'power2.in',
      onComplete: () => {
        // Po odkazech overlay pryč nahoru
        gsap.to(overlay.value, {
          y: '-100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            isVisible.value = false
            unlockScroll()
          }
        })
      }
    })
  }
})
</script>

<style scoped>
/* HAMBURGER BUTTON */
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

/* FULLSCREEN OVERLAY */
.menu-overlay {
  position: fixed;
  inset: 0;
  background: #fff;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* CONTENT CENTER */
.menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  opacity: 1;
}

/* MENU LINK */
.menu-item {
  overflow: hidden;
}

.menu-link {
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  color: #111;
  text-decoration: none;
  transform: translateY(100%);
  clip-path: inset(100% 0 0 0);
}

/* DESKTOP SKRYJ */
@media (min-width: 1024px) {
  .mobile-menu {
    display: none;
  }
}
</style>
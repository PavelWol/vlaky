<template>
  <div ref="navRef" :class="['navigation', { 'transparent': isHome, 'yellow': !isHome }]" class="">
    <nav class="navbar">
      <NuxtLink to="/">
        <img ref="logoRef" :src="logoSrc" alt="Logo" class="logo" />
      </NuxtLink>
      <div class="desktop-nav">
        <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="links"
            :class="{
            'active': route.path === link.to || route.path.startsWith(link.to + '/'),
            'white': isHome
          }"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
      <a href="" class="btn">Rezervace</a>
      <MobileMenu />
    </nav>
  </div>
</template>
<script setup lang="js">

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import MobileMenu from '~/components/navigation/MobileMenu.vue'

import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const route = useRoute()
const logoSrc = computed(() =>
    isHome.value ? '/images/logo-white.svg' : '/images/logo-black.svg'
)

const isHome = computed(() => route.path === '/')

const navLinks = [
  { to: '/', label: 'Domů' },
  { to: '/aktuality', label: 'Aktuality' },
  { to: '/cenik', label: 'Ceník' },
  { to: '/atrakce', label: 'Atrakce' },
  { to: '/oslavy', label: 'Oslavy' },
  { to: '/skoly-skolky', label: 'Školy a školky' },
]

gsap.registerPlugin(ScrollTrigger)

const navRef = ref(null)
const logoRef = ref(null)


onMounted(() => {
  gsap.from(navRef.value, {
    scrollTrigger: {
      trigger: navRef.value,
      start: 'top 80%',
    },
    y: -250,
    opacity: 0,
    duration: 0.8,
    delay: 4,
    ease: 'power2.out'
  })

  gsap.from(logoRef.value, {
    scrollTrigger: {
      trigger: logoRef.value,
      start: 'top 80%',
    },
    rotate: 360,
    scale: 2,
    duration: 1.5,
    delay: 4.1,
    ease: 'power2.out'
  })

})

</script>

<style>

/* Navigace */

.transparent {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
}

.yellow {
  background-color: #FFF8ED;
}

.navbar {
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  z-index: 2;
}

.navbar a {
  color: #353535;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.navbar .btn {
  margin-top: 0;
  background-color: #E5595B;
  color: #ffffff;
}

.logo {
  width: 118px;
}

.links:not(:last-child) {
  margin-right: 48px;
}

.links {
  position: relative;
}

.links:after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #aa2e2e;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.router-link-active::after,
.links:hover::after{
  transform: scaleX(1);
}

.white {
  color: #ffffff !important;
}

@media (max-width: 1024px) {

  .desktop-nav {
    display: none;
  }

}

</style>
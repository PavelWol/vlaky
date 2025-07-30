<template>
  <nav class="navbar">
    <NuxtLink to="/">
      <img  src="https://placehold.co/600x400" alt="Logo" class="logo"> <!-- logo -->
    </NuxtLink>
    <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="hover:underline transition"
        :class="{
        'nav-links': route.path === link.to || route.path.startsWith(link.to + '/')
      }"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>
<script setup lang="js">

import { useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { to: '/', label: 'Domů' },
  { to: '/aktuality', label: 'Aktuality' },
 // { to: '/cenik', label: 'Ceník' },
 // { to: '/atrakce', label: 'Atrakce' },
 // { to: '/oslavy', label: 'Oslavy' },
 // { to: '/skoly-skolky', label: 'Školy a školky' },
]

</script>

<style>

/* Navigace */
.navbar {
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  z-index: 2;
}

.logo {
  width: 118px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #FFC779;
}

</style>
<template>
  <Navigation />
  <slot />
  <Footer />
</template>

<script setup lang="js">

import Footer from '~/components/navigation/Footer.vue'
import Navigation from '~/components/navigation/Navigation.vue'

</script>

<style>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
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

.btn {
  display: inline-block;
  margin-top: 40px;
  padding: 20px 48px;
  background-color: transparent;
  color: white;
  border: 2px solid #E5595B;
  border-radius: 32px;
  text-decoration: none;
  font-weight: 700;
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


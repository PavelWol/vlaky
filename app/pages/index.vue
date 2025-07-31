<template>
  <div class="wrapper">
    <Hero />
    <OurStory />
    <LookForward />
    <EventsNews />
    <Gallery />
  </div>
</template>

<script setup lang="js">

import Hero from '~/components/homepage/Hero.vue'
import OurStory from '~/components/homepage/OurStory.vue'
import LookForward from '~/components/homepage/LookForward.vue'
import EventsNews from "~/components/homepage/EventsNews.vue";
import Gallery from "~/components/homepage/Gallery.vue";

</script>

<style>

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
  transition: all 0.3s ease;
}

.btn:hover {
  border-color: #FFC779;
}

</style>

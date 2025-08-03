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

// import gsap from "gsap";
// import {onMounted} from "vue";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
//
// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.utils.toArray('section').forEach((section, i) => {
//     ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       pin: true,
//       pinSpacing: false
//     });
//   });
// })

</script>

<style>


</style>

<template>
  <div class="wrapper">
    <Hero />
    <OurStory />
    <LookForward />
    <div class="bg-container">
      <BackgroundScroll class="gallery-pWrapper" />
      <EventsNews />
      <Gallery />
    </div>
  </div>
</template>

<script setup lang="js">

import Hero from '~/components/homepage/Hero.vue'
import OurStory from '~/components/homepage/OurStory.vue'
import LookForward from '~/components/homepage/LookForward.vue'
import EventsNews from "~/components/homepage/EventsNews.vue";
import Gallery from "~/components/homepage/Gallery.vue";
import BackgroundScroll from "~/components/BackgroundScroll.vue";
import {onMounted} from "vue";
import gsap from "gsap";

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

onMounted(() => {
  gsap.to(".v1", {
    yPercent: -100,
    xPercent: -100,
    ease: "none",
    rotation: 45,
    translate: '100%',
    scrollTrigger: {
      trigger: ".gallery-pWrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

  gsap.to(".v2", {
    ease: "none",
    translate: '20%',
    scrollTrigger: {
      trigger: ".gallery-pWrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

  gsap.to(".v3", {
    yPercent: 50,
    xPercent: -250,
    ease: "none",
    rotation: 180,
    translate: '150%',
    scrollTrigger: {
      trigger: ".gallery-pWrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  })
})


</script>

<style>


</style>

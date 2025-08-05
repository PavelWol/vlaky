<template>

  <div class="bg-wrapper">
    <VectorOne class="vector v1" width="500px" height="500px" />
    <VectorTwo class="vector v2" width="500px" height="500px" />
    <VectorThree class="vector v3" width="500px" height="500px" />
  </div>

</template>


<script setup lang="js">

import VectorOne from "~/components/VectorOne.vue";
import VectorTwo from "~/components/VectorTwo.vue";
import VectorThree from "~/components/VectorThree.vue";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {onMounted} from "vue";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

defineProps({
  image: String,
  heading: String,
  text: String
})

onMounted(() => {
  gsap.to(".v1", {
    yPercent: -20,
    ease: "none",
    rotation: 155,
    translate: '150%',
    scrollTrigger: {
      trigger: ".bg-wrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

  gsap.to(".v2", {
    yPercent: -20,
    ease: "none",
    rotationX: 250,
    translate: '150%',
    scrollTrigger: {
      trigger: ".bg-wrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

  gsap.to(".v3", {
    yPercent: -20,
    ease: "none",
    rotation: 90,
    translate: '150%',
    scrollTrigger: {
      trigger: ".bg-wrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

})

</script>


<style>

.bg-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

.vector {
  position: absolute;
}

.v1 {
  top: 0;
  left: 0;
}

.v2 {
  top: 25%;
}

.v3 {
  bottom: 10%;
  left: 25%;
}

</style>
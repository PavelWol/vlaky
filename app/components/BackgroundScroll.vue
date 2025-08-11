<template>

  <div class="bg-wrapper">
    <VectorOne class="vector v1" width="50%" height="50%" />
    <VectorTwo class="vector v2" width="50%" height="50%" />
    <VectorThree class="vector v3" width="50%" height="50%" />
    <VectorFour class="vector v4" width="50%" height="50%" />
    <VectorFive class="vector v5" width="50%" height="50%" />
    <VectorSix class="vector v6" width="50%" height="50%" />
  </div>

</template>


<script setup lang="js">

import VectorOne from "~/components/VectorOne.vue";
import VectorTwo from "~/components/VectorTwo.vue";
import VectorThree from "~/components/VectorThree.vue";
import VectorFour from "~/components/VectorFour.vue";
import VectorFive from "~/components/VectorFive.vue";
import VectorSix from "~/components/VectorSix.vue";

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
    yPercent: -50,
    xPercent: -100,
    ease: "none",
    rotation: 45,
    translate: '100%',
    scrollTrigger: {
      trigger: ".bg-wrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

  gsap.to(".v2", {
    ease: "none",
    translate: '20%',
    scrollTrigger: {
      trigger: ".bg-wrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

  gsap.to(".v3", {
    ease: "none",
    rotation: -45,
    translate: '10%',
    scrollTrigger: {
      trigger: ".bg-wrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

  gsap.to(".v4", {
    yPercent: 50,
    xPercent: -150,
    ease: "none",
    rotationX: 45,
    translate: '150%',
    scrollTrigger: {
      trigger: ".bg-wrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

  gsap.to(".v5", {
    ease: "none",
    rotation: 90,
    translate: '20%',
    scrollTrigger: {
      trigger: ".bg-wrapper",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,

    },
  });

  gsap.to(".v6", {
    yPercent: 50,
    xPercent: -50,
    ease: "none",
    rotation: 15,
    translate: '50%',
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
  z-index: -1;
}

.vector {
  position: absolute;
}

.v1 {
  top: 0;
  left: 0;
  z-index: -1;
}

.v2 {
  top: 25%;
  right: 0;
  z-index: -1;
}

.v3 {
  bottom: 0;
  right: 0;
  z-index: -1;
}

.v4 {
  top: -25%;
  right: 0;
  z-index: -1;
}

.v5 {
  bottom: 0;
  left: 25%;
  z-index: -1;
}

.v6 {
  bottom: 25%;
  left: 0;
  z-index: -1;
}

@media (max-width: 1024px) {
  .vector {
    height: 300px;
  }
}

</style>
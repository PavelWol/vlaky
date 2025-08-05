<template>

  <div class="card">
    <div class="pwrap">
      <img class="pImage" :src="image" :alt="heading">
    </div>
    <h3>{{ heading }}</h3>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script setup>

import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

defineProps({
  image: String,
  heading: String,
  text: String
})

onMounted(() => {
  gsap.to(".pImage", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,
    },
  });

})

</script>

<style scoped>

.card {
  border-radius: 16px;
  text-align: center;
  width: 100%;
  overflow: hidden;
}

.pwrap {
  position: relative;
  overflow: hidden;
  height: 340px;
  border-radius: 16px;
}

.card img {
  max-width: 420px;
  border-radius: 16px;
  overflow: hidden;
  position: absolute;
  top: 25%;
  transform: translate(-50%, -50%);
  height: 500px;
  transition: all 0.5s;
}

.card:nth-child(1),
.card:nth-child(2) {
  margin-right: 20px;
}

.card h3 {
  font-size: 32px;
  color: #FFC779;
  margin-bottom: 16px;
  margin-top: 24px;
}

.card p {
  font-size: 16px;
  color: #FFF8ED;
}

</style>
<template>

  <section ref="contactRef" class="section">
    <h2>Šlapací drezína</h2>
    <p>
      Šlapací drezína pro 6 osob (cca 6 km po trati).<br>
      Půjčovné 460 Kč / 2 hodiny<br>
      Rezervujte na tel.: <strong>774 686 350</strong>
    </p>
    <p class="open-time">Otevřeno denně 11:00 – 18:00</p>
    <p class="contact">
      Uhřice u Kyjova 200<br>
      GPS: 49.0223742N, 16.9649011E<br>
      facebook: zážitková železnice Čejč - Uhřice<br>
      instagram: zazitkovazeleznice<br>
      #zazitkovazeleznice
    </p>
  </section>

</template>
<script setup lang="js">

import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactRef = ref(null)

onMounted(() => {
  gsap.from(contactRef.value, {
    scrollTrigger: {
      trigger: contactRef.value,
      start: 'top 80%',
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  })
})

</script>
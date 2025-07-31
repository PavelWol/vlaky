<template>
  <section ref="timetableRef" class="section">
    <h2>Jízdní řád – projížďky vlakem každou sobotu</h2>
    <table class="schedule-table">
      <thead>
      <tr>
        <th>Uhřice</th>
        <th>Bohumilice</th>
        <th>Bohumilice</th>
        <th>Uhřice</th>
      </tr>
      </thead>
      <tbody>
      <tr><td>11:30</td><td>11:40</td><td>11:50</td><td>12:00</td></tr>
      <tr><td>12:30</td><td>12:40</td><td>12:50</td><td>13:00</td></tr>
      <tr><td>13:30</td><td>13:40</td><td>13:50</td><td>14:00</td></tr>
      <tr><td>14:30</td><td>14:40</td><td>14:50</td><td>15:00</td></tr>
      <tr><td>15:30</td><td>15:40</td><td>15:50</td><td>16:00</td></tr>
      <tr><td>16:30</td><td>16:40</td><td>–</td><td>–</td></tr>
      </tbody>
    </table>
    <p class="note">Jízdenka platí celý den, nejen na jednu jízdu.</p>
  </section>
</template>
<script setup lang="js">

import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timetableRef = ref(null)

onMounted(() => {
  gsap.from(timetableRef.value, {
    scrollTrigger: {
      trigger: timetableRef.value,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  })
})

</script>
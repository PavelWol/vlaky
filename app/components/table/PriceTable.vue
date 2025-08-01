<template>

  <section ref="priceRef" class="section">
    <h2>Ceník platný od 1.7.2025</h2>
    <p>Nádraží Uhřice – Janův dvůr</p>
    <table class="price-table">
      <thead>
      <tr>
        <th></th>
        <th>Jízda vláčkem</th>
        <th>Dětský park</th>
        <th>Obě atrakce</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Dítě do 3,9 let</td>
        <td>- Kč</td>
        <td>50 Kč</td>
        <td>50 Kč</td>
      </tr>
      <tr>
        <td>Dítě 4 – 17,9 let</td>
        <td>110 Kč</td>
        <td>150 Kč</td>
        <td>240 Kč</td>
      </tr>
      <tr>
        <td>Dospělý (doprovod)</td>
        <td>99 Kč</td>
        <td>-</td>
        <td>99 Kč</td>
      </tr>
      <tr>
        <td>Rodinné (1 dospělý + 2 děti)</td>
        <td>279 Kč</td>
        <td>179 Kč</td>
        <td>349 Kč / 519 Kč*</td>
      </tr>
      <tr>
        <td>Rodinné (2 dospělí + 2 děti)</td>
        <td>379 Kč</td>
        <td>179 Kč</td>
        <td>409 Kč / 589 Kč*</td>
      </tr>
      </tbody>
    </table>
    <p class="note">* S dětmi nad 4 roky / kombinace</p>
  </section>

</template>

<script setup lang="js">

import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const priceRef = ref(null)

onMounted(() => {
  gsap.from(priceRef.value,{
    scrollTrigger: {
      trigger: priceRef.value,
      start: 'top 80%',
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  })
})

</script>

<style>



</style>
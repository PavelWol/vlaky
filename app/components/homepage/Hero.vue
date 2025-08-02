<template>

  <section class="hero">
    <div class="overlay"></div>

    <div class="hero-content text-wrapper">
      <h1 class="hero-heading">Železniční park <span class="highlight">plný zábavy!</span></h1>
      <div class="hero-paragraph">
        <p>
          Vítejte ve světě, kde se sny rozjíždějí po kolejích! Čeká vás den plný smíchu,
          dobrodružství a nových objevů - v historickém motoráčku, mezi atrakcemi, i v přírodě kolem.
          Naskočte do vlaku a hurá na cestu za zážitky, které budou bavit děti i dospělé!
        </p>
      </div>
      <a ref="btnRef" href="#onas" class="btn">Více informací</a>
    </div>
  </section>

</template>

<script setup lang="js">


import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useState } from '#app'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const wrapper = ref(null)
const btnRef = ref(null)

const heroAnimated = useState('heroAnimated', () => false)

onMounted(() => {
  if (heroAnimated.value) return // animace už byla, přeskoč

  const split = new SplitText('.hero-heading', {
    type: 'chars,words',
    charsClass: 'char'
  })

  gsap.from(split.chars, {
    opacity: 0,
    y: -40,
    duration: 0.2,
    ease: 'power2.out',
    stagger: {
      each: 0.1,
      from: 'random',
    }
  })

  gsap.from('.hero-paragraph', {
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: 2.5,
    ease: 'power2.out'
  })

  gsap.from(btnRef.value, {
    scrollTrigger: {
      trigger: btnRef.value,
      start: 'top 80%',
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    delay: 2.7,
    ease: 'power2.out'
  })

  gsap.fromTo('.overlay',
      { scale: 1 }, // začíná mírně přiblížené
      {
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
  )

  heroAnimated.value = true // zaznamenáme, že proběhla
})


</script>

<style>

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 218px;
  color: white;
  overflow: hidden;
  height: 100vh;
}

.overlay {
  background-image: url('/images/backgrounds/hero.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  inset: 0;
  will-change: transform;
}



/* Obsah uprostřed */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: auto;
  padding-top: 260px;
}

.hero-content h1 {
  font-size: 80px;
  line-height: 112%;
  max-width: 648px;
  margin: 0 auto;
}

.hero-content .highlight {
  color: #FFC779; /* oranžový text */
}

.hero-content p {
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 840px;
  color: #ffffff;
}

.char {
  display: inline-block;
  will-change: transform, opacity;
}

@media (max-width: 1024px) {
  .hero {
    padding-bottom: 80px ;
  }
}

</style>

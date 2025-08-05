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
      <div class="btn-wrapper" >
        <div ref="btnRef1">
          <PrimaryButton href="rezervace">Rezervace</PrimaryButton>
        </div>
        <div ref="btnRef2">
          <SecondaryButton href="#tesit-se">Více informací</SecondaryButton>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="js">


import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useState } from '#app'
import SecondaryButton from "~/components/interactive/button/SecondaryButton.vue";
import PrimaryButton from "~/components/interactive/button/PrimaryButton.vue";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const wrapper = ref(null)
const btnRef1 = ref(null)
const btnRef2 = ref(null)

const heroAnimated = useState('heroAnimated', () => false)

onMounted(() => {
  if (heroAnimated.value) return // animace už byla, přeskoč

  const split = new SplitText('.hero-heading', {
    type: 'chars,words',
    charsClass: 'char'
  })

  const splitText = new SplitText('.hero-paragraph', {
    type: 'chars,words',
    charsClass: 'char'
  })

  const isMobile = window.innerWidth < 768
  gsap.from(split.chars, {
    opacity: 0,
    y: -40,
    duration: 0.2,
    rotation: "random(-80, 80)",
    ease: 'power2.out',
    stagger: {
      each: 0.1,
    }
  })

  gsap.from(splitText.chars, {
    opacity: 0,
    y: 50,
    transformOrigin: '50% 50% -160px',
    duration: true,
    delay: 2.5,
    ease: 'power3',
    stagger: {
      each: 0.1,
      from: 'end',
      amount: 1,
    }
  })

  gsap.from(btnRef1.value, {
    scrollTrigger: {
      trigger: btnRef1.value,
      start: 'top 80%',
    },
    ...(isMobile
        ? { y: 30, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' } // MOBILE animace
        : { x: -50, opacity: 0, duration: 0.8, delay: 4, ease: 'power2.out' }) // DESKTOP animace
  })

  // 🔽 Animace pro btnRef2 – odlišná pro mobil
  gsap.from(btnRef2.value, {
    scrollTrigger: {
      trigger: btnRef2.value,
      start: 'top 80%',
    },
    ...(isMobile
        ? { y: 30, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' } // MOBILE animace
        : { x: 50, opacity: 0, duration: 0.8, delay: 4, ease: 'power2.out' }) // DESKTOP animace
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
  color: #FFF8ED;
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
  color: #FFC779;
}

.hero-content p {
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 840px;
  color: #ffffff;
}

.btn-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.btn-wrapper a:first-child {
  margin-right: 8px;
}

.char {
  display: inline-block;
  will-change: transform, opacity;
}

@media (max-width: 1024px) {
  .hero {
    padding-bottom: 80px ;
    height: unset;
  }

  .btn-wrapper {
    flex-direction: column;
  }

  .btn-wrapper a:first-child {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .hero-content {
    padding-top: 160px;
  }

  .hero-paragraph {
    padding: 0 24px;
  }
}

</style>

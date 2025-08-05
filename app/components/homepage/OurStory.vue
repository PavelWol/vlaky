<template>

  <section id="story" class="story">
    <BackgroundScroll />
    <div class="container">
      <SectionHeading
          color="red"
          align="center"
      >
        <template #title>
          <h2>Náš příběh</h2>
        </template>
        <template #subtitle>
          <p ref="p1" class="char">
            Naše železniční dobrodružství se zrodilo na části trati Čejč–Ždánice, která zůstala zachována z Čejče do Uhřic u Kyjova a
            kterou jsme oživili s láskou k historii i hravosti. Společnost TMŽ s.r.o. si dala za cíl
            vytvořit místo, kde se potkává rodinná zábava, vůně dobrodružství a příběhy ze světa vlaků.
          </p>
        </template>
      </SectionHeading>

      <!-- Video -->

      <div class="video-container">
        <video
            width="1300"
            height="590"
            muted
            autoplay
            loop
            :src="videoSrc"
            :alt="videoAlt"
            class="media-video"
        />
      </div>

      <p ref="p2" class="char">
        S pomocí Jirky Kotase a nadšenců z Klubu přátel kolejových vozidel z Brna a historických kousků z jeho sbírky získal
        náš park kouzlo starých časů. Díky podpoře mnoha dalších se nám daří vytvářet prostor,
        kde si každý najde to svoje – od dětských her až po kouzlo mašinek.
        <br>
        <br>
        A víte co? Jsme teprve na začátku! Postupně přibývají tematické stanice, výstavy a atrakce,
        které spojují svět železnice s přírodou a fantazií. Chceme, aby se Zážitková železnice stala
        vaším oblíbeným výletním cílem – místem, kam se budete rádi vracet s úsměvem a plnou hlavou vzpomínek.
      </p>
    </div>
  </section>

</template>

<script setup lang="js">

import SectionHeading from "~/components/ui/SectionHeading.vue";
import BackgroundScroll from "~/components/BackgroundScroll.vue";

import {ref} from "vue";

const videoSrc = ref('/video/train.mp4')
const videoAlt = ref('vlak')

import { SplitText } from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from "gsap";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const p1 = ref(null)
const p2 = ref(null)


onMounted(() => {
  const paragraphs = [p1.value, p2.value]

  paragraphs.forEach((el) => {
    const split = new SplitText(el, {
      type: "chars",
      charsClass: "char"
    })

    gsap.fromTo(split.chars,
        { color: "#FFF8ED" },
        {
          color: "#353535",
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          }
        }
    )
  })
})

</script>

<style>

.story {
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #353535;
  position: relative;
}


.story p {
  font-size: 24px;
  max-width: 850px;
  margin: 0 auto;
  margin-top: 24px
}

.story .media-video {
  margin: 60px 0 36px 0;
  max-width: 100%;
  border-radius: 16px;
  max-height: 590px;
  object-fit: cover;
}

</style>
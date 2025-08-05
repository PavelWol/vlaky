<template>

  <div ref="oslavyRef" class="oslavy">
    <BackgroundScroll />
    <div class="container">
      <SectionHeading
          color="red"
          align="center"
          showCards
      >
        <template #title>
          <h2>Oslavte s námi den plný zážitků!</h2>
        </template>
        <template #subtitle>
          <p>
            Hledáte místo, kde se děti budou celý den smát, běhat, tvořit a zažívat jedno
            dobrodružství za druhým? Zábavní park Zážitková železnice je jako
            stvořený pro narozeninové oslavy, setkání kamarádů nebo rodinné dny plné radosti.
            A když budete chtít, klidně i pro firemní akce.
          </p>
        </template>
        <template #cards>
          <img src="https://placehold.co/600x400" >
          <img src="https://placehold.co/600x400" >
          <img src="https://placehold.co/600x400" >
        </template>
      </SectionHeading>
      <p>
        Připravíme pro vás program na míru – ať slaví tříletý strojvůdce nebo desetiletá dobrodružka.
        Můžete se těšit na jízdu historickým motorákem, skákací hrad,
        kolotoč, pískový svět, tvořivé dílničky nebo projížďku šlapací drezínou.
        Náš areál nabídne spoustu prostoru pro hraní i odpočinek, a vy budete mít vše jen pro sebe.
      </p>
      <p>
        Zajistíme i občerstvení, a pokud si budete přát, připravíme stylovou výzdobu
        nebo fotokoutek pro památeční snímky.
        Oslavy u nás jsou vhodné pro narozeniny, srazy vláčkařů, školní rozloučení i různé tematické dny.
      </p>
      <p>
        Cena se odvíjí podle programu a délky pronájmu. Rádi vám připravíme nabídku na míru.
        Pro rezervaci a další informace nás stačí kontaktovat.<br><b>Hurá do toho!</b></p>
    </div>
    <Form />
  </div>

</template>

<script setup lang="js">

import SectionHeading from "~/components/ui/SectionHeading.vue";
import Form from "~/components/interactive/Form.vue";

import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import BackgroundScroll from "~/components/BackgroundScroll.vue";

gsap.registerPlugin(ScrollTrigger)

const oslavyRef = ref(null)

onMounted(() => {
  gsap.from(oslavyRef.value, {
    scrollTrigger: {
      trigger: oslavyRef.value,
      start: 'top 80%',
    },
    x: -20,
    opacity: 0.5,
    duration: 0.8,
    ease: 'power2.Out'
  })
})

</script>

<style scoped>



.oslavy {
  position: relative;
}

:deep(.grid) {
  margin-bottom: 80px;
}

p {
  max-width: 860px;
  margin: 0 auto;
  margin-top: 24px;
  text-align: center;
}

</style>
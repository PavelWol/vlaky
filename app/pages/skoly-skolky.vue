<template>

  <div ref="skolyRef" class="skoly-skolky">
    <BackgroundScroll />
    <div class="container">
      <SectionHeading
          color="red"
          align="center"
          showCards
      >
        <template #title>
          <h2>Vzdělávání na kolejích: Interaktivní výlety pro školy</h2>
        </template>
        <template #subtitle>
          <p>
            Připravte pro své žáky jedinečný výlet, který zábavnou formou rozvíjí znalosti
            o přírodě a technice. V Zábavním parku Zážitková železnice v
            Uhřicích je čeká den plný dobrodružství a poznání.
          </p>
        </template>
        <template #cards>
          <img src="https://placehold.co/600x400" >
          <img src="https://placehold.co/600x400" >
          <img src="https://placehold.co/600x400" >
        </template>
      </SectionHeading>
    </div>
    <div class="red">
      <div class="container">
        <SectionHeading
            color="yellow"
            align="center"
            showCards
        >
          <template #title>
            <h2>Co zažijete?</h2>
          </template>
          <template #subtitle>
            <p>
              Výlet začíná na nádraží v Uhřicích, kde se děti rozdělí do skupin
              a vyzkouší si různé aktivity. Následuje jízda historickým
              motorákem M 240 na stanici Bohumilice, během které děti
              pozorují krajinu a navštíví strojvedoucího v kabině.
            </p>
          </template>
          <template #cards>
            <img src="https://placehold.co/600x400" >
            <img src="https://placehold.co/600x400" >
            <img src="https://placehold.co/600x400" >
          </template>
        </SectionHeading>
        <p class="subtext">
          V zábavním parku na ně čekají skákací hrady, kolotoč, pískoviště a další atrakce.
          Na stanici Bohumilice se děti promění v indiány, vyzkouší si rýžování
          zlata a navštíví bobří hráz a ropný vrt. Během výletu se děti seznamují
          s novými i historickými technologiemi a poznávají místní přírodu.
        </p>
      </div>
    </div>
    <div class="container">
      <SectionHeading
          color="red"
          align="center"
      >
        <template #title>
          <h2>Proč si vybrat náš výlet?</h2>
        </template>
        <template #subtitle>
          <p>
            Zábavnou formou rozvíjíme znalosti o přírodě a technice.
            Podporujeme zájem dětí o objevování světa.
            Zajišťujeme bezpečné a pohodlné prostředí.
            Areál je bezbariérový.
          </p>
        </template>
      </SectionHeading>
    </div>
    <div class="container">
      <SectionHeading
          color="red"
          align="center"
      >
        <template #title>
          <h2>Praktické informace:</h2>
        </template>
        <template #subtitle>
          <p>
            Maximální kapacita: 60 dětí + doprovod.
            Cenu vám sdělíme na základě požadavků.
            Po domluvě zajistíme občerstvení.
            Děti obdrží sádrový odlitek k vymalování.
            Autobus přijede přímo na nádraží.
          </p>
        </template>
        <template #extra>
          <p>
            Pro rezervaci a další informace nás kontaktujte.
            <br><b>Těšíme se na vaši návštěvu!</b>
          </p>
        </template>
      </SectionHeading>
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

const skolyRef = ref(null)

onMounted(() => {
  gsap.from(skolyRef.value, {
    scrollTrigger: {
      trigger: skolyRef.value,
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

.subtext {
  font-size: 24px;
  max-width: 850px;
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
}

p {
  font-size: 24px;
}

.skoly-skolky {
  position: relative;
}

.red {
  background-color: #AE4343;
}

.red p {
  color: #FFF8ED;
}

.skoly-skolky > div.container:nth-last-child(2) {
  padding-top: 0 !important;
}

</style>